import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private alertService:AlertService) {
    this.alertService.articleEmitter.subscribe((value)=>{
      this.currentArticle=value;
    })
  }
  currentArticle;
  ngOnInit() {
  }

}
