import {Component} from '@angular/core';
import {ShoppingListService} from '../../services/shopping-list.service';

@Component({
    selector: 'shopping-list',
    templateUrl: 'app/components/shopping-list/shopping-list.template.html',
    styleUrls: ['app/components/shopping-list/shopping-list.component.css'],
    providers: [ShoppingListService]
})
export class ShoppingListComponent {
    shoppingListItems = [];
    selectedItem = {};
    constructor(private shoppingListService: ShoppingListService) {
        this.shoppingListService.getShoppingList().subscribe(list => {
            this.shoppingListItems = list;
        });
    }

    hideEditContainer() {
        var PreviousSelectedItemIndex = this.shoppingListItems.indexOf(this.selectedItem);
        if (PreviousSelectedItemIndex >= 0) {
            this.shoppingListItems[PreviousSelectedItemIndex].showEditItem = false;
        }
    }

    onItemClicked(item) {
        this.hideEditContainer();
        item.showEditItem = true;
        this.selectedItem = item;
    }

    onAddItem(itemName, itemAmount) {
        if (itemName.value != '') {
            this.shoppingListItems.push({
                name: itemName.value,
                amount: itemAmount.value,
                showEditItem: false
            });
        }
    }

    onDeleteItem(item) {
        this.shoppingListItems.splice(this.shoppingListItems.indexOf(item), 1);
    }
}
