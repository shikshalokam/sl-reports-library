import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sl-generic-chart',
  templateUrl: './generic-chart.component.html',
  styleUrls: ['./generic-chart.component.css']
})
export class GenericChartComponent implements OnInit {
  @Input() reportSections:any;

  constructor() { }

  ngOnInit(): void {
  }
  
  extension(name) {
    return name.split(".").pop();
  }

  openFile(file) {
    window.open(file.url, "_blank");
  }

}
