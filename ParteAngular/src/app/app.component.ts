import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; //HTTP CLIENT
import { Product } from './Products.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  results: Product[];
  private BASE_URL:string = '/api/products';
    // Inject HttpClient into your component or service.
    constructor(private http: HttpClient) {}

    ngOnInit(): void {

    }
    faiQualcosa(): void {
        console.log("ciao1");
      // Make the HTTP request:
      this.http.get<Product[]>('https://3000-bc8a1f5f-3820-42a4-a86b-435667f0d075.ws-eu0.gitpod.io/api/products').subscribe((data: Product[]) => {
        // Read the result field from the JSON response.
        this.results = data['products'];
        console.log(data);
      });
    }
}
