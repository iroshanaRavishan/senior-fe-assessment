import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-assigned',
  templateUrl: './image-assigned.component.html',
  styleUrls: ['./image-assigned.component.css']
})
export class ImageAssignedComponent implements OnInit {

  assignedImages: any [] = [];
  page: number = 1
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20]

  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('tableSizeOfAssigned', JSON.stringify(this.tableSize));
    this.loadItems();
  }

  loadItems(){
    this.tableSize = JSON.parse(localStorage.getItem('tableSizeOfAssigned') || '[]')
    const assingedImage = JSON.parse(localStorage.getItem('assignedImages') || '[]')
    if (assingedImage != null) {
      this.assignedImages = assingedImage;
    }
  }

  onTableDataChange(event: any): void{
    this.page = event;
    this.loadItems();
  }

  onTableSizeChanges(event: any): void {
    this.tableSize = event.target.value;
    localStorage.setItem('tableSizeOfAssigned', JSON.stringify(this.tableSize));
    this.page = 1;
    this.loadItems();
  }
}
