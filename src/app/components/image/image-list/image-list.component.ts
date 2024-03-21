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
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20]


  initialImageList = [
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00000.png", id: 1},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00001.png", id: 2},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00004.png", id: 3},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00006.png", id: 4},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00010.png", id: 5},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00013.png", id: 6},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00014.png", id: 7},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00016.png", id: 8},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00018.png", id: 9},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00020.png", id: 10},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00022.png", id: 11},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00023.png", id: 12},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00024.png", id: 13},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00025.png", id: 14},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00026.png", id: 15},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00027.png", id: 16},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00032.png", id: 17},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00036.png", id: 18},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00038.png", id: 19},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00039.png", id: 20},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00040.png", id: 21},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00041.png", id: 22},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00043.png", id: 23},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00044.png", id: 24},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00045.png", id: 25},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00047.png", id: 26},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00053.png", id: 27},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00057.png", id: 28},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00059.png", id: 29},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00061.png", id: 30},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00062.png", id: 31},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00068.png", id: 32},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00071.png", id: 33},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00073.png", id: 34},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00075.png", id: 35},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00076.png", id: 36},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00079.png", id: 37},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00080.png", id: 38},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00085.png", id: 39},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00087.png", id: 40},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00092.png", id: 41},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00097.png", id: 42},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00100.png", id: 43},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00104.png", id: 44},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00106.png", id: 45},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00107.png", id: 46},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00111.png", id: 47},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00112.png", id: 48},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00115.png", id: 49},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00116.png", id: 50},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00117.png", id: 51},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00119.png", id: 52},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00122.png", id: 53},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00129.png", id: 54},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00131.png", id: 55},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00133.png", id: 56},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00135.png", id: 57},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00137.png", id: 58},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00138.png", id: 59},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00140.png", id: 60},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00142.png", id: 61},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00144.png", id: 62},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00146.png", id: 63},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00149.png", id: 64},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00150.png", id: 65},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00151.png", id: 66},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00152.png", id: 67},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00154.png", id: 68},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00155.png", id: 69},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00156.png", id: 70},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00158.png", id: 71},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00162.png", id: 72},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00164.png", id: 73},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00168.png", id: 74},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00170.png", id: 75},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00171.png", id: 76},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00172.png", id: 77},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00175.png", id: 78},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00176.png", id: 79},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00180.png", id: 80},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00183.png", id: 81},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00184.png", id: 82},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00185.png", id: 83},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00187.png", id: 84},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00256.png", id: 85},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00257.png", id: 86},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00258.png", id: 87},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00260.png", id: 88},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00261.png", id: 89},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00262.png", id: 90},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00269.png", id: 91},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00271.png", id: 92},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00272.png", id: 93},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00273.png", id: 94},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00275.png", id: 95},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00276.png", id: 96},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00277.png", id: 97},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00280.png", id: 98},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00282.png", id: 99},
    { url: "https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00283.png", id: 100},
    
  
  ];

  assignedImages: any[] = [];
  mainImageList: any[] = [];

  previewImage = false;
  showMask = false;
  currentLightBoxImage = this.mainImageList[0]
  currentIndex = 0;
  controls = true;
  indexNum: number | any;

  constructor() {}

  ngOnInit(): void {
    localStorage.setItem('initialImageList', JSON.stringify(this.initialImageList));
    localStorage.setItem('assignedImages', JSON.stringify(this.assignedImages));
    localStorage.setItem('tableSizeOfMain', JSON.stringify(this.tableSize));
    
    this.loadItems();
  }

  loadItems(){
    this.tableSize = JSON.parse(localStorage.getItem('tableSizeOfMain') || '[]')
    const storedInitialImgList = JSON.parse(localStorage.getItem('initialImageList') || '[]')

    if (storedInitialImgList!= null) {
      this.mainImageList = storedInitialImgList;
    }
  }

  onTableDataChange(event: any): void{
    this.page = event;
    this.loadItems();
  }

  onTableSizeChanges(event: any): void {
    this.tableSize = event.target.value;
    localStorage.setItem('tableSizeOfMain', JSON.stringify(this.tableSize));
    this.page = 1;
    this.loadItems();
  }


  onPreviewImage(index: number, currentPage: number): void {
    this.indexNum = (currentPage - 1) * this.tableSize + index;
    this.currentIndex = this.indexNum;
    this.showMask = true;
    this.previewImage = true;
    this.currentLightBoxImage = this.mainImageList[this.indexNum]
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
      this.assignedImages = [];
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

    const storedInitialImgList = JSON.parse(localStorage.getItem('assignedImages') || '[]')
    this.assignedImages.push(...storedInitialImgList);
    localStorage.setItem('assignedImages', JSON.stringify(this.assignedImages));
    localStorage.setItem('initialImageList', JSON.stringify(this.mainImageList));
  }
}
