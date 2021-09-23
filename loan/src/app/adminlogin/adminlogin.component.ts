import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  userlogin:FormGroup = new FormGroup(
    {
      Email:new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]),
      Password:new FormControl('',[Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"),Validators.required])
    }
  )

  Admincredentials()
  {
     console.log(this.userlogin.value)
  }

  constructor() { }

  ngOnInit(): void {
  }
  get Email()
  {
    return this.userlogin.get("Email")
  }
  get Password()
  {
    return this.userlogin.get("Password")
  }

}
