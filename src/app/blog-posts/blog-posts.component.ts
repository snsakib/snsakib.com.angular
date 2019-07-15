import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements OnInit {
  posts: Post[];

  getPostsByCategory(category: String) {
    return this.http.get(
      `https://snsakib-blog-cms.herokuapp.com/api/posts?categories=${category}`
    )
  }

  constructor(private http: HttpClient, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPostsByCategory(params['category']).subscribe((res: Post[]) => {
        this.posts = res;
      });
    });
  }

}
