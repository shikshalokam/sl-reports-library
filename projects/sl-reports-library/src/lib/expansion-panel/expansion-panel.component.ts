import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sl-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css']
})
export class ExpansionPanelComponent implements OnInit {
  text: string;
  @Input() datas;
  isOpenIndex;

  constructor() { }

  ngOnInit(): void {
  }

}
