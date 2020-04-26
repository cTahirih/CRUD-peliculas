import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

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
  formMovie: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
    ) {
    this.generateForm();
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  generateForm() {
    this.formMovie = this.formBuilder.group({
      id: [''],
      nameMovie: ['', [Validators.required]],
      date: ['', [Validators.required]],
      state: ['', [Validators.required]],
    });
  }
}
