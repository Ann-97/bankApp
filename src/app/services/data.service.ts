import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers:new HttpHeaders()
}



@Injectable({
  providedIn: 'root'
})
export class DataService {

 currentUser:any
 currentAcno:any

  database:any ={
    1000:{acno:1000,uname:"Neer",password:1000,balance:5000,transaction:[]},
    1001:{acno:1001,uname:"Niha",password:1001,balance:3000,transaction:[]},
    1002:{acno:1002,uname:"Neha",password:1002,balance:2000,transaction:[]},
  }

  constructor(private http:HttpClient) { 
    this.getDetails
  }

  //to save data in local storage
  saveDetails(){
    localStorage.setItem("database",JSON.stringify(this.database))

    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
  }

//to get data from localstorage
getDetails(){
  if(localStorage.getItem("database")){
    this.database=JSON.parse(localStorage.getItem("database")||'')
  }
  if(localStorage.getItem("currentAcno")){
    this.database=JSON.parse(localStorage.getItem("currentAcno")||'')
  }
  if(localStorage.getItem("currentUser")){
    this.database=JSON.parse(localStorage.getItem("currentUser")||'')
  }
 
}




  //register
    register(uname:any,acno:any,password:any) {
    const data={
      uname,
      acno,
      password
    }
   return this.http.post('http://localhost:3000/register',data)
  }
//login
login(acno:any,pswd:any){
  //user entered acno and pswd

  const data={
    acno,
    pswd
  }
     //login api call
    return this.http.post('http://localhost:3000/login',data)
}

 //deposit
deposit(acno:any,pswd:any,amt:any){
  
  const data={
    amt,
    acno,
    pswd
  }
 return this.http.post('http://localhost:3000/deposit',data,this.getOptions())
}

   getOptions(){
  //to fetch token
 const token= JSON.parse(localStorage.getItem("token")||'')

  //create http header
  let headers=new HttpHeaders()
  //add token to req header
 if(token){
   headers=headers.append('x-access-token',token)
  options.headers=headers
 }
  return options
}

//withdraw
withdraw(acno:any,pswd:any,amt:any){
  const data={
    amt,
    acno,
    pswd
  }
 return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())
}


//transaction
transaction(acno:any){
  const data={
   
    acno,
   
  }
 return this.http.post('http://localhost:3000/transaction',data,this.getOptions())
}
 
onDelete(acno:any){
  return this.http.delete('http://localhost:3000/onDelete/'+acno,this.getOptions())
}

}




