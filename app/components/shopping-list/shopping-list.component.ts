import {Component} from '@angular/core';
import {ShoppingListService} from '../../services/shopping-list.service';

@Component({
    selector: 'shopping-list',
    templateUrl: 'app/components/shopping-list/shopping-list.template.html',
    styleUrls: ['app/components/shopping-list/shopping-list.component.css'],
    providers: [ShoppingListService]
})
export class ShoppingListComponent {
    shoppingListItems: ListItem[];
    selectedItem: ListItem;
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

    onItemClicked(item: ListItem) {
        this.hideEditContainer();
        item.showEditItem = true;
        this.selectedItem = item;
    }

    onAddItem(itemName: string, itemAmount: number) {
        if (itemName != '') {
            this.shoppingListItems.push({
                name: itemName,
                amount: itemAmount,
                showEditItem: false
            });
        }
    }

    onDeleteItem(item: ListItem) {
        this.shoppingListItems.splice(this.shoppingListItems.indexOf(item), 1);
    }
}

interface ListItem {
    name: string;
    amount: number;
    showEditItem: boolean;
}
