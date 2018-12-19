import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  // templateUrl: './summary.component.html',
  // styleUrls: ['./summary.component.css']
  template: `<fusioncharts
      width="500" 
      height="300"
      type="column2d"
      dataFormat="json"
      [dataSource]="data" >
    </fusioncharts>
  `,
})
export class SummaryComponent {
  data: Object;
  constructor() { 
    this.data = {
      chart: { },
      data: [
        {value: 500},
        {value: 600},
        {value: 700}
      ]
    };
  }

  ngOnInit() {
  }

}
