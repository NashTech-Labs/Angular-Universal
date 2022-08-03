import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular-Universal';

  url:string ="";

  constructor(@Inject(DOCUMENT) private doc:Document){
  }


  ngOnInit(): void {
    this.url = this.doc.location.href;
  }

  alert(){
    const email= "mock@email.com";
    const subject = "testing";
    const emailBody = " Hii you are sending mail to mock@Email.com"
    this.doc.location="mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
  }



}
