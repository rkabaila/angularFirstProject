import { Component } from '@angular/core';

@Component({
    selector: 'hobbies',
    templateUrl: 'app/components/hobbies/hobbies.template.html',
    styleUrls:  ['app/components/hobbies/hobbies.component.css'],
})
export class HobbiesComponent  {
    hobbies: string[];
    showHobbies: boolean;
    clickedHobby: string;

    constructor(){

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
