import { Component, ElementRef, forwardRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ChipService } from '../../services/chip.service';
import { ChipBase } from '../../_model/chipBase.type';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ChipComponent)
    }
  ]
})

// our presentational layer

export class ChipComponent implements OnInit, ControlValueAccessor {
  // chips container for chip-options and chips result which maybe used in another building blocks
 
  @Input() chipData!: ChipBase;
 
  @ViewChild('chipReference') chipReference!: ElementRef;
  
  showList: boolean = false;
  
  selectedList: [] = [];
  
  isChanged = false;
  
  value: [] = [];
  
  disabled = false;
  
  backupList: string[] = []

  onChange = (value: []) => { };

  onTouched = () => { };

  constructor(private chipService: ChipService, private _renderer: Renderer2) {
    this._renderer.listen('window', 'click', (e: Event) => {

      if (e.target !== this.chipReference['nativeElement']) {
        this.showList = false;
      }
    });
  }

  ngOnInit(): void {
    this.backupList = [...this.chipData.dataList];
  }

  searchList(evt: any): void {// for search chips
    if (!evt.srcElement.value) { // if input is empty then don't complete
      return;
    }
    this.chipData.dataList = this.chipService.removeSelectedChip(this.chipData.dataList, this.backupList, this.selectedList);
    this.chipData.dataList = this.chipService.searchList(evt.srcElement.value, this.chipData.dataList);
  }
  onDeSelect(selectedList: string[]) {
    this.writeValue(this.value);
    this.onChange(this.value);
    this.chipService.resetList(this.chipData.dataList, this.backupList, selectedList);
    this.chipReference['nativeElement'].focus();
  }
  onItemSelected(selectedList: []) { // fires when child component emit new value ..
    this.selectedList.push(...selectedList);
    this.registerOnTouched(this.selectedList);
    this.writeValue(this.selectedList);
    this.onChange(this.value);
    this.chipReference['nativeElement'].focus();
    setTimeout(() => {
      this.chipReference.nativeElement.value = '';
    }, 1);
  }

  onInputFocus(evt: any) {
    setTimeout(() => { // callback function to load data from backend in half second (optional)
      this.showList = true;
    }, 500);
  }

  writeValue(value: any) { //basic for controlValueAccessor
    this.value = value;
  }

  registerOnChange(fn: any): void { //basic for controlValueAccessor
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { //basic for controlValueAccessor
    this.onTouched = fn;
  }

}
