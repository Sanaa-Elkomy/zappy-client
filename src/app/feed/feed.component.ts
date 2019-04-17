import { Component, OnInit } from '@angular/core';
import { ClientAPIService } from '../services/client-api.service';
import { Tweets } from '../models/tweets';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private clientAPI: ClientAPIService) { }

  tweets: Tweets[];
  page: number = 1;
  totalPages: number;
  ngOnInit() {
    this.clientAPI.getTweets(this.page).subscribe((res) => {
      this.tweets = res.tweets;
      this.totalPages = res.pages;
      // console.log(this.tweets);
    });
  }

  // ngOnInit(){
  //   this.clientAPI.getTweets().subscribe((res)=>{

  //     this.clientAPI.getTweets(this.clientAPI.nextPage).subscribe((res)=>{
  //       console.log(res.body.tweets);
  //       this.tweets = res.body.tweets;

  //     });      
  //   });  
  // }

  OnNext() {
    if (this.page < this.totalPages) {
      ++this.page;
      this.clientAPI.getTweets().subscribe((res) => {
        this.tweets = this.tweets.concat(res.tweets);
        console.log(this.tweets);
      });
    }

  }
}
