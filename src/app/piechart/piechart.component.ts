import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  public users;
  user : any[] =[];
   pos_lat = 0;
   neg_lat = 0;
   pos_lon = 0;
   neg_lon = 0;
  constructor(private dataservice: DataserviceService) {
    this.dataservice.getdata().then(res => {
      this.users = res;
      
      // for( let i= 1; i<= this.users.length; i++){
      //   if (this.users.geo.lat > 0) {
      //     this.pos_lat++
          
      //   }
      //   else if (this.users.geo.lat < 0) {
      //     this.neg_lat++
      //   }
      //   if (this.users.geo.lng > 0) {
      //     this.pos_lon++
      //   }
      //   else if (this.users.geo.lng < 0) {
      //     this.neg_lon++
      //   }
      // }
      
      setTimeout(() => {
        // console.log(this.users.name)
        console.log(' Positive latitude' + this.pos_lat)
        console.log(' Negative latitude' + this.neg_lat)
        console.log(' Positive longitude' + this.pos_lon)
        console.log(' Negative latitude' + this.neg_lon)
      }, 1000);
    })
    }

  ngOnInit(): void {
    
for(let i = 1; i<= 10; i++){

      setTimeout(() => {
      
        console.log(this.users)           
         }, 1000);
      
    }
  
    
  }
  public pieChartLabels:string[] = ['Latitude > 0', 'Latitude < 0', 'Longitude > 0','Longitude < 0'];
  public pieChartData:number[] = [4, 2, 2 , 1];
  public pieChartType:string = 'pie';
  public chartOptions: any = {
    responsive: true
  };
  
}

