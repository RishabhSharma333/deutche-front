import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from 'src/app/service/alert.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  heading;
  completedParagraph;
  paragraph = "";
  author: string = "last author";
  constructor(private apiService: ApiService,private alertService:AlertService) { }

  ngOnInit() {
  }

  addNewArticle() {
    if (this.heading != null && this.paragraph != null) {
      let article = {
        "title": this.heading,
        "author": this.author,
        "dateOfBirth": null,
        "latestContent": this.paragraph,
        "status":"draft"
      }
      this.apiService.addArticle(article).subscribe((value) => {
        if (value != null) {
          this.heading = null;
          this.paragraph = null;
          this.alertService.refreshListEmitter.emit();
        }
      });
    }
  }

}
