import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {
  bankform: FormGroup
  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }
  bengaluru(data) {
    console.log(data)
    let body1 = {
      'bankname' : data.bank_name,
      'ifsc' : data.ifsc,
      'branch' : data.branch,
    }
    this.http.post('https://vast-shore-74260.herokuapp.com/banks?city=BANGALORE',body1).subscribe(data => {
    console.log("2", data)
  })
  }
  mumbai(data) {
    console.log(data)
    let body2 = {
      'bankname' : data.bank_name,
      'ifsc' : data.ifsc,
      'branch' : data.branch,
    }
    this.http.post('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI',body2).subscribe(data => {
    console.log("2", data)
  })
  }
}