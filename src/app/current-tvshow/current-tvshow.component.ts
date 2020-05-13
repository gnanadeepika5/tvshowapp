import { Component, OnInit } from '@angular/core';
import { ICurrentTvShow } from '../icurrent-tv-show';
import { TvShowService } from '../tv-show.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-current-tvshow',
  templateUrl: './current-tvshow.component.html',
  styleUrls: ['./current-tvshow.component.css']
})
export class CurrentTvshowComponent implements OnInit {
  current: ICurrentTvShow
  constructor(private tvshowservice: TvShowService) {



  }

  ngOnInit(): void {
    this.tvshowservice.getcurrenttvshow('Girls').subscribe(data => this.current = data);
  }

}
