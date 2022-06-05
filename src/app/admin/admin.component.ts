import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  allArticles;
  role='admin';

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    // this.getAllArticle();
  }
  
  getAllArticle(){
    this.apiService.getAllArticles().subscribe((value)=>{
      this.allArticles=value;
      console.log(this.allArticles);
    });
  }

  
}
