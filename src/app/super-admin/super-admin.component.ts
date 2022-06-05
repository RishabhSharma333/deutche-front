import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from '../service/alert.service';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit, OnDestroy {
  currentArticle;
  constructor(private alertService:AlertService,private apiService:ApiService) { 
    this.alertService.articleEmitter.subscribe(value=>{
      this.currentArticle=value;
    })
  }
  comparing:boolean=false;
  role='superadmin';
  ngOnInit() {
  }
  setComparing(value:boolean){
    this.comparing=value;
    if(value){
      this.alertService.articleEmitter.subscribe(value=>{
        this.currentArticle=value;
      })
    }
    // else{
    //   this.alertService.articleEmitter.unsubscribe();
    // }
  }
  approveArticle(){
    console.log(this.currentArticle.id);
    this.apiService.approveArticle(this.currentArticle.id).subscribe((value)=>{
      this.alertService.refreshListEmitter.emit();
    });
  }
  ngOnDestroy(): void {
    this.alertService.articleEmitter.unsubscribe();
  }
  deleteArticle(){
    this.apiService.deleteArticle(this.currentArticle.id).subscribe(()=>
      this.alertService.refreshListEmitter.emit()
    );
  }


}
