import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.scss']
})
export class FormMovieComponent implements OnInit {
  states: any[] = [
    {value: 'active-0', viewValue: 'Activo'},
    {value: 'inactive-1', viewValue: 'Inactivo'}
  ];

  constructor(
    public dialogRef: MatDialogRef<FormMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
