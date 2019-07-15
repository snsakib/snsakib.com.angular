import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  post: Post;

  getPostById(id: String) {
    return this.http.get(
      `https://snsakib-blog-cms.herokuapp.com/api/posts/${id}`
    )
  }

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPostById(params['postId']).subscribe((res: Post) => {
        this.post = res;
      });
    });
  }

}
