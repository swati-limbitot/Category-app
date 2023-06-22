import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TodoapiService } from '../todoapi.service';
import { todomodel } from '../todo/todomodel';


@Component({
  selector: 'app-tupdate',
  templateUrl: './tupdate.component.html',
  styleUrls: ['./tupdate.component.css']
})
export class TupdateComponent implements OnInit{
  public dataid!: number;
  public todo!:  todomodel;

  constructor(private activedroute: ActivatedRoute, private router: Router, private todoapi: TodoapiService) { }
  

  ngOnInit(): void {
    this.activedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id");
      //console.log("data id is",this.dataid)

    })
    this.todoapi.fetchtodo(this.dataid).subscribe((data: todomodel) => {
      this.todo = data;
    })
  }

  tupdate() {
    this.todoapi.tupdatetodo(this.todo, this.dataid).subscribe((res: todomodel) => {
      this.router.navigate(["/todo"])
    })
  }


}