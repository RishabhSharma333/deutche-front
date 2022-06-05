import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlBase: string = 'http://localhost:8080/article/';
  constructor(private httpClient: HttpClient) { 

  }

  postArticle(){
    // this.httpClient.post();
  }

  getAllArticles(){
   return  this.httpClient.get(this.urlBase+'getall');
  }

  addArticle(article){
    return this.httpClient.post(this.urlBase+'save',article);
  } 

  filterArticle(filterText){
    return this.httpClient.get(this.urlBase+'search-title/'+filterText);
  }

  sortArticlesByAuthor(){
    return this.httpClient.get(this.urlBase+'getsortbyauthor');
  }

  sortArticleByDate(){
   return this.httpClient.get(this.urlBase+'getsortbydate')
  }

  getAllMyArticles(authorname){
    return this.httpClient.get(this.urlBase+'getAllmyArticles/'+authorname);
  }

  getAllMyDrafts(authorname){
    return this.httpClient.get(this.urlBase+'getmyDraft/'+authorname);
  }

  getAllDrafts(){
    return this.httpClient.get(this.urlBase+'getDrafts');
  }

  approveArticle(articleId){
    return this.httpClient.post(this.urlBase+'approve/'+articleId,{});
  }

  deleteArticle(articleId){
    return this.httpClient.delete(this.urlBase+'delete/'+articleId);
  }
}
