import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PolarAreaCharComponent } from './polar-area-char/polar-area-char.component';
import { ScatterChartrComponent } from './scatter-chart/scatter-chartr.component';


const routes: Routes = [
  { 
    path: "pie",
    component: PieChartComponent
  },
  { 
    path: "bar",
    component: BarChartComponent
  },
  { 
    path: "bubble",
    component: BubbleChartComponent
  },
  { 
    path: "doughnut",
    component: DoughnutChartComponent
  },
  { 
    path: "line",
    component: LineChartComponent
  },
  { 
    path: "radar",
    component: RadarChartComponent
  },
  { 
    path: "polararea",
    component: PolarAreaCharComponent
  },
  { 
    path: "scatter",
    component: ScatterChartrComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
