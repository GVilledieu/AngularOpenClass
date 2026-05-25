import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle, NgClass, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe,} from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle, 
    NgClass,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  @Input () facesnap!: FaceSnap;
  snapButtonText! : string;
  isLiked! : boolean;

  ngOnInit(): void {
    this.snapButtonText = "J'aime"
    this.isLiked = false;
    }
  onAddSnap() : void {
    if (this.isLiked){
      this.facesnap.unSnap()
      this.snapButtonText = "J'aime"
      this.isLiked = false;
    }
    else{
      this.facesnap.addSnap()
      this.snapButtonText = "Je n'aime plus"
      this.isLiked = true;
      
    }
  }

}

