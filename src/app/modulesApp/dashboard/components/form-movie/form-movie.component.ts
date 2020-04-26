import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {DataMovie} from '../../interfaces/movie.interface';

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
    if (this.data.type === 'edit') {
      this.editMovie(this.data.data);
    }
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

  editMovie(data: DataMovie) {
    this.formMovie.setValue({
      id: data.id,
      nameMovie: data.nameMovie,
      date: data.date,
      state: data.state === 'Activo' ? 'active-0' : 'inactive-1',
    })
  }
}
