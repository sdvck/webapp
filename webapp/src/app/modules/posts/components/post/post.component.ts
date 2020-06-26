import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Post } from 'src/app/modules/shared/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {

  @Input() post: Post;

}
