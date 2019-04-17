import { Component, Input, OnInit } from '@angular/core';
import { Tweets } from 'src/app/models/tweets';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
 
  @Input() childMessage: Tweets;

  constructor() { }

  ngOnInit() {
    // console.log(this.childMessage);
  }

}
