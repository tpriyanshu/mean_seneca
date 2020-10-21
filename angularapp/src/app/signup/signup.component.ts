import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name;
  username;
  password;
  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
  }
  isSignUpSuccessful() {
    this.userService.isRegistrationSuccessful(this.name, this.username, this.password).subscribe((arg: any) => {
      if (arg.saveStatus) {
        //Registration successful
        alert("SignUp successful");
        this.router.navigate(['/', 'products']);
      } else {
        //Registration unsuccessful
        alert(arg.msg);
      }
    });
  }
}
