import { Component, OnInit } from '@angular/core';
import { LoginUserService } from '../../services/login-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email:"",
    password: ""
  };
  errorMessage: String;
  constructor( private loginService: LoginUserService, private router: Router) { }

  ngOnInit(): void {
  }

  async login(){
    try {
      const result = await this.loginService.loginByEmail(this.user);
      this.router.navigate(['/actividades'])
      
    } catch (error) {
        console.log(error.message); 
        this.errorMessage = error.message;
    }
  }

}
