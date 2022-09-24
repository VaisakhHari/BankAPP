import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim="Your Perfect Banking Partner"
  acnt="account number / user id"

  acno=""
  pass=""

  userDetails:any={
    1000:{acno:1000,username:"Chippy",passsword:789,balance:50000},
    1001:{acno:1001,username:"Vaisakh",passsword:456,balance:80000},
    1002:{acno:1002,username:"Anu",passsword:123,balance:4300},
    1003:{acno:1003,username:"Kunju",passsword:147,balance:17450},
    1004:{acno:1004,username:"Max",passsword:258,balance:23000},
    1005:{acno:1005,username:"Green",passsword:369,balance:430000}

  }

  constructor() { }

  ngOnInit(): void {
  }


  login(){
    var acnum= this.acno
    var psw=this.pass
    let userDetails=this.userDetails

    if(acnum in userDetails){
      if(psw==userDetails[acnum]['passsword']){
        alert("Log In Success")
      }else{
        alert("Incorrect Password")
      }



    }else{
      alert("User not exist or incorrect details")
    }

    alert("login clicked")
 }

 acnoChange(event:any){

 this.acno= event.target.value
  

 }

 passChange(event:any){
  this.pass=event?.target.value
 }

}
