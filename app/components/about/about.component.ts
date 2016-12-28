import {Component} from "@angular/core";

@Component({
    selector: 'about',
    template: `
      <h2>About</h2>
      <a [routerLink]="['/about']">Home</a>
      <a [routerLink]="['/about/item', 1]">Item 1</a>
      <a [routerLink]="['/about/item', 2]">Item 2</a>
      <div class="inner-outlet">
        <router-outlet></router-outlet>
      </div>
    `
})
export class AboutComponent { }

