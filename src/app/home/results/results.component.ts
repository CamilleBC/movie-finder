import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import MovieResult from "../../services/MovieResult";
import { Subscription } from "rxjs";

import Debug from '../../../Debug';

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {
  private movies$: Subscription = null;
  private movies: MovieResult[] = [];

  constructor(private movieService: MoviesService) {
    this.movies$ = this.movieService
      .getDiscoverMoviesObservable()
      .subscribe(movie => {
        // Debug.logValue("subscription movie title", movie.title);
        this.movies.push(movie);
      });
  }

  ngOnInit() {}
}