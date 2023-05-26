package desktop

import (
	"fmt"

	"github.com/asticode/go-astikit"
	"github.com/asticode/go-astilectron"
)

func CreateAndServeApp(l astikit.StdLogger, ui_path string) *astilectron.Astilectron {
	// Set logger
	a, err := astilectron.New(l, astilectron.Options{
		AppName:           "pdfgoose",
		BaseDirectoryPath: "build",
	})
	if err != nil {
		l.Fatal(fmt.Errorf("main: creating astilectron failed: %w", err))
	}
	//defer a.Close()

	// Handle signals
	a.HandleSignals()

	// Start
	if err = a.Start(); err != nil {
		l.Fatal(fmt.Errorf("main: starting astilectron failed: %w", err))
	}

	// New window
	var w *astilectron.Window
	if w, err = a.NewWindow(ui_path, &astilectron.WindowOptions{
		Center: astikit.BoolPtr(true),
		Height: astikit.IntPtr(700),
		Width:  astikit.IntPtr(1000),
	}); err != nil {
		l.Fatal(fmt.Errorf("main: new window failed: %w", err))
	}
	// Create windows
	if err = w.Create(); err != nil {
		l.Fatal(fmt.Errorf("main: creating window failed: %w", err))
	}
	////only for debugging
	//w.OpenDevTools()

	return a
}
