import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { BreedService } from 'src/app/modules/breeds/services/breed.service';
import { BreedCardComponent } from 'src/app/modules/breeds/components/breed-card/breed-card.component';
import { BreedDetail } from 'src/app/modules/breeds/models/breed.interface';

interface Params {
  page: number;
  limit: number;
}

@Component({
  selector: 'app-breed-list',
  templateUrl: './breed-list.page.html',
  styleUrls: ['./breed-list.page.scss'],
  standalone: true,
  imports: [SharedModule, BreedCardComponent],
})
export class BreedListPage implements OnInit {
  breedsList: Array<BreedDetail> = [];
  filteredBreedsList: Array<BreedDetail> = [];
  params: Params = {
    page: 0,
    limit: 10,
  };
  subBreedList!: Subscription;
  imgCatDefault: string =
    'https://static.vecteezy.com/system/resources/previews/039/056/007/non_2x/munchkin-cat-black-silhouette-vector.jpg';

  constructor(private breedService: BreedService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getBreedsList();
  }

  getBreedsList(event?: CustomEvent): void {
    this.params.page++;
    this.subBreedList = this.breedService
      .getBreeds(this.params.page, this.params.limit)
      .subscribe(
        (data: any) => {
          this.breedsList = [...this.breedsList, ...data];
          this.filteredBreedsList = [...this.breedsList];
          if (event) {
            (event.target as HTMLIonInfiniteScrollElement).complete();
          }
        },
        (error) => {
          console.log(error);
          if (event) {
            (event.target as HTMLIonInfiniteScrollElement).complete();
          }
        },
        () => {
          this.subBreedList.unsubscribe();
        }
      );
  }

  searchBreeds(event: CustomEvent): void {
    const query: string = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredBreedsList = this.breedsList.filter((breed) =>
      breed.name.toLowerCase().includes(query)
    );
  }
}
