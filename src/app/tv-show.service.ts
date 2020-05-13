import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentTvShow } from './icurrent-tv-show';

interface ICurrentTvShowData{
  show:{
    name:string,
    url:string,
    language:string,
    genres:[
      string
    ],
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

  constructor(private httpClient: HttpClient)
  {}
getcurrenttvshow(showname:string){
  return this.httpClient.get<ICurrentTvShowData>(
    `${environment.baseUrl}http://api.tvmaze.com/search/shows?q=${showname}&appId=${environment.appId}`)
}
transformToICurrentTvShow(data: ICurrentTvShowData) : ICurrentTvShow(
  
)
}
