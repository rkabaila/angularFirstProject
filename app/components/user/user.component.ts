import { Component } from '@angular/core';

@Component({
    selector: 'user',
    templateUrl: 'app/components/user/user.template.html',
    styleUrls:  ['app/components/user/user.component.css'],
})
export class UserComponent  {
    name: string;
    email: string;
    address: address;
    hobbies: string[];
    showHobbies: boolean;

    constructor(){
        this.name = 'Rimas';
        this.email = 'rimas@mail.com';
        this.address = {
            street: 'Zapyskis',
            city: 'Kaunas',
            country: 'LT'
        };
    }
}

interface address{
    street: string;
    city: string;
    country: string;
}

