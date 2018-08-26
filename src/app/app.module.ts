import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule }    from '@angular/common/http';
import { TodoListComponent } from './components/todo-list/todo-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
