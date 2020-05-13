import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentTvShow } from './icurrent-tv-show';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface ICurrentTvShowData{
  show:{
    name:string,
    url:string,
    language:string,
    rating:{
      average:number
    },
    image:{
      original:string
    },
    summary:string

  }
}


@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private httpClient: HttpClient){}
  getcurrenttvshow(showname:string){
   return this.httpClient.get<ICurrentTvShowData>(
    `${environment.baseUrl}http://api.tvmaze.com/search/shows?q=${showname}&appId=${environment.appId}`).pipe(
      map(data => this.transformToICurrentTvShow(data))
    )
}

transformToICurrentTvShow(data: ICurrentTvShowData) : ICurrentTvShow{
  return {
    showname:data[0].show.name,
    language:data[0].show.language,
    link:data[0].show.url,
    rating:data[0].show.rating.average,
    image:data[0].show.image.original,
    summary:data[0].show.summary
  }
}

}
