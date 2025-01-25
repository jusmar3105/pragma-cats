import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreedDetail } from 'src/app/modules/breeds/models/breed.interface';

@Component({
  selector: 'app-breed-card',
  templateUrl: './breed-card.component.html',
  styleUrls: ['./breed-card.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class BreedCardComponent implements OnInit {
  @Input() breed!: BreedDetail;
  imgCatDefault: string =
    'https://static.vecteezy.com/system/resources/previews/039/056/007/non_2x/munchkin-cat-black-silhouette-vector.jpg';

  constructor(private router: Router) {}

  ngOnInit() {}

  goDetailPage(breedId: string): void {
    this.router.navigate(['/breed-detail', breedId]);
  }
}
