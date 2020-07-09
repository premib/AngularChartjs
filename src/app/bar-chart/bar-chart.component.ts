import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import * as pluginDataLabels from 'chart.js/dist/';
import { Label, Color } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{stacked:true}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['2011','2012','2013','2014', '2015', '2016', '2017', '2018'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [89, 89, 64, 70, 66, 69, 81, 66], label: 'Manchester United' },
    { data: [52, 61, 84, 62, 60, 76, 75, 97], label: 'Liverpool' }
  ];

  public barChartColor: Color[]= [
    {
      borderColor: 'black',
      backgroundColor: 'red',
    },
    {
      borderColor: 'black',
      backgroundColor: 'pink',
    }
  ]
  stack(opt: boolean){
  
    this.chart.chart.options.scales.xAxes[0].stacked= opt;
    this.chart.update();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
