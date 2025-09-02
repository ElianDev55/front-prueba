import { Component, inject, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Simulate } from '../../services/simulate';

@Component({
  selector: 'app-tech',
  imports: [],
  templateUrl: './tech.html',
})
export class Tech implements OnInit {
  public chartChart!: Chart;
  private simulateService = inject(Simulate);

  ngOnInit(): void {
    const myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
          },
        ],
      },
    });
    this.chartChart = myChart;
    this.simulateService.getSimulate().subscribe((data) => {
      console.log(data);
    });
  }
}
