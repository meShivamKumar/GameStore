import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  form!: FormGroup;
  data: any = {};
  gameId: string = '';
  localUrl: string = '';

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private routes: ActivatedRoute,
    private gameService: GamesService
  ) {}

  ngOnInit(): void {
    this.data = this.routes.snapshot.data['gameDetail'];
    this.gameId = this.data.gameId;
    this.localUrl = this.data.gameImage;
    this.initializeForm();
  }

  showPreviewImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
        this.form.controls['gameImage'].setValue(this.localUrl);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  initializeForm() {
    this.form = this.formbuilder.group({
      gameId: [this.data.gameId, Validators.required],
      gameName: [this.data.gameName, Validators.required],
      gameDesc: [this.data.gameDesc],
      downloads: [this.data.downloads],
      ratedAge: [this.data.ratedAge, Validators.required],
      price: [this.data.price],
      gameImage: [this.data.gameImage],
      downloadLink: [this.data.downloadLink],
      topchart: [this.data.topchart],
      recommended: [this.data.recommended],
      popular: [this.data.popular],
      rating: [this.data.rating, Validators.required],
      category: [this.data.category, Validators.required],
    });
  }

 

  updateGame() {
    if (this.form.controls['topchart'].value === 'true') {
      this.form.controls['topchart'].setValue(true);
    } else if (this.form.controls['topchart'].value == true) {
      this.form.controls['topchart'].setValue(true);
    } else if (this.form.controls['topchart'].value == false) {
      this.form.controls['topchart'].setValue(false);
    } else {
      this.form.controls['topchart'].setValue(false);
    }
    if (this.form.controls['recommended'].value === 'true') {
      this.form.controls['recommended'].setValue(true);
    } else if (this.form.controls['recommended'].value == true) {
      this.form.controls['recommended'].setValue(true);
    } else if (this.form.controls['recommended'].value == false) {
      this.form.controls['topchart'].setValue(false);
    } else {
      this.form.controls['recommended'].setValue(false);
    }
    if (this.form.controls['popular'].value == true) {
      this.form.controls['popular'].setValue(true);
    } else if (this.form.controls['popular'].value === 'true') {
      this.form.controls['popular'].setValue(true);
    } else if (this.form.controls['popular'].value == false) {
      this.form.controls['popular'].setValue(false);
    } else {
      this.form.controls['popular'].setValue(false);
    }

    this.gameService
      .updateGame(this.gameId, this.form.value)
      .subscribe((res) => {
        this.back();
      });
  }

  back() {
    this.router.navigate(['/admin/game-detail'], {
      queryParams: { gameId: this.gameId },
    });
  }
}
