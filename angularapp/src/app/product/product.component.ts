import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productsList;
  categorySelected;
  selectedPrice;
  newProduct = {id: "", name: "", price: "",category: ""};
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  getAllProducts(){
    this.productService.getAllProducts()
      .subscribe(arg => this.productsList = arg);
  }

  getProductsByCategory(){
    this.productService.getProductsByCategory(this.categorySelected)
      .subscribe(arg => this.productsList = arg);
  }
  getProductsByPrice(){
    this.productService.getProductsByPrice(this.selectedPrice)
      .subscribe(arg => this.productsList = arg);
  }
  addProduct(){
    if(!this.newProduct.id)
      alert("please add id");
    if(!this.newProduct.name)
      alert("please add name")
    if(!this.newProduct.price)
      alert("Please add price");
    if(!this.newProduct.category || this.newProduct.category=="none")
      alert("please select a category");
    if(this.newProduct.id.length>0 && this.newProduct.name.length>0 && this.newProduct.price.length>0 && this.newProduct.category!="none" && this.newProduct.category.length>0){
      this.productService.addProduct(this.newProduct).subscribe((arg:any)=> {
        if(arg.msg){
          alert(arg.msg);
        }
        else{
          this.newProduct = {id: "", name: "", price: "",category: ""};
          alert("New Product added");
        }
      });
    } else{
      alert("Enter valid details");
    }
  }
}
