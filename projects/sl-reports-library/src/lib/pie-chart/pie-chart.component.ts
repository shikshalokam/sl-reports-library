import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'sl-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() data;
  @Input() questionNumber;
  @ViewChild('chartRootElement') chartRootElement;
  @ViewChild('chartCanvas') chartCanvas;
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: { position: 'bottom', align:'start'},
  };
  public pieChartLabels: Label[];
  public pieChartData: SingleDataSet;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public chartColors: Array<any>;
  constructor() {}

  ngOnInit() {
    this.pieChartLabels = this.data.chart.data.labels;
    this.pieChartData = this.data.chart.data.datasets[0].data;
    this.chartColors = [{ backgroundColor: this.data.chart.data.datasets[0].backgroundColor }];
  }
}

