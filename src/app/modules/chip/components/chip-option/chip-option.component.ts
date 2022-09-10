import { Component, Input, Output, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chip-option',
  templateUrl: './chip-option.component.html',
  styleUrls: ['./chip-option.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipOptionComponent { // show dropdown list of chips 
  @Input() dataList: string[] = [];

  @Output() onItemSelected: EventEmitter<any> = new EventEmitter(true);

  selectedDataList: string[] = []

  constructor() { }

  onSelect(selectedChip: string, index: number) {
    this.selectedDataList = this.dataList?.filter((chip: string, index) => {
      return selectedChip == chip ? this.dataList?.splice(index, 1) : false;
    })
    this.onItemSelected.emit(this.selectedDataList);
  }

}
