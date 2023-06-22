import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { TodoComponent } from './todo/todo.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { TupdateComponent } from './tupdate/tupdate.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent},
  { path: 'category', component: CategoryComponent },
  { path: 'todo', component: TodoComponent  },
  { path: 'list/:item', component: ListComponent },
  {path:'update/:id',component:UpdateComponent},
  {path:'tupdate/:id',component:TupdateComponent},
  { path: '', redirectTo: 'category', pathMatch: 'full' },
  { path: '', redirectTo: 'todo', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
