import { Component, OnInit } from '@angular/core';
import { Color, SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-polar-area-char',
  templateUrl: './polar-area-char.component.html',
  styleUrls: ['./polar-area-char.component.css']
})
export class PolarAreaCharComponent implements OnInit {
  public polarAreaChartLabels: Label[] = ['Mo Salah', 'Mane', 'Firminho', 'Martial', 'Rashford', 'Lukaku'];
  public polarAreaChartData: SingleDataSet = [73, 60, 48, 45, 37, 28];
  public polarAreaChartType: ChartType = 'polarArea';
  // public polarAreaChartColor: Color[]= [{backgroundColor: [ 'pink', 'pink', 'pink', 'red', 'red', 'red'] } ]

  constructor() { }

  ngOnInit(): void {
  }

}
