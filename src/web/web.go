package web

import (
	"io/fs"
	"net/http"
	"time"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func CreateWebServer(route string, spaFS *fs.FS) *http.Server {
	r := mux.NewRouter()
	r.HandleFunc("/file", FileHandler)
	r.PathPrefix("/").Handler(http.FileServer(http.FS(*spaFS)))

	//manage all the cors staff
	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})
	srv := &http.Server{
		Handler:      handlers.CORS(originsOk, headersOk, methodsOk)(r),
		Addr:         route,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	return srv
}
