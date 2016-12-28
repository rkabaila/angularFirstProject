import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShoppingListService{
    constructor(private http: Http){
    }

    getShoppingList(){
        return this.http.get('data/list.json')
            .map(res => res.json());
    }
}
