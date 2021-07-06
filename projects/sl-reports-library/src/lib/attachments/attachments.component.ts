import { Component, Input, OnInit } from '@angular/core';
import { FileExtension } from './fileExtension';

@Component({
  selector: 'sl-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.css'],
})
export class AttachmentsComponent implements OnInit {
  @Input() url: string;
  @Input() extension: string;
  imageFormats: string[] = FileExtension.imageFormats;
  videoFormats: string[] = FileExtension.videoFormats;
  audioFormats: string[] = FileExtension.audioFormats;
  pdfFormats: string[] = FileExtension.pdfFormats;
  wordFormats: string[] = FileExtension.wordFormats;
  spreadSheetFormats: string[] = FileExtension.spreadSheetFormats;
  constructor() {}

  ngOnInit(): void {}

  openImage(url) {
    window.open(url, "_blank");
  }
}
