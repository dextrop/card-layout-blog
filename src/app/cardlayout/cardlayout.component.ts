import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardlayout',
  templateUrl: './cardlayout.component.html',
  styleUrls: ['./cardlayout.component.css']
})
export class CardlayoutComponent implements OnInit {
  @Input() post_title = "Lorem ipsum"
  @Input() post_description = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
  @Input() post_category = "somecardtag"
  @Input() updated_on = "2021-09-14 02:01:19 am"
  @Input() post_link = ""
  constructor() { }

  ngOnInit(): void {
    // if (this.post_description.length > 140) {
    //   this.post_description = this.post_description.substring(137) + "..."
    // }
    // if (this.post_title.length > 10) {
    //   this.post_title = this.post_title.substring(9) + "..."
    // }
  }

}
