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
    clickedHobby: string;

    constructor(){
        this.name = 'Rimas';
        this.email = 'rimas@mail.com';
        this.address = {
            street: 'Zapyskis',
            city: 'Kaunas',
            country: 'LT'
        };
        this.hobbies = ['music', 'sport'];
        this.showHobbies = false;
        this.clickedHobby = '';
    }

    toggleHobbies(){
        this.showHobbies = !this.showHobbies;
    }

    deleteHobby(index){
        this.hobbies.splice(index, 1);
    }

    addHobby(newHobby){
        this.hobbies.push(newHobby);
    }

    onHobbyClicked(hobby){
        this.clickedHobby = hobby;
    }
}

interface address{
    street: string;
    city: string;
    country: string;
}

