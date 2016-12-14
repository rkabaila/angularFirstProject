import {Component} from '@angular/core';

@Component({
    selector: 'shopping-list',
    templateUrl: 'app/components/shopping-list/shopping-list.template.html',
    styleUrls:  ['app/components/shopping-list/shopping-list.component.css']
})
export class ShoppingListComponent {
    public shoppingListItems = [
        {name: 'milk'},
        {name: 'sugar'},
        {name: 'bread'}
    ];
    public selectedItem = {name: ''};
    onItemClicked(item){
        this.selectedItem = item;
    }
    onAddItem(item){
        this.shoppingListItems.push({name: item.value});
    }
    onDeleteItem(){
        this.shoppingListItems.splice(this.shoppingListItems.indexOf(this.selectedItem), 1);
    }
}

