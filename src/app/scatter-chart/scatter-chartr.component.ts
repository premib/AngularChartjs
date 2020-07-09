import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartLegendLabelItem } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-scatter-chartr',
  templateUrl: './scatter-chartr.component.html',
  styleUrls: ['./scatter-chartr.component.css']
})
export class ScatterChartrComponent implements OnInit {
  public scatterChartLabels: Label[]= ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018']
  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 2011, y: 89 },
        { x: 2012, y: 89 },
        { x: 2013, y: 64 },
        { x: 2014, y: 70 },
        { x: 2015, y: 66 },
        { x: 2016, y: 69 },
        { x: 2017, y: 81 },
        { x: 2018, y: 66 }
      ],
      label: 'Manchester United',
      pointRadius: 10,
    },
  ];
  public scatterChartType: ChartType = 'scatter';
  constructor() { }

  ngOnInit(): void {
  }

}
