package web

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"path"
	"path/filepath"
)

type directoryContent struct {
	Directorys []dirElem `json:"directorys"`
	Files      []dirElem `json:"files"`
}

type dirElem struct {
	Name string
	Path string
}

//TODO later persist this so even after restart you will start here
var basesearchPath = "./"

func FileHandler(w http.ResponseWriter, r *http.Request) {
	cd := directoryContent{}

	entries, err := os.ReadDir(basesearchPath)
	if err != nil {
		log.Fatal(err)
	}

	for _, e := range entries {
		absPath, _ := filepath.Abs(path.Join(basesearchPath, e.Name()))
		de := dirElem{
			Name: e.Name(),
			Path: absPath,
		}
		if e.Type().IsDir() {
			cd.Directorys = append(cd.Directorys, de)
		} else if e.Type().IsRegular() {
			cd.Files = append(cd.Files, de)
		}
	}

	//Marshal json and send back to browser
	u, err := json.Marshal(cd)
	if err != nil {
		panic(err)
	}
	w.Write(u)
}
