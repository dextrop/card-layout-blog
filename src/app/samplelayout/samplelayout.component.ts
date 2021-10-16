import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samplelayout',
  templateUrl: './samplelayout.component.html',
  styleUrls: ['./samplelayout.component.css']
})
export class SamplelayoutComponent implements OnInit {

  title = 'cardlayoutnoimage';
  url = "https://api.ask-jennie.com/dummy/articles/";
  articles = [];

  constructor(private http: HttpClient) { this.get_news_api(); }

  get_news_api() {
    this.http.get(this.url).subscribe(
      data => {
        console.log(data);
        this.articles = data["payload"];
      }
    );
  }

  ngOnInit(): void {
  }

}
