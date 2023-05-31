import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {
  albumId = 0;
  Photos: any;
  userId: any;
  User:any;

  constructor(myRoute: ActivatedRoute, private myService: UsersService) {
    this.albumId = myRoute.snapshot.params["albumId"];
    this.userId = myRoute.snapshot.params["userId"];
  }

  ngOnInit(): void {
    this.myService.GetAlbumPhotos(this.albumId).subscribe(
      {
        next: (data) => {
          this.Photos = data;
        },
        error: (err) => {
          alert("Something went wrong" + err);
        }
      }
    )
    this.myService.GetUserById(this.userId).subscribe(
      {
        next: (data) => {
          this.User = data; 
        },
        error: (err) => {
          alert("Something went wrong" + err);
        }
      }
    )
  }
}
