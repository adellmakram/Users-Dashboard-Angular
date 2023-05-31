import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AddComponent } from '../add/add.component';
import { EditComponent } from '../edit/edit.component';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: any;
  errMsg: any;

  constructor(
    private dialog: MatDialog,
    private myService: UsersService
  ) {
    myService.GetAllUsers().subscribe(
      {
        next: (data) => {
          this.users = data;
        },
        error: (err) => {
          alert(`Something went wrong ${err}`);
        }
      }
    )
  }

  OpenAddPopup() {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(AddComponent, {
      panelClass: 'my-popup-class'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.users.push(this.myService.adduser);
      }
    })
  }

  OpenEditPopup(_id: any) {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(EditComponent, {
      panelClass: 'my-popup-class'
    });
    this.myService.editId = _id;

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'success') {
        this.myService.UpdateUser(this.users);
      }
    })
  }

  deleteUser(user: any) {
    let text = `Are you sure to delete ${user.name}`;
    if (confirm(text) == true) {
      const index = this.users.indexOf(user);
      if (index !== -1) {
        this.users.splice(index, 1);
      }
    }
  }
}
