import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes(){
    return this._http.get('/cakes')
  }

  createCake(cake){
    return this._http.post('/cakes', cake)
  }

  createReview(cakeId, newReview){
    console.log(cakeId)
    return this._http.post(`/reviews/${cakeId}`, newReview)
  }

}
