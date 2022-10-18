import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
Adminname!:any;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.Adminname=sessionStorage.getItem('AdminEmail');
    if(this.Adminname===null)
    this.router.navigateByUrl('/Home');
  }

}