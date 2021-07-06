import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sl-expansion-table',
  templateUrl: './expansion-table.component.html',
  styleUrls: ['./expansion-table.component.css']
})
export class ExpansionTableComponent implements OnInit {
  @Input() datas;
  isOpenIndex;
  constructor() { }

  ngOnInit(): void {
  }

}
