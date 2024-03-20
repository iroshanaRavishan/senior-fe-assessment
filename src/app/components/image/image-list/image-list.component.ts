import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({transform: 'scale(0.5)'}),
        animate('150ms', style({transform: 'scale(1)'}))
      ]),

      transition('visible => void', [
        style({transform: 'scale(1)'}),
        animate('150ms', style({transform: 'scale(0.5)'}))
      ]),
    ]),
    trigger ('animation-leave', [
      transition(':leave', [
        style({opacity: 1}),
        animate('50ms', style({opacity: 0.8}))
      ]),
    ])
  ]
})
export class ImageListComponent implements OnInit {

  @Input() showCount = false
  page: number = 1
  tableSize: number = 3;


  initialImageList = [
    {url: 'https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00013.png', id: 0},
    {url: 'https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00000.png', id: 1},
    {url: 'https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00006.png', id: 2},
    {url: 'https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00010.png', id: 3},
    {url: 'https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00016.png', id: 4},
    {url: 'https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00006.png', id: 5},
  
  ];

  assignedImages: any [] = [];
  mainImageList: any[] = []

  previewImage = false;
  showMask = false;
  currentLightBoxImage = this.mainImageList[0]
  currentIndex = 4;
  controls = true;

  constructor() {}

  ngOnInit(): void {
    this.mainImageList= this.initialImageList;
  }

  onTableDataChange(event: any): void{
    this.page = event;
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }

  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightBoxImage = this.mainImageList[index]
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreview() {
    this.previewImage = false;
  }

  prev(): void {
    if (this.currentIndex != 0) {
      this.currentIndex = this.currentIndex - 1;
    }
    if (this.currentIndex > this.mainImageList.length - 1) {
      this.currentIndex = 0;
    } 
    this.currentLightBoxImage = this.mainImageList[this.currentIndex];
  }

  next(): void {
    if (this.currentIndex + 1 >= this.mainImageList.length) {
      console.log('exceeds the limit')
    } else {
      this.currentIndex = this.currentIndex + 1;
    }
    
    if (this.currentIndex < 0) {
      this.currentIndex = this.mainImageList.length - 1;
    } 
    this.currentLightBoxImage = this.mainImageList[this.currentIndex];
  }


  assignToTask(){
    let arrIndex = this.mainImageList.indexOf(this.mainImageList[this.currentIndex])

    if(arrIndex !== -1){
      let removedItem = this.mainImageList.splice(arrIndex, 1);
      this.assignedImages.push(removedItem[0])
    }

    if (this.currentIndex + 1 >= this.mainImageList.length) {
      this.prev();
    } else {
      this.next();
    }

    if(this.mainImageList.length == 0 ) {
      this.onClosePreview();
    }

  }
}
