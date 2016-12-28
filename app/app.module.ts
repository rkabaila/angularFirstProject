import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user/user.component';
import { ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import { PostsComponent }  from './components/posts/posts.component';
import { PostDetailsComponent }  from './components/post-details/post-details.component';
import { NavBarComponent }  from './components/nav-bar/nav-bar.component';
import { HobbiesComponent }  from './components/hobbies/hobbies.component';
import { CoursesComponent }  from './components/courses/courses.component';
import { routing} from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations:
      [ AppComponent,
        UserComponent,
        ShoppingListComponent,
        PostsComponent,
        PostDetailsComponent,
        NavBarComponent,
        HobbiesComponent,
        CoursesComponent
      ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
