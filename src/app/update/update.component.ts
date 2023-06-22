import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { categorymodel } from '../category/categorymodel';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public dataid!: number;
  public category!:  categorymodel;

  constructor(private activedroute: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.activedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id");
      //console.log("data id is",this.dataid)

    })
    this.api.fetchdata(this.dataid).subscribe((data: categorymodel) => {
      this.category = data;
    })
  }

  update() {
    this.api.updatecategory(this.category, this.dataid).subscribe((res: categorymodel) => {
      this.router.navigate(["/category"])
    })
  }
}

