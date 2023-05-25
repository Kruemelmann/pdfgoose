package main

import (
	"embed"
	"io/fs"
	"log"
	"os"

	"github.com/kruemelmann/pdfgoose/src/web"
)

var (
	//config
	route           = "0.0.0.0:9000"
	uiConteinerPath = "ui/container/index.html"

	uiSpaPath = "ui/spa/build"
)

//go:embed ui/spa/build/*
var FrontendSpaFS embed.FS

func main() {
	l := log.New(os.Stderr, "", 0)

	//TODO read envs for a prod and a dev mode
	spaRoot, err := fs.Sub(FrontendSpaFS, uiSpaPath)
	if err != nil {
		l.Fatal(err)
	}
	srv := web.CreateWebServer(route, &spaRoot)
	l.Println("Server started on " + route)
	l.Fatal(srv.ListenAndServe())

	/*
		go func() {
			r := web.CreateWebServer()
			l.Fatal(http.ListenAndServe("localhost:9000", r))
		}()
		a := desktop.CreateAndServeApp(l, uiConteinerPath)
		defer a.Close()
		a.Wait()
	*/
}
