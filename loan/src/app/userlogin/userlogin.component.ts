import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, PatternValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  userlogin:FormGroup = new FormGroup(
    {
      email:new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]),
      password:new FormControl('',[Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"),Validators.required])
    }
  )

  Usercredentials()
  {
     console.log(this.userlogin.value)
  }

  constructor() { }

  ngOnInit(): void {
  }
  get email()
  {
    return this.userlogin.get("email")
  }
  get password()
  {
    return this.userlogin.get("password")
  }
  

}
