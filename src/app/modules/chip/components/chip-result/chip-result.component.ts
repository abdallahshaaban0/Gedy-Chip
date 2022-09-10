import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chip-result',
  templateUrl: './chip-result.component.html',
  styleUrls: ['./chip-result.component.scss']
})
export class ChipResultComponent implements OnInit { // show chip result as chips in input field
  @Input() selectedList: string[] = [];
  @Output() onDeselect: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  deSelect(chip: any, index: number) { // deSelect a chip code goes here..
    this.selectedList.splice(index, 1);
    this.onDeselect.emit(this.selectedList);
    
  }

}
