import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  reviewAvg: number = 0;
  lastReview: {};
  cakes = [];
  reviews = [];
  newCake = {};
  newReview = {};
  selectedCake:any;
  details: Boolean;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.newReview = { stars: "5 stars", comment: ""}
    this.newCake = { bakerName: "", imgUrl: "" }
    this.getCakesFromService();
  }

  getCakesFromService(){
    let observable = this._httpService.getCakes()
    observable.subscribe((cakes: any ) => {
      this.cakes = cakes;
    })
  }

  createCakeFromService(newCake){
    let observable = this._httpService.createCake(newCake)
    observable.subscribe((cake) => {
      this.newCake = cake
      this.cakes.push(cake)
    })
    this.newCake = { bakerName: "", imgUrl: "" }
  }

  createReviewFromService(cake, newReview){
    let observable = this._httpService.createReview(cake._id, newReview)
    observable.subscribe(cakeData => {
      let observable = this._httpService.getCakes()
      observable.subscribe((cakes: any ) => {
        console.log(cakes)
        this.cakes = cakes;
        this.setSelectedCake(cake)
      })
    })
    this.newReview = { title: "", description: "" }
  }

  setSelectedCake(cake) {
    this.selectedCake = cake;
    this.reviews = cake.reviews
  }
}
