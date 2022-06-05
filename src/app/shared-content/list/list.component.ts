import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { Component, Input, OnInit } from '@angular/core';
import { AlertService } from 'src/app/service/alert.service';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private apiService: ApiService, private alertService: AlertService) { 
    this.alertService.refreshListEmitter.subscribe((value)=>{
      this.getAllArticle();
    });
  }
  allArticles: any =[];
  activeIndex;
  searchTimer;
  searchFilter;
  loading;
  @Input() role;
  ngOnInit() {
    this.getAllArticle();
    this.activeIndex = 0;
  }

  getAllArticle() {
    this.loading = true;
    this.apiService.getAllArticles().subscribe((value: any) => {
      this.allArticles = value;
      console.log(this.allArticles);
      this.selectArticle(0);
      this.loading = false;
    });

  }
  selectArticle(i) {
    let article = this.allArticles[i];
    this.alertService.articleEmitter.emit(article);
    this.activeIndex = i;
  }

  filterArticles() {
    let wordSearch = this.searchFilter;
    this.loading = true;
    setTimeout(() => {
      if (wordSearch == this.searchFilter) {
        if (this.searchFilter) {
          // console.log(this.searchFilter);
          this.apiService.filterArticle(this.searchFilter).subscribe((value) => {
            this.allArticles = value;
            this.loading = false;
          });
        } else {
          this.ngOnInit();
          this.loading = false;
        }
      }
    }, 1000);
  }

  sortByAuthor() {
    this.loading = true;
    this.apiService.sortArticlesByAuthor().subscribe(value => {
      this.allArticles = value;
      this.loading = false;
    })
  }

}
