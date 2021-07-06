import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'sl-report-header',
  templateUrl: './report-header.component.html',
  styleUrls: ['./report-header.component.css']
})
export class ReportHeaderComponent implements OnInit {
@Input() title:any;
@Input() lastdate:any
  constructor() { }

  ngOnInit(): void {
  }

}
