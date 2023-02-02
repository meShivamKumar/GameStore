import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  data: any = {};
  localUrl = ['assets/defaultIcon.png'];
  form!: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private gamesService: GamesService
  ) {}
  ngOnInit() {
    this.form = this.formbuilder.group({
      gameId: [, Validators.required],
      gameName: [, Validators.required],
      gameDesc: [],
      downloads: [],
      ratedAge: [, Validators.required],
      price: [0],
      gameImage: [null],
      downloadLink: [],
      topchart: [false],
      recommended: [false],
      popular: [false],
      rating: [, Validators.required],
      category: [, Validators.required],
    });
  }

  showPreviewImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        this.form.controls['gameImage'].setValue(this.localUrl);
        console.log(this.form.controls['gameImage'].value);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  publishGame() {
    if (this.form.controls['topchart'].value === 'true') {
      this.form.controls['topchart'].setValue(true);
    } else {
      this.form.controls['topchart'].setValue(false);
    }
    if (this.form.controls['recommended'].value === 'true') {
      this.form.controls['recommended'].setValue(true);
    } else {
      this.form.controls['recommended'].setValue(false);
    }
    if (this.form.controls['popular'].value === 'true') {
      this.form.controls['popular'].setValue(true);
    } else {
      this.form.controls['popular'].setValue(false);
    }
    console.log(this.form.value);

    this.gamesService.publishGame(this.form.value).subscribe((res) => {
      console.log(res);
      this.localUrl = ['assets/defaultIcon.png'];
      this.form.reset();
      this.form.controls['price'].setValue(0);
    });
  }
}
