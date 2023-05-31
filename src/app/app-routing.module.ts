import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
// import {AddComponent} from './Components/add/add.component';
import {EditComponent} from './Components/edit/edit.component';
import {ErrorComponent} from './Components/error/error.component';
import { AlbumsComponent } from './Components/albums/albums.component';
import { PhotosComponent } from './Components/photos/photos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: HomeComponent},
  // {path: 'users', component: AddComponent},
  {path: 'users/edit/:id', component: EditComponent},
  {path: 'users/albums/:userId', component: AlbumsComponent},
  {path: 'users/photos/:userId/:albumId', component: PhotosComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
