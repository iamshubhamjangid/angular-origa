import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  
  constructor(private http: HttpClient) { }
apidata : any;
  getdata() {
    return this.http.get('https://jsonplaceholder.typicode.com/users').toPromise();

  }

}
