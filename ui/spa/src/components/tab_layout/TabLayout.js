import './TabLayout.css';

import FileBrowser from '../file_browser/FileBrowser.js';
import PdfRenderer from '../pdfrenderer/PdfRenderer.js';
import React, { useState, useEffect } from 'react';

function TabLayout({tab_property}) {
    const [path, setPath] = useState("")

    useEffect((index) => {
        setPath(tab_property.pdfPath)
    }, []);

    return (
        <div className="TabLayout">
            {path === ""
                ? <FileBrowser setPdfPath={setPath} />
                : <PdfRenderer render_pdf_path={path} />
            }
        </div>
    );
}

export default TabLayout;
