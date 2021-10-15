import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samplelayout',
  templateUrl: './samplelayout.component.html',
  styleUrls: ['./samplelayout.component.css']
})
export class SamplelayoutComponent implements OnInit {

  title = 'cardlayoutnoimage';
  api_key = "b8f0548811154bb6b1fd2182a65e50af";
  url = "https://newsapi.org/v2/everything?q=india&sortBy=popularity&apiKey=b8f0548811154bb6b1fd2182a65e50af";
  articles = [];

  constructor(private http: HttpClient) { this.get_news_api(); }

  get_news_api() {
    this.http.get(this.url).subscribe(
      data => {
        console.log(data);
        this.articles = data["articles"];
      }
    );
  }

  ngOnInit(): void {
  }

}
