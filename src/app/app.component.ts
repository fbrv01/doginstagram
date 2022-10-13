import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PsIntagram';
  imgUrl:any
  wikipediaUrl:any
  breeds:any
  breedName:any

  constructor(public apiService:ApiService) {
    this.apiService.getAllDogsList().subscribe((res:any)=>{

      this.breeds=res.message
      console.log( this.breeds)
    })
  }

  selectDog(event:any) {
  let breed:any=event.target.value
  if(breed)
    {
      this.apiService.getImageByBreed(breed).subscribe((res:any)=>{
        this.imgUrl=res?.message
      })
      this.wikipediaUrl='https://en.wikipedia.org/wiki/' + breed
      this.breedName=breed
    }
    else {
      this.imgUrl=null
      this.wikipediaUrl=null
      this.breedName=null
    }
  }

  getKeys (breeds:any) {
    if(breeds) {
      return Object.keys(breeds)
    }
    else {
      return []
    }

  }

}
