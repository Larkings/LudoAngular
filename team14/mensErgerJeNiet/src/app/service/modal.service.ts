
import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalTextComponent} from "../shared/components/modal-text/modal-text.component";



@Injectable({
  providedIn: 'root'
})

export class ModalService {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ModalTextComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

