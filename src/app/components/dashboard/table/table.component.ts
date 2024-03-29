import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  prdList:IProduct[]=[];
  constructor(private prdSer:ProductService){}
  ngOnInit(): void {
    this.getProducts();

  }
  getProducts(){
    const observer={
      next:(data:IProduct[])=>{
        console.log("Loaded");
        this.prdList = data;
      },
      error:(err:Error)=>{ console.error('Error fetching products:', err)}
    }

      this.prdSer.getAllPrd().subscribe(observer);
  }
  removePrd(pid: number) {
    this.prdSer.removePrd(pid).subscribe(() => {
      // After successful removal, update the prdList
      this.getProducts();
    });
  }
  }


