export class ShoppingListService{
    getShoppingList(){
        return [
            {
                showEditItem:false,
                name: 'milk',
                amount: 1,

            },
            {
                showEditItem:false,
                name: 'sugar',
                amount: 5
            },
            {
                showEditItem:false,
                name: 'bread',
                amount: 1
            }
        ];
    }
}
