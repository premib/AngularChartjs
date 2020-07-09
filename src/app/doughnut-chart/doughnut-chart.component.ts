import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Manchester United' ,'Liverpool'];
  public doughnutChartData: SingleDataSet = [594, 567];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColor: Color[]= [{backgroundColor: [ 'red', 'pink'] } ]

  constructor() { }

  ngOnInit(): void {
  }

}
