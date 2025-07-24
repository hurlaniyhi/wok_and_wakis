import { FoodItem } from "@/types";

const foodItems: Array<FoodItem> = [
    {
        "id": 1,
        "title": "Hat Trick Breakfast",
        "description": "Three eggs any style, three strips of bacon or three sausage links and this is very good and okay",
        "price": 18.69,
        "category": "Sandwiches",
        "isPopular": true,
        "imageUrl": "https://i.postimg.cc/FHwht2jp/three.jpg"
    },
    {
        "id": 2,
        "title": "Double Down Breakfast",
        "description": "Two eggs any style, two strips of bacon or two sausage links, toast",
        "price": 19.85,
        "category": "Sandwiches",
        "isPopular": true,
        "imageUrl": "https://i.postimg.cc/nck6YNRr/double.jpg"
    },
    {
        "id": 3,
        "title": "Egg Bagel Sandwich",
        "description": "Fried egg, American chees and diced ham, baconn strips or a sausage patty and this is very good and okay",
        "price": 15.75,
        "category": "Sandwiches",
        "isPopular": true,
        "imageUrl": "https://i.postimg.cc/28b03Jsg/casey.jpg"
    },
    {
        "id": 4,
        "title": "Wings & fries",
        "description": "Comes with Fries",
        "price": 18.46,
        "category": "Wings & Tenders",
        "isPopular": true,
        "imageUrl": "https://i.postimg.cc/zD9cw8Fq/wings.jpg"
    },
    {
        "id": 5,
        "title": "Fish Tray",
        "description": "Comes with 6 free Sauces",
        "price": 18.00,
        "category": "Party Trays",
        "isPopular": false,
        "imageUrl": "https://i.postimg.cc/kXmk376f/fish.jpg"
    },
    {
        "id": 6,
        "title": "Pick 2 & Fries",
        "description": "Comes with fries and any sauce you want",
        "price": 8.50,
        "category": "Mix & Match Combos",
        "isPopular": true,
        "imageUrl": "https://i.postimg.cc/0yZn4sDM/edgar.jpg"
    },
    {
        "id": 7,
        "title": "Hush Puppies",
        "description": "",
        "price": 13.97,
        "category": "Mix & Match Combos",
        "isPopular": true,
        "imageUrl": "https://i.postimg.cc/rwzR8X7t/cala.jpg"
    },
    {
        "id": 8,
        "title": "Mozarella Sticks",
        "description": "Comes with Marinara Sauce",
        "price": 14.09,
        "category": "Kid’s Menu",
        "isPopular": true,
        "imageUrl": "https://i.postimg.cc/fLHhWFGJ/stick.jpg"
    },
    {
        "id": 9,
        "title": "Shrimp & Fries",
        "description": "Comes with Fries",
        "price": 5.02,
        "category": "Fish & Shrimp",
        "isPopular": true,
        "imageUrl": "https://i.postimg.cc/KcM2h99v/shrimp.jpg"
    }, 
    {
        "id": 10,
        "title": "Tender Tray",
        "description": "Comes with 6 free Sauces",
        "price": 35.00,
        "category": "Party Trays",
        "isPopular": false,
        "imageUrl": "https://i.postimg.cc/0QSHF49T/tender.jpg"
    },
    {
        "id": 11,
        "title": "WIngs Tray",
        "description": "Comes with 6 free Sauces",
        "price": 22.00,
        "category": "Party Trays",
        "isPopular": false,
        "imageUrl": "https://i.postimg.cc/pTQJDMWL/ros.jpg"
    }
]

const cartItems = [
    {
        "selectedCheeses": [
            "Add Swiss",
            "Add Pepper Jack",
            "Add Provolone"
        ],
        "eggStyle": "Over Hard",
        "instructions": {
            "kitchenNote": "",
            "soldOutOption": ""
        },
        "quantity": 1,
        "item": {
            "id": 1,
            "title": "Pick 2 & Fries",
            "description": "Comes with fries and any sauce you want",
            "category": "Mix & Match Combos",
            "price": 8.5,
            "isPopular": true,
            "imageUrl": "https://i.postimg.cc/0yZn4sDM/edgar.jpg"
        },
        "cartId": 1
    }
]

export default {
    foodItems,
    cartItems
}