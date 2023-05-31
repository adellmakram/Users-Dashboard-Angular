import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {
  Id = 0;
  albums: any;
  User: any;
  photos: any;
  albumCounts : [] = [];

  constructor(myRoute: ActivatedRoute, private myService: UsersService) {
    this.Id = myRoute.snapshot.params["userId"]
  }

  ngOnInit(): void {
    this.myService.GetUserAlbums(this.Id).subscribe(
      {
        next: (data) => {
          this.albums = data;
        },
        error: (err) => {
          alert("Something went wrong" + err);
        }
      }
    )
    this.myService.GetUserById(this.Id).subscribe(
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

  // getCount(albumId: any) {
  //   if (this.albumCounts[albumId]) {
  //     return this.albumCounts[albumId];
  //   } else {
  //     this.myService.GetAlbumPhotos(albumId).subscribe({
  //       next: (data) => {
  //         this.photos = data;
  //         this.albumCounts[albumId] = this.photos.length;
  //       },
  //       error: (err) => {
  //         alert("Something went wrong" + err);
  //       }
  //     });
  //   }
  // }
}

