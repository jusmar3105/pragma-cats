import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreedService } from 'src/app/modules/breeds/services/breed.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreedDetail } from 'src/app/modules/breeds/models/breed.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breed-detail',
  templateUrl: './breed-detail.page.html',
  styleUrls: ['./breed-detail.page.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class BreedDetailPage implements OnInit {
  breedId: string = '';
  subBreedId!: Subscription;
  breed!: BreedDetail;

  constructor(
    private activateRoute: ActivatedRoute,
    private breedService: BreedService
  ) {
    this.breedId = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit() {}

  ionViewWillEnter(): void {
    this.getBreedDetail();
  }

  getBreedDetail(): void {
    this.subBreedId = this.breedService.getBreedById(this.breedId).subscribe(
      (breed: BreedDetail) => {
        this.breed = breed;
      },
      (error) => {
        console.error(error);
      },
      () => {
        this.subBreedId.unsubscribe();
      }
    );
  }
}
