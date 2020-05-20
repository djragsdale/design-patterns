import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Product } from './product';


@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiURL = 'http://localhost:8081';
  private productBaseURL = '/product/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    const endpoint = 'getAllProducts';

    return this.http.get<Product[]>(`${this.apiURL}${this.productBaseURL}${endpoint}`)
      .pipe(
        tap(_ => console.log('retrieved products')),
        catchError(this.handleError<Product[]>('getAllProducts', []))
      );
  }

  getProductBySKU(sku): Observable<Product> {
    const endpoint = 'getProductBySKU/';

    return this.http.get<Product>(`${this.apiURL}${this.productBaseURL}${endpoint}${sku}`)
      .pipe(
        tap(_ => console.log(`retrieved product sku ${sku}`)),
        catchError(this.handleError<Product>('getProductBySKU', null))
      );
  }

  // /** GET hero by id. Will 404 if id not found */
  // getHero(id: number): Observable<Hero> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.get<Hero>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Hero>(`getHero id=${id}`))
  //   );
  // }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
