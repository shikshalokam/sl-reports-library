import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sl-matrix-chart',
  templateUrl: './matrix-chart.component.html',
  styleUrls: ['./matrix-chart.component.css']
})
export class MatrixChartComponent implements OnInit {
  @Input() data;
  @Input() questionNumber;
  @Output() allEvidence = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  extension(name) {
    return name.split(".").pop();
  }

  openFile(file) {
    window.open(file.url, "_blank");
  }

}
