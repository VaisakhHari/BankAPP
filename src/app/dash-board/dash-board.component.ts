import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {


  user=""


  acnum=""
  pswrd=""
  amnt=""
  
  
  acnum1=""
  pswrd1=""
  amnt1=""

  
  constructor(private ds:DataService) { 

this.user=this.ds.currentuser


  }

  ngOnInit(): void {
  }
deposit(){
  var acnum=this.acnum
  var pswrd=this.pswrd
  var amnt=this.amnt

  const result=this.ds.deposit(acnum,pswrd,amnt)
  if(result){
    alert(`${amnt} is credited, new balance is ${result}`)
  }

  
}


withdraw(){
  var acnum1=this.acnum1
  var pswrd1=this.pswrd1
  var amnt1=this.amnt1

  const result=this.ds.withdraw(acnum1,pswrd1,amnt1)
  if(result){
    alert(`${amnt1} is debited,ne balance is ${result}`)
  }
}

}
