import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Observable } from 'rxjs';
import { Post } from '../../shared/models/post';
import { filter } from 'rxjs/internal/operators/filter';

@Injectable()
export class PostsService {

  private readonly postsURL = '../../../assets/mock/posts.json';

  constructor(private apiService: ApiService) { }

  /**
   * Get all available posts
   */
  getPosts(): Observable<Post[]> {
    return this.apiService.get(this.postsURL)
  }

  /**
   * Gets the post with provided ID
   * @param id - post id
   */
  getPost(id: number): Observable<Post> {
    return this.apiService.get(this.postsURL)
      .pipe(
        filter(post => post.id === id)
      )
  }
}
