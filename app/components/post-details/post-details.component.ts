import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {PostsService} from '../../services/posts.service';


@Component({
    selector: 'post-details',
    templateUrl: 'app/components/post-details/post-details.template.html',
    styleUrls: ['app/components/post-details/post-details.component.css'],
    providers: [PostsService]
})
export class PostDetailsComponent implements OnInit {
    posts: Post[];
    post: Post;
    id: string;

    constructor(private route: ActivatedRoute,
                private location: Location,
                private postsService: PostsService) {


        route.params.subscribe(params => {
            this.id = params['id'];
        });

        // this.postsService.getPostById(this.id).subscribe(post=>{
        //     this.post = post;
        // });

        this.post = {
            id: '1',
            title: 'Title1',
            body: 'Body'
        }
    }

    ngOnInit(): void {

    }
}

interface Post {
    id: string;
    title: string;
    body: string;
}
