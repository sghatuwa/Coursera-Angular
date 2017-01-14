(function (){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.ItemsToBuy();
    toBuy.item = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    };
    toBuy.checkShopItem = ShoppingListCheckOffService.checkShopItem;
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this;
    bought.boughtItems = ShoppingListCheckOffService.ItemsBought();
    bought.checkBoughtItem = ShoppingListCheckOffService.checkBoughtItem;
  };

  function ShoppingListCheckOffService() {
    var service = this;
    var shopItem = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donuts",
        quantity: "200"
      },
      {
        name: "Cookies",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      },
      {
        name: "Kitkat",
        quantity: "8"
      }
    ];
    var boughtItems = [];

    service.checkBoughtItem = function(){
        return (boughtItems.length == 0);
    };

    service.checkShopItem = function(){
        return (shopItem.length == 0);
    };

    service.ItemsToBuy = function() {
          return shopItem;
    };
    service.ItemsBought = function(){
      return boughtItems;
    };
    service.buyItem = function(itemIndex) {
      var item = shopItem[itemIndex];
      boughtItems.push(item);
      shopItem.splice(itemIndex, 1);
};
  };
})();
