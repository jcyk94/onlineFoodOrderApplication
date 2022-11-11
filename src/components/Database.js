import cash from '../assets/payment/cash.jpg'
import paynow from '../assets/payment/paynow.jpg'
import applepay from '../assets/payment/applepay.jpg'
import googlepay from '../assets/payment/googlepay.jpg'
import grabpay from '../assets/payment/grabpay.jpg'


import porridgewithegg from '../assets/menu/porridgewithegg.jpg'
import kayabuttertoast from '../assets/menu/kayabuttertoast.jpg'
import nasilemak from '../assets/menu/nasilemak.jpg'
import breakfastset from '../assets/menu/breakfastset.jpg'
import prawnnoodle from '../assets/menu/prawnnoodle.jpg'
import laksa from '../assets/menu/laksa.jpg'
import chickenrice from '../assets/menu/chickenrice.jpg'
import hotdogbun from '../assets/menu/hotdogbun.jpg'
import mushroomhotdog from '../assets/menu/mushroomhotdog.jpg'
import sandwich from '../assets/menu/sandwich.jpg'
import twister from '../assets/menu/twister.jpg'
import salmonsaladbowl from '../assets/menu/salmonsaladbowl.jpg'
import salmonbowl from '../assets/menu/salmonbowl.jpg'
import saladbowl from '../assets/menu/saladbowl.jpg'
import friedrice from '../assets/menu/friedrice.jpg'
import chefspecial from '../assets/menu/chefspecial.jpg'
import urdaburger from '../assets/menu/urdaburger.jpg'
import hermanosburger from '../assets/menu/hermanosburger.jpg'
import chickenburger from '../assets/menu/chickenburger.jpg'
import burgerparty from '../assets/menu/burgerparty.jpg'
import pepsi from '../assets/menu/pepsi.jpg'
import mirinda from '../assets/menu/mirinda.jpg'
import redbull from '../assets/menu/redbull.jpg'
import sevenup from '../assets/menu/7up.jpg'
import chickenpizza from '../assets/menu/chickenpizza.jpg'
import pepperoni from '../assets/menu/pepperoni.jpg'
import cheezypizza from '../assets/menu/cheezypizza.jpg'
import margherita from '../assets/menu/margherita.jpg'
import cheesecake from '../assets/menu/cheesecake.jpg'
import chocolatecake from '../assets/menu/chocolatecake.jpg'
import tiramisu from '../assets/menu/tiramisu.jpg'
import hummingbirdcake from '../assets/menu/hummingbirdcake.jpg'
import earlgreyicecream from '../assets/menu/earlgreyicecream.jpg'
import greenteaicecream from '../assets/menu/greenteaicecream.jpg'
import koreanfriedchicken from '../assets/menu/koreanfriedchicken.jpg'
import honeybutterchicken from '../assets/menu/honeybutterchicken.jpg'
import chickentender from '../assets/menu/chickentender.jpg'
import nugget from '../assets/menu/nugget.jpg'


const menuList = [
    {
        "id": 11111,
        "category": "Breakfast",
        "items": [
            {
                "id": 1,
                "itemName": "Porridge with Egg",
                "price": 4,
                "vegan": "veg",
                "tag": "",
                "quantity": 0,
                "img": porridgewithegg
            },
            {
                "id": 2,
                "itemName": "Kaya Butter Toast",
                "price": 3,
                "vegan": "veg",
                "tag": "",
                "quantity": 0,
                "img": kayabuttertoast
            },
            {
                "id": 3,
                "itemName": "Nasi Lemak with Fried Chicken",
                "price": 5,
                "vegan": "veg",
                "tag": "Popular",
                "quantity": 0,
                "img": nasilemak
            },
            {
                "id": 4,
                "itemName": "Breakfast Set",
                "price": 4,
                "vegan": "veg",
                "tag": "",
                "quantity": 0,
                "img": breakfastset
            }
        ]
    },
    {
        "id": 11112,
        "category": "Lunch",
        "items": [
            {
                "id": 222,
                "itemName": "Prawn Noodle with Pork",
                "price": 6,
                "vegan": "veg",
                "tag": "",
                "quantity": 0,
                "img": prawnnoodle
            },
            {
                "id": 223,
                "itemName": "Laksa",
                "price": 5,
                "vegan": "Non veg",
                "tag": "Popular",
                "quantity": 0,
                "img": laksa
            },
            {
                "id": 224,
                "itemName": "Chicken Rice",
                "price": 4,
                "vegan": "egg",
                "tag": "",
                "quantity": 0,
                "img": chickenrice
            }
        ]
    },
    {
        "id": 11113,
        "category": "Snacks",
        "items": [
            {
                "id": 330,
                "itemName": "Hot Dog Bun",
                "price": 7,
                "vegan": "veg",
                "tag": "Popular",
                "quantity": 0,
                "img": hotdogbun
            },
            {
                "id": 331,
                "itemName": "Mushroom Hot Dog",
                "price": 7,
                "vegan": "veg",
                "tag": "",
                "quantity": 0,
                "img": mushroomhotdog
            },
            {
                "id": 332,
                "itemName": "Cheese Sandwich",
                "price": 7,
                "vegan": "veg",
                "tag": "",
                "quantity": 0,
                "img": sandwich
            },
            {
                "id": 333,
                "itemName": "Twister",
                "price": 3,
                "vegan": "veg",
                "tag": "",
                "quantity": 0,
                "img": twister
            }
        ]
    },
    {
        "id": 11114,
        "category": "Dinner",
        "items": [
            {
                "id": 920,
                "itemName": "Salmon Salad Bowl",
                "price": 9,
                "vegan": "veg",
                "tag": "Chef's Special",
                "quantity": 0,
                "img": salmonsaladbowl
            },
            {
                "id": 921,
                "itemName": "Salmon Bowl",
                "price": 10,
                "vegan": "veg",
                "tag": "",
                "quantity": 0,
                "img": salmonbowl
            },
            {
                "id": 922,
                "itemName": "Salad Bowl",
                "price": 8,
                "vegan": "Non veg",
                "tag": "",
                "quantity": 0,
                "img": saladbowl
            },
            {
                "id": 923,
                "itemName": "Egg Fried Rice",
                "price": 5,
                "vegan": "Non veg",
                "tag": "Popular",
                "quantity": 0,
                "img": friedrice
            }
        ]
    },
    {
        "id": 11116,
        "category": "Burgers and Beverages",
        "items": [
            {
                "id": 1560,
                "itemName": "Classic Beef Burger",
                "price": 10,
                "vegan": "Non veg",
                "tag": "Chef's Special",
                "quantity": 0,
                "img": chefspecial
            },
            {
                "id": 1561,
                "itemName": "Urda Burger",
                "price": 13,
                "vegan": "Non veg",
                "tag": "Popular",
                "quantity": 0,
                "img": urdaburger
            },
            {
                "id": 1562,
                "itemName": "Hermanos Burger",
                "price": 11,
                "vegan": "Veg",
                "tag": "Must try",
                "quantity": 0,
                "img": hermanosburger
            },
            {
                "id": 1563,
                "itemName": "Ground Chicken Burger",
                "price": 9,
                "vegan": "Non veg",
                "tag": "",
                "quantity": 0,
                "img": chickenburger
            },
            {
                "id": 1564,
                "itemName": "Burger Party (4 pax)",
                "price": 60,
                "vegan": "Non veg",
                "tag": "Chef's Special",
                "quantity": 0,
                "img": burgerparty
            },
            {
                "id": 1565,
                "itemName": "Pepsi Bottle 500 ml",
                "price": 5,
                "vegan": "veg",
                "tag": "",
                "quantity": 0,
                "img": pepsi
            },
            {
                "id": 1566,
                "itemName": "Mirinda Can 330 ml",
                "price": 1,
                "vegan": "veg",
                "tag": "Popular",
                "quantity": 0,
                "img": mirinda
            },
            {
                "id": 1567,
                "itemName": "Red Bull Energy Drink",
                "price": 3,
                "vegan": "veg",
                "tag": "Must try",
                "quantity": 0,
                "img": redbull
            },
            {
                "id": 1568,
                "itemName": "7UP Can 330 ml",
                "price": 1,
                "vegan": "veg",
                "tag": "Popular",
                "quantity": 0,
                "img": sevenup
            }
        ]
    },
    {
        "id": 11115,
        "category": "Pizza",
        "items": [
            {
                "id": 10,
                "itemName": "Chicken Pizza",
                "price": 20,
                "vegan": "Non veg",
                "tag": "Popular",
                "quantity": 0,
                "img": chickenpizza
            },
            {
                "id": 20,
                "itemName": "Pepperoni Pizza",
                "price": 16,
                "vegan": "veg",
                "tag": "Recommended",
                "quantity": 0,
                "img": pepperoni
            },
            {
                "id": 30,
                "itemName": "cheezy pizza",
                "price": 19,
                "vegan": "veg",
                "tag": "",
                "quantity": 0,
                "img": cheezypizza
            },
            {
                "id": 40,
                "itemName": "Pizza Margherita",
                "price": 15,
                "vegan": "Non veg",
                "tag": "Popular",
                "quantity": 0,
                "img": margherita
            }
        ]
    },
    {
        "id": 11117,
        "category": "Desserts",
        "items": [
            {
                "id": 2100,
                "itemName": "Classic New York Cheesecake",
                "price": 20,
                "vegan": "Non veg",
                "tag": "Seasonal",
                "quantity": 0,
                "img": cheesecake
            },
            {
                "id": 2101,
                "itemName": "Double Chocolate Cake",
                "price": 14,
                "vegan": "Non veg",
                "tag": "Popular",
                "quantity": 0,
                "img": chocolatecake
            },
            {
                "id": 2102,
                "itemName": "Tiramisu",
                "price": 7,
                "vegan": "veg",
                "tag": "Must try",
                "quantity": 0,
                "img": tiramisu
            },
            {
                "id": 2103,
                "itemName": "Hummingbird Cake",
                "price": 8,
                "vegan": "veg",
                "tag": "Recommended",
                "quantity": 0,
                "img": hummingbirdcake
            },
            {
                "id": 2104,
                "itemName": "Earl Grey Ice Cream",
                "price": 6,
                "vegan": "veg",
                "tag": "Popular",
                "quantity": 0,
                "img": earlgreyicecream
            },
            {
                "id": 2105,
                "itemName": "Green Tea Ice Cream",
                "price": 7,
                "vegan": "veg",
                "tag": "Popular",
                "quantity": 0,
                "img": greenteaicecream
            }
        ]
    },
    {
        "id": 11118,
        "category": "Chicken",
        "items": [
            {
                "id": 710,
                "itemName": "Korean Fried Chicken",
                "price": 40,
                "vegan": "Non veg",
                "tag": "Popular",
                "quantity": 0,
                "img": koreanfriedchicken
            },
            {
                "id": 711,
                "itemName": "Honey Butter Fried Chicken",
                "price": 45,
                "vegan": "Non veg",
                "tag": "Popular",
                "quantity": 0,
                "img": honeybutterchicken
            },
            {
                "id": 712,
                "itemName": "Crispy Chicken Tenders",
                "price": 18,
                "vegan": "Non veg",
                "tag": "Recommended",
                "quantity": 0,
                "img": chickentender
            },
            {
                "id": 713,
                "itemName": "Baked Chicken Nuggets",
                "price": 13,
                "vegan": "Non veg",
                "tag": "Must try",
                "quantity": 0,
                "img": nugget
            }
        ]
    }
]

const paymentList = [
    {
        "id": 101010,
        "category": "EWallet",
        "items": [{
            "id": 101011,
            "name": "PAYNOW",
            "img": paynow
        },
        {
            "id": 101012,
            "name": "APPLE PAY",
            "img": applepay
        }, {
            "id": 101013,
            "name": "GOOGLE PAY",
            "img": googlepay
        }, {
            "id": 101014,
            "name": "GRAB PAY",
            "img": grabpay
        }]
    },
    {
        "id": 101020,
        "category": "Cash",
        "items": [{
            "id": 101021,
            "name": "Cash",
            "img": cash
        }]
    }
]

export default menuList;
// export { menuList };
export { paymentList };