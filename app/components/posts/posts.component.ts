import {Component} from '@angular/core';
import { PostsService} from '../../services/posts.service';

@Component({
    selector: 'posts',
    templateUrl: 'app/components/posts/posts.template.html',
    styleUrls:  ['app/components/posts/posts.component.css'],
    providers: [PostsService]
})
export class PostsComponent {
    posts: posts[];

    constructor(private postsService: PostsService){
        this.posts = [];
        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }
}

interface posts{
    id: string;
    title: string;
    body: string;
}