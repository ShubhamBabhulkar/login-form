import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-dashboar',
  templateUrl: './news-dashboar.component.html',
  styleUrls: ['./news-dashboar.component.scss']
})
export class NewsDashboarComponent implements OnInit {
  invalidPassword = false;
  hide = true;
  Loginform = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[A-Z])[A-Za-z\d$@$!%*?&].{1,}')

    ])
  });
  isErrorMessage: any;
  errorMessage: string;
  constructor(
    private router: Router,
    private authService: AuthService ) { }

  ngOnInit() {
    localStorage.clear();
  }

  getrequired = (value) => {
    return this.Loginform.get(value);
  }

  userLogin = (userData) => {
    if (userData.email === 'Clarion@clarion.com' && userData.password === 'Clarion123') {
      localStorage.setItem('user', userData.email);
      this.router.navigateByUrl('/signin');
    } else {
      this.errorMessage = 'Please check your email id and Password';
      console.log(this.errorMessage);
    }
  }

}
