import { Component, OnInit , Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {



  constructor(  @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
  }

}
