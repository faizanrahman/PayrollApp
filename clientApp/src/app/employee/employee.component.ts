import { Component, OnInit, NgZone } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  dataSource: any;
  selectedSlice = 'none';
  chart: any;
  sampleCode: any;
  constructor(private zone: NgZone) { 
    this.dataSource = {
      "chart": {
          "caption": "Market Share of Web Servers",
          "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
          "showLegend": "1",
          "showPercentValues": "1",
          "legendPosition": "bottom",
          "useDataPlotColorForLabels": "1",
          "enablemultislicing": "0",
          "showlegend": "0",
          "theme": "fusion",
      },
      "data": [{
          "label": "Apache",
          "value": "32647479"
      }, {
          "label": "Microsoft",
          "value": "22100932"
      }, {
          "label": "Zeus",
          "value": "14376"
      }, {
          "label": "Other",
          "value": "18674221"
      }]
    };
  } 

  // FusionCharts initialized listener to get the chart instance
  initialized($event){
    this.chart = $event.chart; // saving chart instance 
  }

  // Change listener for radio buttons
  onRadioOptionChange(option){
    this.selectedSlice = option;
    // For each data element , see if it is selected, if none then slice in all elements
    this.dataSource.data.forEach((d, index) => {
      if(option == 'none'){
        this.chart.slicePlotItem(index, false);
      } else if(option === d.label.toLowerCase()){
        this.chart.slicePlotItem(index, true);
      }
    });
  }

  // Get data item label
  getLabel(index){
    return this.dataSource.data[index].label;
  }

  // FusionCharts Component dataPlot click listener
  dataplotClick($event){
    let dataIndex = $event.dataObj.dataIndex;
    let isSliced = $event.dataObj.isSliced;
    this.zone.run(() => {
      this.selectedSlice = isSliced ? 'none' : this.getLabel(dataIndex).toLowerCase();
    })
  }
  
  ngOnInit() {
    // setTimeout(() => {
    //   SelectedSingleton.change(this.sampleCode['ex24'].title);
    // })
    }

}
