import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-add-frm',
  templateUrl: './add-frm.component.html',
  styleUrls: ['./add-frm.component.css']
})
export class AddFrmComponent implements OnInit{
  catList:ICategory[]=[];
  newProduct: IProduct = {
    id:0,
    title:'',
    price:0,
    description:'',
    image:'',
    categoryID:null,
    quantity:0,
    rating: {
      rate: 0,
      count: 0,
    },
    };
  constructor(private prdSer:ProductService,private router:Router){}
  ngOnInit(): void {
    this.prdSer.getAllCat().subscribe((cat)=>{
      this.catList=cat;
    });
  }

  AddForm() {
    const observer={
      next:()=>{
        this.router.navigate(['/Products']);
      },
      error:(err:Error)=>{ console.error('Error adding product:', err);}
    }


    this.prdSer.addPrd(this.newProduct).subscribe(observer);
  }
}
