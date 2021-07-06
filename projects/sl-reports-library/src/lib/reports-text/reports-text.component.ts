import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sl-reports-text',
  templateUrl: './reports-text.component.html',
  styleUrls: ['./reports-text.component.css']
})
export class ReportsTextComponent implements OnInit {
  @Input() data;
  @Input() questionNumber;
  constructor() { }

  ngOnInit(): void {
  }

}
