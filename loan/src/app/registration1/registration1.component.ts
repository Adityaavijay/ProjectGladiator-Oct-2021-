import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-registration1',
  templateUrl: './registration1.component.html',
  styleUrls: ['./registration1.component.css']
})
export class Registration1Component implements OnInit {

  Personaldetails:FormGroup = new FormGroup(
    {
      FirstName:new FormControl(),
      LastName:new FormControl(),
      Age:new FormControl(),
      Gender:new FormControl(),
      MobileNo:new FormControl(),
      Emailid:new FormControl('',[Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]),
      Password:new FormControl('',[Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"),Validators.required]),
      Address: new FormControl(),
      State:new FormControl(),
      City:new FormControl(),
      Pincode:new FormControl()
    }
  )

  states = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"]
  Registrationdetails()
  {
     console.log(this.Personaldetails.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

  get Firstname()
  {
    return this.Personaldetails.get("Firstname")
  }
  get Lastname()
  {
    return this.Personaldetails.get("Lastname")
  }
  get Age()
  {
    return this.Personaldetails.get("Age")
  }
  get Gender()
  {
    return this.Personaldetails.get("Gender")
  }
  get MobileNo()
  {
    return this.Personaldetails.get("MobileNo")
  }
  get Emailid()
  {
    return this.Personaldetails.get("Emailid")
  }
  get Password()
  {
    return this.Personaldetails.get("Password")
  } 
  get Address()
  {
    return this.Personaldetails.get("Address")
  }
  get State()
  {
    return this.Personaldetails.get("State")
  }
  get City()
  {
    return this.Personaldetails.get("City")
  }
  get Pincode()
  {
    return this.Personaldetails.get("Pincode")
  }
}
