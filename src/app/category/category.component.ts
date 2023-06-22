import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { categorymodel  } from './categorymodel';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  categoryform!: FormGroup;
  data!:categorymodel[];
  

  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.categoryform = this.formbuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
     
      

    })
    this.getcategory(this.data);
  }

    addcategory(data: categorymodel) {
      console.log(data)
      this.api.addcategory(data).subscribe((res => {
        this.categoryform.reset();
      }))
      this.getcategory(data);
      
  }
  
    getcategory(data:any) {
      this.api.getcategory().subscribe(res => {
        this.data = res;
      })
    }
  
    deletecategory(dataid: number) {
      this.api.deletecategory(dataid).subscribe(res => {
        this.deletecategory(dataid);
      })
      this.getcategory(this.data);
      
    }
    
    }
  
    
  

  

  





