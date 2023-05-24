import { Component } from '@angular/core';
import * as PDFJS from "pdfjs-dist";
import {PdfviewService} from "../../services/pdfview.service";


@Component({
  selector: 'app-render',
  templateUrl: './render.component.html',
  styleUrls: ['./render.component.scss']
})
export class RenderComponent {
  constructor(private pdfviewserview: PdfviewService) { }

}
