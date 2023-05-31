import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(
    private dialog: MatDialog,
    private myService: UsersService,
    public dialogRef: MatDialogRef<AddComponent>
  ) { }

  Close() {
    this.dialog.closeAll();
  }

  add(_name: any, _email: any, _phone: any, _city: any, _street: any, _suite: any) {
    this.dialog.closeAll();
    this.myService.AddUser(_name, _email, _phone, _city, _street, _suite);
    this.dialogRef.close('success');
  }
}
