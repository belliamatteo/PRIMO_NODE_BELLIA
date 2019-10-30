import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results: Object[];
  private BASE_URL:string = '/api/products';
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
      // Make the HTTP request:
      this.http.get('https://3000-caeef2ae-c906-425a-b2e8-40fa70ff2063.ws-eu0.gitpod.io/api/products').subscribe(data => {
        // Read the result field from the JSON response.
        this.results = data['products'];
      });
    }
}
