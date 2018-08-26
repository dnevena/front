import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { 
  }
  public loginModel: Login = {
    username: '',
    pasword: ''
  }

  ngOnInit() {
  
  }

  myFunction() {
    this.authService.onLogin(this.loginModel).subscribe(response => console.log(response))
    console.log(this.loginModel.username);
    console.log(this.loginModel.pasword);
    console.log(this.loginModel);
  }

}
