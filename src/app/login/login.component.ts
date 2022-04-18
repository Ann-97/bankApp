import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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

 
  constructor(private router:Router,private ds:DataService) { }

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

    let database=this.ds.database

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