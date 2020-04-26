import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-popup-new-movie',
  templateUrl: './popup-new-movie.component.html',
  styleUrls: ['./popup-new-movie.component.scss']
})

export class PopupNewMovieComponent implements OnInit {
  states: any[] = [
    {value: 'active-0', viewValue: 'Activo'},
    {value: 'inactive-1', viewValue: 'Inactivo'}
  ];

  constructor(
    public dialogRef: MatDialogRef<PopupNewMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
