import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  public items = []

  constructor(private authService: AuthService) { 
  }
  ngOnInit() {
    this.donesi()
  }
  
  donesi() {
    console.log("1");
    this.authService.getToDo().toPromise().then(response => {
      console.log(response)
    });
  }
}
