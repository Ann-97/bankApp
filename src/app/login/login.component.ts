import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  


  //register form model 
  loginForm= this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
 
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  //acnoChange(event:any){
   // this.acno=event.target.value
    
  //}

  //pswdChange(event:any){
   // this.pswd=event.target.value
  //}

  login(){
   var acno=this.loginForm.value.acno;
   var pswd=this.loginForm.value.pswd;
   //call login in dataservice

   if(this.loginForm.valid){
    this.ds.login(acno,pswd)
    .subscribe((result:any)=>{
      if (result){
        localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
        localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
        localStorage.setItem("token",JSON.stringify(result.token))
        alert(result.message)
        this.router.navigateByUrl("dashboard")
    
       }  
    },
    (result)=>{
      alert(result.error.message);
    
    }
    
  
    )}
  else{
    alert("invalid form")
  }
}

}