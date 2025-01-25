import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import {
  Breed,
  BreedDetail,
  BreedImgResponse,
  BreedDetailResponse
} from 'src/app/modules/breeds/models/breed.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BreedService {
  private apiUrl = environment.apiBreedUrl;
  private apiKey = environment.apiKeyBreed;

  constructor(private http: HttpClient) {}

  getBreeds(page: number, limit: number): Observable<Breed[]> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey,
    });
    const params = { page: page.toString(), limit: limit.toString() };
    return this.http.get<Breed[]>(`${this.apiUrl}/breeds`, { headers, params });
  }

  getBreedById(breedId: string): Observable<BreedDetail> {
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey,
    });
    return this.http
      .get<BreedDetailResponse>(`${this.apiUrl}/breeds/${breedId}`, { headers })
      .pipe(
        switchMap((breed) => {
          if (breed?.reference_image_id) {
            return this.http
              .get<BreedImgResponse>(
                `${this.apiUrl}/images/${breed.reference_image_id}`,
                { headers }
              )
              .pipe(map((imageData) => ({ ...breed, image: imageData })));
          }
          return [breed];
        })
      );
  }
}
