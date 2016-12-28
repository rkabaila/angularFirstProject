import {Component} from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';

@Component({
    selector: 'side-menu',
    templateUrl: 'app/components/side-menu/side-menu.template.html',
    styleUrls:  ['app/components/side-menu/side-menu.component.css'],
})
export class SideMenuComponent {

    constructor(route: ActivatedRoute) {

        route.params.subscribe(params => console.log("side menu id parameter",params['id']));

    }
}
