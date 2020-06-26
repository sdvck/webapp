import { Routes } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';

export const appRoutes: Routes = [
    {
        path: 'posts',
        loadChildren: () => import('src/app/modules/posts/posts.module').then(m => m.PostsModule),
    },
    {
        path: 'comments',
        loadChildren: () => import('src/app/modules/comments/comments.module').then(m => m.CommentsModule),
    },
    {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
