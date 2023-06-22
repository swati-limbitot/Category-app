import { Component,OnInit} from '@angular/core';
import { TodoapiService } from '../todoapi.service';
import { todomodel } from '../todo/todomodel';
import { ActivatedRoute, ParamMap,Params } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  constructor( private todoapi:TodoapiService,private activatedRoute:ActivatedRoute){}

  tododata!:todomodel[];
  datacategory!: string;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: Params)=> {
      this.datacategory=param['get']("item");
      this.FilterCategory(this.datacategory);
    });
      
  }
  
  FilterCategory(item:string){
    this.todoapi.fetchdata(item).subscribe((data) => {
      console.log(item);
      console.log(data);
      this.tododata=data;

    })
  }

}