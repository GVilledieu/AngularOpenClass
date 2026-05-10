import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
  title! : string;
  description! : string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit(): void {
    this.title = 'Julia';
    this.description = 'La plus belle femme du monde'
    this.createdAt = new Date();
    this.snaps = 0;
    this.imageUrl = "https://plus.unsplash.com/premium_photo-1668902223894-053948883caa?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  onAddSnap(isLiked: boolean): boolean {
    if (isLiked == true){
      this.snaps--;
      isLiked = false;
    }
    else{
      this.snaps++;
      isLiked = true;
    }
    return isLiked;
  }

}

