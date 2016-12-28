import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { UserComponent }  from './components/user/user.component';
import { ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import { PostDetailsComponent} from './components/post-details/post-details.component';
import { PostsComponent} from './components/posts/posts.component';
import { CoursesComponent} from './components/courses/courses.component';

const appRoutes : Routes = [
    {
        path:'',
        component: UserComponent
    },
    {
        path:'shopping',
        component: ShoppingListComponent
    },
    {
        path:'posts',
        component: PostsComponent,
    },
    {
        path:'posts/:id',
        component: PostDetailsComponent,
    },
    {
        path:'courses',
        component: CoursesComponent,
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);