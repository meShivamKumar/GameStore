import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent implements OnInit {
  data: any = {};
  isEditing: boolean = false;
  gameId: string = '';
  text: string = 'Edit';
  form!: FormGroup;
  localUrl: any = [];
  color: string = 'warning';
  gameName:string='';
  constructor(
    private gameService: GamesService,
    private formbuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isEditing = false;
    this.data = this.route.snapshot.data['data'];
    this.gameName=this.data.gameName;
    this.gameId = this.data.gameId;
    
    this.initializeForm();
    this.localUrl = this.data.gameImage;
  }

  getGameDetail(gameId: string) {
    this.gameService.getDetail(gameId).subscribe((res) => {
      console.log(res);
      this.data = res;
      this.gameId = this.data.gameId;
      this.initializeForm();
      this.localUrl = this.data.gameImage;
    });
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

    this.form.controls['topchart'].disable();
    this.form.controls['recommended'].disable();
    this.form.controls['popular'].disable();
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

  edit() {
    this.router.navigate(['admin/edit-game/' + this.gameId]);
  }
  toggleEditing() {
    if (this.isEditing) {
      this.form.controls['topchart'].disable();
      this.form.controls['recommended'].disable();
      this.form.controls['popular'].disable();
      this.isEditing = false;
      this.color = 'warning';
      this.text = 'Edit';
    } else {
      this.form.controls['topchart'].enable();
      this.form.controls['recommended'].enable();
      this.form.controls['popular'].enable();
      this.isEditing = true;
      this.color = 'dark';
      this.text = 'Cancel';
    }
  }

  updateValue(value: string, val: string) {
    if (value === 'popular') {
      console.log(val);

      this.form.controls['popular'].setValue(val);
    } else if (value === 'topchart') {
      console.log(val);
      this.form.controls['topchart'].setValue(val);
    } else if (value === 'recom') {
      console.log(val);
      this.form.controls['recommended'].setValue(val);
    }
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
        this.toggleEditing();
        this.getGameDetail(this.gameId);
      });
  }
  back() {
    this.router.navigate(['/admin/games']);
  }
  deleteGame() {
    this.gameService.deleteGame(this.gameId).subscribe((res) => {
      this.back();
    });
  }
}
