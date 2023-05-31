import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  adduser :any;
  editId:any;
  updatenewuser:any;

  constructor(private readonly myClient: HttpClient) { }

  private readonly Base_URL = "https://jsonplaceholder.typicode.com/";

  GetAllUsers() {
    return this.myClient.get(this.Base_URL + "users");
  }
  GetUserById(id: any) {
    return this.myClient.get(this.Base_URL + "users/" + id);
  }
  GetUserAlbums(id: any) {
    return this.myClient.get(this.Base_URL + "albums?userId=" + id);
  }
  GetAlbumPhotos(id: any) {
    return this.myClient.get(this.Base_URL + "photos?albumId=" + id);
  }
  AddUser(_name: any, _email: any, _phone: any, _city: any, _street: any, _suite: any) {
    this.adduser = {name: _name,email: _email,phone: _phone, address:{city: _city, street: _street,suite: _suite }};
  }
  UpdateUser(users:any){
    users[this.editId-1] = this.updatenewuser;
  }
}
