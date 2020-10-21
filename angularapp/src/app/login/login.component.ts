import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
  }
  isLoginSuccessful() {
    this.userService.isLoginSuccessful(this.username, this.password).subscribe((arg: any) => {
      if (arg.loginStatus) {
        //login successful
        alert("Login successful");
        this.router.navigate(['/', 'products']);
      } else {
        //login not successful
        alert("Incorrect username and password");
      }
    });
  }
}
