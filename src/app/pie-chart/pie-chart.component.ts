import { Component, OnInit } from '@angular/core';
import { Label, SingleDataSet, Color } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public pieChartLabels: Label[] = ['Mo Salah', 'Mane', 'Firminho', 'Martial', 'Rashford', 'Lukaku'];
  public pieChartData: SingleDataSet = [73, 60, 48, 45, 37, 28];
  public pieChartType: ChartType = 'pie';
  public pieChartColor: Color[]= [{backgroundColor: [ 'pink', 'pink', 'pink', 'red', 'red', 'red'] } ]

  constructor() { }

  ngOnInit(): void {
  }

}
