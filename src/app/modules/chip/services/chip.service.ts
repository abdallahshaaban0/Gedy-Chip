import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// our abstraction layer .. 

export class ChipService {

  constructor() { }

  searchList(value: string, dataList: string[]) {
    return dataList.filter((chip) => {
      return chip.toLowerCase().includes(value.toLowerCase());
    })
  }

  removeSelectedChip(dataList: string[], backupList: string[], selectedList: string[]): string[] {
    // remove the selectedChips from origin array ,
    let _currentIndex = 0;
    dataList = [...backupList];
    selectedList.find(x => {
      backupList.map((chip: any, index) => {
        if (x == chip) {
          dataList.find((currentChip: string, currentIndex: number) => {
            if (currentChip == x) {
              _currentIndex = currentIndex;
            }
          });
          dataList.splice(_currentIndex, 1);
        }
      })
    })
    return dataList;
  }

  resetList(dataList: string[], backupList: string[], selectedList: string[]) { // reset our list with same pervious order , so we use another object to save our data.
    dataList = [...backupList];
    selectedList.find(x => {
      backupList.forEach((element) => {
        if (x == element) {
          dataList.find((chipItem, chipIndex) => {
            if (chipItem == element) {
              dataList.splice(chipIndex, 1);
            }
          });
        }
      });
    })
  }

}
