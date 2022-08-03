import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MetaDataService, PageMetadata } from './meta-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular-Universal';

  url: string = '';

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    @Optional() private metadataService: MetaDataService
  ) {
    if (this.metadataService)
      this.metadataService.updateMetadata(this.getPageMetatags());
  }

  ngOnInit(): void {
    this.url = this.doc.location.href;
  }

  getPageMetatags() {
    const defaultMetadata: Partial<PageMetadata> = {
      title: 'Welcome To Home Page',
    };
    defaultMetadata.image = '.assets/images/download.jpeg';
    defaultMetadata.description =
      'This is home Page for changing Meta tags Dynamically';
    return defaultMetadata;
  }
  alert() {
    const email = 'mock@email.com';
    const subject = 'testing';
    const emailBody = ' Hii you are sending mail to mock@Email.com';
    this.doc.location =
      'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
  }
}
