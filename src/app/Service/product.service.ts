import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  prdList:IProduct[]=[];
  httpOption;
  constructor(private http:HttpClient) {
    this.httpOption={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
   }

  getAllPrd():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${environment.ApiUrl}/products`);
  }
  addPrd(prd:IProduct):Observable<any>{
    return this.http.post<any>(`${environment.ApiUrl}/products`,JSON.stringify(prd),this.httpOption);
  }

  removePrd(pid: number) {
    return this.http.delete(`${environment.ApiUrl}/products/${pid}`);
  }

  getAllCat():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(`${environment.ApiUrl}/category`)

  }


}
