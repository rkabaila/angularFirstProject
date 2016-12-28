import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params}   from '@angular/router';

@Component({
    selector: 'course-cards',
    templateUrl: 'app/components/course-cards/course-cards.template.html',
    styleUrls:  ['app/components/course-cards/course-cards.component.css'],
})
export class CourseCardsComponent {


    constructor(private router: Router, private route: ActivatedRoute){

    }

    navigate(path) {
        this.router.navigate([{outlets: {primary: path, sidemenu:path}}],
            {relativeTo: this.route});
    }
}
