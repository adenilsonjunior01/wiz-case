import { Component, OnInit } from '@angular/core';
import { MoviedbApiService } from '../../services/moviedb-api/moviedb-api.service';
import { MovieDbConfig } from '../../services/moviedb-api/moviedb-config';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.component.html',
  styleUrls: ['./dados-filme.component.css']
})
export class DadosFilmeComponent implements OnInit {
  filme: any;
  posterFilme: any;
  private KEY = new MovieDbConfig();

  constructor(
    private service: MoviedbApiService
  ) { }

  ngOnInit() {
    this.getMovies();
  }

  private getMovies(): void {
    const searchParams = this.createSearchParams();
    this.service.getMovies(searchParams).subscribe(
      response => {
        this.filme = response.results[0];
        this.posterFilme = `http://image.tmdb.org/t/p/w185/${response.results[0].poster_path}`;
        console.log(this.filme);
      },
      err => {
        console.log('Error', err);
      });
  }

  private createSearchParams(): HttpParams {
    let params = new HttpParams();
    const language = 'pt-BR';
    const page = 1;

    params = params.set('api_key', this.KEY.config.MOVIEDB_KEY);
    params = params.set('language', language.toString());
    params = params.set('page', page.toString());

    return params;
  }
}
