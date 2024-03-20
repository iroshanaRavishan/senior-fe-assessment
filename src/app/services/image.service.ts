import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private imageUrl : any= 'https://vst-test-images.s3.ap-southeast-1.amazonaws.com/sfe-images/00000.png'

  constructor(private http: HttpClient) {}

  getImagePaths(): Observable<string[]> {
    return this.http.get<string[]>(this.imageUrl);
  }
}


// added this service to fetch the data from the given link, but I got CORS issue and invested few mins 
// on that but could not resolve it. so I decided rto keep this file as it is and move forward.

// this might be incorrect since I was not able to test the above code due to that CORS issue.