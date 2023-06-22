import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { TodoapiService } from '../todoapi.service'; 
import { todomodel } from './todomodel';
import { categorymodel } from '../category/categorymodel';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoform!:FormGroup;
  tododata!:todomodel[];
  data!:categorymodel[];
  selectedCategory!:string;

  constructor(private formbuilder:FormBuilder, private todoapi:TodoapiService,private api:ApiService){}
  ngOnInit(): void {
    this.todoform=this.formbuilder.group({
      name:['',Validators.required],
      aname:['',Validators.required],
      date:['',Validators.required],
      selectCategory:['',Validators.required],
      stime:['',Validators.required],
      etime:['',Validators.required]
      

    })
    this.gettodo(this.tododata);
    this.getcategory();
  }
  addtodo(data:todomodel) {
    console.log(data)
    this.todoapi.addtodo(data).subscribe((res => {
      this.todoform.reset();
    }))
    this.gettodo(data);
    
}

  gettodo(data:any) {
    this.todoapi.gettodo().subscribe(res => {
      this.tododata = res;
    })
  }

  deletetodo(dataid: number) {
    this.todoapi.deletetodo(dataid).subscribe(res => {
      this.deletetodo(dataid);
    })
    this.gettodo(this.tododata);
    
  }

  getcategory(){
    this.api.getcategory().subscribe(res=>{
      this.data=res;
    })
  }
  onChangeEvent(event:any){
    this.selectedCategory = event.target.value;
    console.log(event?.target.value);
  }


}