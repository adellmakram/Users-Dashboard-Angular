import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/Services/users.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  Id = 0;
  user: any;

  constructor(
    private dialog: MatDialog,
    private myService: UsersService,
    public dialogRef: MatDialogRef<EditComponent>
  ) { }
  ngOnInit(): void {
    this.Id = this.myService.editId;
    this.myService.GetUserById(this.Id).subscribe(
      {
        next: (data) => {
          this.user = data;
        },
        error: (err) => {
          alert("Something went wrong" + err);
        }
      }
    )
  }

  Close() {
    this.dialog.closeAll();
  }
  updateUser(_id: any, _name: any, _email: any, _phone: any, _city: any, _street: any, _suite: any) {
    this.dialog.closeAll();
    this.myService.updatenewuser = {id:_id, name: _name, email: _email, phone: _phone, address: { city: _city, street: _street, suite: _suite } }
    this.dialogRef.close('success');
  }
}
