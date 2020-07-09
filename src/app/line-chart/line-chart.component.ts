import { Component, OnInit } from '@angular/core';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public lineChartLabels: Label[] = ['2011','2012','2013','2014', '2015', '2016', '2017', '2018'];
  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;
  public lineChartPlugins = [];

  public lineChartData: ChartDataSets[] = [
    { data: [89, 89, 64, 70, 66, 69, 81, 66], label: 'Manchester United' },
    { data: [52, 61, 84, 62, 60, 76, 75, 97], label: 'Liverpool' }
  ];

  public lineChartColor: Color[]= [
    {
      borderColor: 'black',
      backgroundColor: 'red',
    },
    {
      borderColor: 'black',
      backgroundColor: 'pink',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
