import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  token = "elZxQlHDSUallvL3OnnH";
  getData(url: string) {
    return this.http.get(url,
      {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.token })
      });
  }

}
