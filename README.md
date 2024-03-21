Please when you are gonna run this project, remember to 

    - comment the line No 17 in image-assigned.component.ts file. (
        #17 - localStorage.setItem('tableSizeOfAssigned', JSON.stringify(this.tableSize));
    )

    - comment the lines of 154, 255, 156 in image-list.component.ts file (   
        #154 - localStorage.setItem('initialImageList', JSON.stringify(this.initialImageList));
        #155 - localStorage.setItem('assignedImages', JSON.stringify(this.assignedImages));
        #156 - localStorage.setItem('tableSizeOfMain', JSON.stringify(this.tableSize));
    )

Initially they are not commented. Please build the project and run using ng serve and then comment above line in order to have a good user experience. 

The reason, I had to do that is, inotially I was trying to access the given link of images, but, it threw a CORS issue, I invested some time on resolving  it, so, I went in this way to achieve  the target. 

so, if I could go with that approach, I have to use a service to fetch the images from S3 bucket. and then I can do proper pagination in terms of fetching the images as batches. 
