import { Time } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
 images=["assets/Images/1.jpg","assets/Images/2.jpg","assets/Images/3.jpg","assets/Images/4.jpg","assets/Images/5.jpg","assets/Images/6.jpg"]
 imgSlider = this.images[0]
 time:any;
 cnt=0;
 
  increment() {
    if(this.cnt != this.images.length-1){
      ++this.cnt;
      this.imgSlider = this.images[this.cnt]
    }
    
   
 }

 decrement() {
  if(this.cnt != 0){
    this.cnt--;
    this.imgSlider = this.images[this.cnt]
  }
  
  }
  slider() {
       this.time =setInterval(() =>{
      this.cnt == this.images.length-1?this.cnt=0: ++this.cnt;
   
      this.imgSlider = this.images[this.cnt]
    },1000)
   }

   stop() {
   clearInterval(this.time)
   
   }

}