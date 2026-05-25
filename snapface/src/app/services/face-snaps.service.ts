import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";

@Injectable({
    providedIn: 'root',
}

)

export class FaceSnapService {
    private faceSnaps : FaceSnap[] = [
          new FaceSnap (
          "Julia",
          "La plus belle femme du monde",
          "https://plus.unsplash.com/premium_photo-1668902223894-053948883caa?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          new Date(),
          10
        ),

        new FaceSnap (
          "test",
          "testatstos",
          "https://plus.unsplash.com/premium_photo-1668902223894-053948883caa?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          new Date(),
          150
        ).withLocation('A la montagne'),
        new FaceSnap (
          "terzfezr",
          "rezrezreze",
          "https://plus.unsplash.com/premium_photo-1668902223894-053948883caa?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          new Date(),
          255
        ) 
    ]

    getFaceSnaps() : FaceSnap[] {
        return [...this.faceSnaps]
    }

    snapFaceSnapById(faceSnapId : string) : void {
        
    }
}