import {Component} from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'about-item',
    template: `<h3>About Item Id: {{id}} </h3>`
})
export class AboutItemComponent {
    id: any;
    paramsSub: any;

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.paramsSub = this.activatedRoute.params.subscribe(params => this.id = parseInt(params['id'], 10));
    }

    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }
}
