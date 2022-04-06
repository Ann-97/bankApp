import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your perfect banking partner"
  accnum="Account number please!!"
  acno=""
  pswd=""

 database:any ={
   1000:{acno:1000,uname:"Neer",password:1000,balance:5000},
   1001:{acno:1001,uname:"Niha",password:1001,balance:3000},
   1002:{acno:1002,uname:"Neha",password:1002,balance:2000},
 }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  acnoChange(event:any){
    this.acno=event.target.value
    
  }

  pswdChange(event:any){
    this.pswd=event.target.value
  }

  login(){
   var acno=this.acno;
   var pswd=this.pswd;

    let database=this.database

   if(acno in database){
     if(pswd == database[acno]["password"]){
       alert("login successfull")
       this.router.navigateByUrl("dashboard")
     }
     else{
      alert("Incorrect password")
   }
  
   }
  
   else{
    alert("user doesnot exist")
   }
  }
}

//login using template referencing variable
//login(a:any,p:any){
 // var acno= a.value
 // var pswd= p.value

  // let database=this.database

  //if(acno in database){
  //  if(pswd == database[acno]["password"]){
  //    alert("login successfull")
  //  }
//else{
 //    alert("Incorrect password")
 // }
 
 // }
 
 // else{
 ///  alert("user doesnot exist")
 // }
// }
//}