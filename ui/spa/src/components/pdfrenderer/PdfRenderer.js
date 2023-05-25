import './PdfRenderer.css';
import { React, useRef, useEffect } from 'react';
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import { pdfjsWorker } from "pdfjs-dist/build/pdf.worker.entry";

function PdfRenderer({render_pdf_path}) {
    var currentLocation = window.location.hostname+":9000"

    const loadpdf = () => {
        var canvas_container = document.getElementById('canvas-container');

        let filename = render_pdf_path.substring(render_pdf_path.lastIndexOf('/')+1);
        var url = 'http://' + currentLocation + '/pdf?path='+ filename;
        var loadingTask = pdfjsLib.getDocument(url);
        loadingTask.promise.then(async function(pdf) {
            for (let i = 1; i <= pdf.numPages; i++) {
                let a = await pdf.getPage(i).then((page) => {
                    renderpage(page, pdf.numPages)
                });

            }
        });
    }

    const renderpage = (page, numPages) => {
        var canvas_container = document.getElementById('canvas-container');
        var viewport = page.getViewport(
            {scale: 2, }
        );
        var outputScale = window.devicePixelRatio || 1;

        let page_num = page._pageIndex
        let numRenderedPages = document.getElementById("canvas-container").childElementCount;
        //create new canvas element if needed
        if (page_num >= numRenderedPages) {
            let node = document.createElement("canvas");
            node.setAttribute("id", "the-canvas"+page_num);
            canvas_container.appendChild(node);
        }
        //remove canvas elements if they are not needed
        let lastPageIndex = numPages
        if (lastPageIndex < numRenderedPages) {
            for (let i = 0, len = (numRenderedPages - lastPageIndex); i < len; i++) {
                canvas_container.removeChild(canvas_container.lastChild);
            }
        }


        var canvas = document.getElementById('the-canvas'+page_num);
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = Math.floor(viewport.width) + "px";
        canvas.style.height =  Math.floor(viewport.height) + "px";
        var context = canvas.getContext('2d');

        var transform = outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;
        var renderContext = {
            canvasContext: context,
            transform: transform,
            viewport: viewport
        };
        page.render(renderContext);
        page.getTextContent().then(function(textContent){

        })
    }

    useEffect(() => {
        loadpdf()
    }, [loadpdf])

    return (
        <div>
            <>
                <div id="canvas-container"></div>
            </>
        </div>
    )
}

export default PdfRenderer;
