import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartDataSets, ChartType } from 'chart.js';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.css']
})
export class BubbleChartComponent implements OnInit {
  public bubbleChartLabels: Label[]= ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
  public bubbleChartData: ChartDataSets[] = [
    {
      data: [
        { x: 2011, y: 89, r:44 },
        { x: 2012, y: 89, r:47 },
        { x: 2013, y: 64, r:31 },
        { x: 2014, y: 70, r:51 },
        { x: 2015, y: 66, r:34},
        { x: 2016, y: 69, r:39 },
        { x: 2017, y: 81, r:29 },
        { x: 2018, y: 66, r:29 }
      ],
      label: 'Manchester United'
    },
  ];
  public bubbleChartType: ChartType = 'bubble';
  constructor() { }

  ngOnInit(): void {
  }

}
