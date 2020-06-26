import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PostsService } from '../../services/posts.service';
import { Post } from 'src/app/modules/shared/models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit, OnDestroy {

  posts: Array<Post> = [];
  private _destroy$ = new Subject<void>();

  /**
   * Gets the flag indicating if there are any posts
   */
  get hasPosts(): boolean {
    return this.posts && this.posts.length > 0;
  }

  /**
   * Returns number of likes in all posts
   */
  get likesCount(): number {
    if (!this.hasPosts) {
      return 0;
    }
    return this.posts.reduce((a, b) => a + (b.numberOfLikes || 0), 0);
  }

  /**
   * Returns number of comments in all posts
   */
  get commentsCount(): number {
    if (!this.hasPosts) {
      return 0;
    }

    return this.posts.reduce((a, b) => a + (b.comments.length || 0), 0);
  }

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  ngOnDestroy() {
    this._destroy$.next();
  }

  getPosts() {
    this.postService.getPosts()
      .pipe(
        takeUntil(this._destroy$)
      )
      .subscribe(posts => {
        this.posts = posts
      },
        err => console.log(err));
  }
}
