import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { TodoComponent } from './todo/todo.component';
import { ListComponent } from './list/list.component';
import{ ReactiveFormsModule} from '@angular/forms';
import{ FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { TupdateComponent } from './tupdate/tupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    TodoComponent,
    ListComponent,
    UpdateComponent,
    TupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
