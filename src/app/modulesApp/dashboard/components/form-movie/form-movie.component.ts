import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {DataMovie, MovieDataInterface} from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';

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
  newMovie: DataMovie = new DataMovie();
  loading = false;

  constructor(
    public dialogRef: MatDialogRef<FormMovieComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private moviesService: MoviesService
    ) {
    this.generateForm();
    if (this.data.type === 'edit') {
      this.editMovie(this.data.data);
    }

    this.formOnChange();
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  generateForm() {
    this.formMovie = this.formBuilder.group({
      id: [{value: this.newMovie.id, disabled: true}],
      nameMovie: ['', [Validators.required]],
      date: ['', [Validators.required]],
      state: ['', [Validators.required]],
    });
  }

  editMovie(data: MovieDataInterface) {
    this.formMovie.setValue({
      id: data.id,
      nameMovie: data.nameMovie,
      date: data.date,
      state: data.state === 'Activo' ? 'active-0' : 'inactive-1',
    })
  }

  formOnChange() {
    this.formMovie.valueChanges.subscribe(
      (value: DataMovie) => {
        this.newMovie = {
          id: value.id,
          nameMovie: value.nameMovie,
          state: value.state,
          date: value.date
        }
      }
    )
  }

  onSubmit() {
    this.loading = true;
    if (this.data.type === 'edit') {
      this.newMovie.id = this.data.data.id;
      this.moviesService.updateMovie(this.newMovie)
        .subscribe(
          (response: any) => {
            if (response.nameMovie) {
              this.dialogRef.close(this.newMovie);
              this.loading = false;
            }
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      this.moviesService.createMovie(this.newMovie)
        .subscribe(
          (response) => {
            if (response.id) {
              this.newMovie = response;
              this.dialogRef.close(this.newMovie);
              this.loading = false;
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }
}
