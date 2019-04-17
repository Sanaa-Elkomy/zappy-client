import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes } from '../config/routes';
import { Tweets } from '../models/tweets';
import { map, filter, scan,tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class ClientAPIService {
  // public firstPage: string = "";
  // public prevPage: string = "";
  // public nextPage: string = "";
  // public lastPage: string = "";
  tweetsAPT: string = 'http://localhost:3000/tweets';

  constructor(private httpClient: HttpClient) { };

  public getTweets(page?: number){
    return this.httpClient.get<any>(`${this.tweetsAPT}?page=${page}`);
  }

  /**** TODO
   * tring to fix it
   */
//   public getTweets(tweetsAPT?: string){

//     if(tweetsAPT){
//       return this.httpClient.get<any>(tweetsAPT,{ observe: 'response' }).pipe(tap(res => {
//         this.retrieve_pagination_links(res);
//       }));
//     }

//     return this.httpClient.get<any>(`${this.apiURL}?page=1`,
//     { observe: 'response' }).pipe(tap(res => {
//       console.log(res);
//       this.retrieve_pagination_links(res); 
//     }));
//   }

//   parse_link_header(header) {
//     if (header === null || header.length == 0) {
//       return ;
//     }

//     let parts = header.split(',');
//     var links = {};
//     parts.forEach( p => {
//       let section = p.split(';');
//       var url = section[0].replace(/<(.*)>/, '$1').trim();
//       var name = section[1].replace(/rel="(.*)"/, '$1').trim();
//       links[name] = url;

//     }); 
//     return links;
//   }

//   public retrieve_pagination_links(response){
//     const linkHeader = this.parse_link_header(response.headers.get('Link'));
//     if(linkHeader !== undefined) {
//       this.firstPage = linkHeader["first"];
//       this.lastPage =  linkHeader["last"];
//       this.prevPage =  linkHeader["prev"];
//       this.nextPage =  linkHeader["next"];
//     }

// }





}
