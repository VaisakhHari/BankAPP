import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


currentuser:any
currentAcno:any


  userDetails:any={
    1000:{acno:1000,username:"Chippy",passsword:789,balance:50000,transactions:[]},
    1001:{acno:1001,username:"Vaisakh",passsword:456,balance:80000,transactions:[]},
    1002:{acno:1002,username:"Anu",passsword:123,balance:4300,transactions:[]},
    1003:{acno:1003,username:"Kunju",passsword:147,balance:17450,transactions:[]},
    1004:{acno:1004,username:"Max",passsword:258,balance:23000,transactions:[]},
    1005:{acno:1005,username:"Green",passsword:369,balance:430000,transactions:[]}

  }

  constructor() {}


  register(acno:any,username:any,passsword:any){
    let userDetails=this.userDetails
    if(acno in userDetails){
      return false
    }else{
      userDetails[acno]={acno,username,passsword,balance:0}
      console.log(userDetails);
      
      return true
    }

  }


  login(acnum:any,psw:any){
  
    let userDetails=this.userDetails
  
    if(acnum in userDetails){
      if(psw==userDetails[acnum]['passsword']){
        this.currentuser=userDetails[acnum]['username']
        this.currentAcno=acnum
        return true
      }else{
        alert("Incorrect Password")
        return false
      }
  
  
  
    }else{
      alert("User not exist or incorrect details")
      return false
    }
  }


  deposit(acnum:any,pswrd:any,amt:any){
    let userDetails=this.userDetails
    var amount=parseInt(amt)  
    if(acnum in userDetails){
      if(pswrd==userDetails[acnum]['passsword']){
        userDetails[acnum]['balance']+=amount
        userDetails[acnum]['transactions'].push({
          type:'credit',amount
        }) 
        return userDetails[acnum]['balance']
      }else{
        alert("incorrect password")
      }
    }else{
      alert("User not exist")
      return false

    }
  }


  withdraw(accountno:any,password:any,amount:any){
    let userDetails=this.userDetails
    var amount1=parseInt(amount)
    if(accountno in userDetails){
      if(password==userDetails[accountno]['passsword']){
        if(amount1<=userDetails[accountno]['balance']){
          userDetails[accountno]['balance']=userDetails[accountno]['balance']-amount1
          userDetails[accountno]['transactions'].push({
            type:'debit',amount1
          })
          return userDetails[accountno]['balance']
        }else{
          alert("You dont have enough balance")
        }
      }else{
        alert("Incorrect password")
      }
    }else{
      alert("User not exist")
      return false
    }

  }

getTransaction(acno:any){
  
  return this.userDetails[acno]['transactions']



}








}
