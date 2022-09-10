import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ChipBase } from './modules/chip/_model/chipBase.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gedyChip';
  reactiveForm!: FormGroup;
  chipData: ChipBase = {
    dataList: [
      'Python',
      'Java',
      'Javascript',
      'Go'
    ],
    placeholder: 'Type a Programming Language'
  }
  programmingLanguage: any = '';

  constructor() {
    this.initForm();
  }

  initForm() {
    this.reactiveForm = new FormGroup({
      programmingLanguage: new FormControl('')
    })
  }
}
