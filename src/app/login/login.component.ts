import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your perfect banking partner"
  accnum="Account number please!!"

 database={
   1000:{acno:1000,uname:"Neer",password:1000,balance:5000},
   1001:{acno:1000,uname:"Niha",password:1000,balance:3000},
   1002:{acno:1000,uname:"Neha",password:1000,balance:2000},
 }
  constructor() { }

  ngOnInit(): void {
  }
  acnoChange(event:any){

  }
  login(){
    alert("login clicked")
  }

}
