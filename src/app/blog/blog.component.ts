import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"]
})
export class BlogComponent implements OnInit {
  topics: Object = {};

  getPostsCategories() {
    return this.http.get(
      "https://snsakib-blog-cms.herokuapp.com/api/postsCategories"
    );
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPostsCategories().subscribe(res => {
      this.topics = res;
    });
  }
}
