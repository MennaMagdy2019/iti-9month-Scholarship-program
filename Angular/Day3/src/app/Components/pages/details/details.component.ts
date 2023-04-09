import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
ID=0;
constructor(myActivatedRoute:ActivatedRoute){
  this.ID = myActivatedRoute.snapshot.params["id"]
}
}
