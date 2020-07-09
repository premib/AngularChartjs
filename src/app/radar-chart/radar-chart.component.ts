import { Component, OnInit } from '@angular/core';
import { ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  public radarChartLabels: Label[] = ['Played', 'Won', 'Draw', 'Lost', 'Points', 'Goals For', 'Goals Against'];

  public radarChartData: ChartDataSets[] = [
    { data: [38, 25, 10, 3, 79, 67, 39], label: 'Manchester United' },
    { data: [38, 23, 8, 7, 71, 77, 48], label: 'Liverpool' }
  ];
  public radarChartType: ChartType = 'radar';
  public radarChartColor: Color[] = [
    {
      backgroundColor: 'red'
    },
    {
      backgroundColor: 'pink'
    }
]
  constructor() { }

  ngOnInit(): void {
  }

}
