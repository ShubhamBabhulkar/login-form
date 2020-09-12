import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  userName: string;
  constructor(
    private router: Router
  ) { }
  
  ngOnInit() {
    this.userName = localStorage.getItem('user').split('@')[0];
    if (!this.userName) {
      this.router.navigateByUrl('');
    }
    console.log('this.userName', this.userName);
  }

}
