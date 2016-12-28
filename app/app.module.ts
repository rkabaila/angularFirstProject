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
import { CourseCardsComponent }  from './components/course-cards/course-cards.component';
import { SideMenuComponent }  from './components/side-menu/side-menu.component';
import { CoursesCategoryComponent } from './components/courses-category/courses-category.component';

import { AboutComponent }  from './components/about/about.component';
import { AboutHomeComponent }  from './components/about-home/about-home.component';
import { AboutItemComponent }  from './components/about-item/about-item.component';

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
        CoursesComponent,
        CourseCardsComponent,
        SideMenuComponent,
        CoursesCategoryComponent,
        AboutComponent,
        AboutHomeComponent,
        AboutItemComponent
      ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
