import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes/posts.routes';
import { PostsService } from './services/posts.service';
import { PostComponent } from './components/post/post.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    PostsService
  ],
  declarations: [
    PostsComponent,
    PostComponent
  ]
})
export class PostsModule { }
