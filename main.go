package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/kruemelmann/pdfgoose/src/desktop"
)

var (
	//config
	route = "0.0.0.0:9000"
)

func main() {
	l := log.New(os.Stderr, "", 0)

	// TODO gorilla webserver
	go func() {
		r := mux.NewRouter()
		r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
			w.Write([]byte("pdfgoose!\n"))
		})
		l.Fatal(http.ListenAndServe("localhost:9000", r))

	}()

	a := desktop.CreateAndServeApp(l, "http://localhost:4200")
	defer a.Close()
	// Blocking pattern
	a.Wait()
}
