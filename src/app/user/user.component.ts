import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user_data;
  rowData: any[] = [];
  constructor(private dataservice: DataserviceService) {
    this.dataservice.getdata().then((data) => {
      this.userdata = data;
      console.log(this.userdata);
      // for (var value of this.userdata) {
      //   this.rowData.push(
      //     {
      //       'S.No': value.id,
      //       'Name': value.name,
      //       'Username': value.username,
      //       'City': value.address.city,
      //       'PinCode': value.address.zipcode,
      //       'Company Name': value.company.name
      //     }
      //   )

      // }

    });
  }
  public userdata: any;
  ngOnInit(): void {


    // setTimeout(() => {
    // console.log('rowdata ' + this.rowData)
    // console.log('user data ' + this.userdata)
    // }, 1000);

  }
  // columnDefs = [
  //   { field: 'S.No' },
  //   { field: 'Name' },
  //   { field: 'Username' },
  //   { field: 'City' },
  //   { field: 'PinCode' },
  //   { field: 'Company Name' },
  // ];

}
