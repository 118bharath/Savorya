const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Restaurant = require('./src/models/Restaurant');
const User = require('./src/models/User');
const connectDB = require('./src/config/db');

dotenv.config();
connectDB();

const seedRestaurants = async () => {
    try {
        // Find a user to be the owner
        const owner = await User.findOne();
        if (!owner) {
            console.log("No users found. Please register a user first.");
            process.exit(1);
        }

        console.log(`Seeding data using owner: ${owner.name} (${owner._id})`);

        // Clear existing restaurants (optional, comment out if you want to keep them)
        // await Restaurant.deleteMany({}); 

        const restaurants = [
            {
                name: "Green Garden Salads",
                address: "Hi-Tech City, Hyderabad",
                cuisine: "Salad",
                rating: 4.8,
                imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000",
                owner: owner._id
            },
            {
                name: "Rolls King",
                address: "Gachibowli, Hyderabad",
                cuisine: "Rolls",
                rating: 4.5,
                imageUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1000",
                owner: owner._id
            },
            {
                name: "Sweet Tooth Deserts",
                address: "Banjara Hills, Hyderabad",
                cuisine: "Deserts",
                rating: 4.9,
                imageUrl: "https://images.unsplash.com/photo-1563729768-3980346f36d9?q=80&w=1000",
                owner: owner._id
            },
            {
                name: "Sandwich Express",
                address: "Kondapur, Hyderabad",
                cuisine: "Sandwich",
                rating: 4.3,
                imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                owner: owner._id
            },
            {
                name: "Just Cakes",
                address: "Jubilee Hills, Hyderabad",
                cuisine: "Cake",
                rating: 4.7,
                imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000",
                owner: owner._id
            },
            {
                name: "Pure Veg Delight",
                address: "Kukatpally, Hyderabad",
                cuisine: "Pure Veg",
                rating: 4.6,
                imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1000",
                owner: owner._id
            },
            {
                name: "Italian Pasta Hub",
                address: "Madhapur, Hyderabad",
                cuisine: "Pasta",
                rating: 4.4,
                imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000",
                owner: owner._id
            },
            {
                "name": "Sattvik Bhojan 60",
                "address": "Attapur, Hyderabad",
                "cuisine": "Pure Veg",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "c012ee0b-45d3-4c2c-8ba8-76268f318efb"
            },
            {
                "name": "Veg Aroma 5",
                "address": "Manikonda, Hyderabad",
                "cuisine": "Pure Veg",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "342adb79-2d48-4a2a-aa21-b29152018b0c"
            },
            {
                "name": "Pure Veg Delight 26",
                "address": "Ameerpet, Hyderabad",
                "cuisine": "Pure Veg",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "596b8bba-ca29-4fe9-a87a-c16617304c81"
            },
            {
                "name": "Sattvik Bhojan 81",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Pure Veg",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "02bcf2b3-5687-42b2-9704-4d2ab84bd4da"
            },
            {
                "name": "Green Leaf Veg 93",
                "address": "Madhapur, Hyderabad",
                "cuisine": "Pure Veg",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "6f94089a-08ee-40f5-8618-7b39c8527ccc"
            },
            {
                "name": "Sattvik Bhojan 25",
                "address": "Secunderabad, Hyderabad",
                "cuisine": "Pure Veg",
                "rating": 4.4,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "ef2c2942-1d88-4dd2-a368-f1f5d70e9d59"
            },
            {
                "name": "Sattvik Bhojan 42",
                "address": "Kukatpally, Hyderabad",
                "cuisine": "Pure Veg",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "f87e74e9-9a9c-41de-867d-570345cca30b"
            },
            {
                "name": "Veg Aroma 73",
                "address": "Kondapur, Hyderabad",
                "cuisine": "Pure Veg",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "1cabe22c-a00c-40a5-81ea-3c5879cd8508"
            },
            {
                "name": "Pure Veg Delight 82",
                "address": "Madhapur, Hyderabad",
                "cuisine": "Pure Veg",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "79009753-bb9b-4d71-b57c-1bb258e52887"
            },
            {
                "name": "Veg Aroma 46",
                "address": "Hitech City, Hyderabad",
                "cuisine": "Pure Veg",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "897c8919-0296-4af0-be75-bc6ff69def78"
            },
            {
                "name": "Green Leaf Veg 61",
                "address": "Kondapur, Hyderabad",
                "cuisine": "Pure Veg",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "3d555dbf-a733-44a9-9d2a-e08c2bc77b92"
            },
            {
                "name": "Veg Aroma 22",
                "address": "Ameerpet, Hyderabad",
                "cuisine": "Pure Veg",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "fb63bfc2-1bed-45de-b80f-9eec1a5e06bc"
            },
            {
                "name": "Pure Veg Delight 10",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Pure Veg",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "baa038fa-dd97-4e3a-9c3f-59fa311fbf92"
            },
            {
                "name": "Veg Aroma 48",
                "address": "Uppal, Hyderabad",
                "cuisine": "Pure Veg",
                "rating": 4.4,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "310281a0-9453-4c84-8ceb-46a2421a0293"
            },
            {
                "name": "Veg Aroma 81",
                "address": "Kukatpally, Hyderabad",
                "cuisine": "Pure Veg",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "49614cef-c68e-41bb-92ba-5d925b88c38d"
            },
            {
                "name": "Green Leaf Veg 15",
                "address": "Hitech City, Hyderabad",
                "cuisine": "Pure Veg",
                "rating": 4.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "c96be6e3-f682-454f-a5a5-806bf24c3d6f"
            },
            {
                "name": "Grill & Fill 79",
                "address": "Uppal, Hyderabad",
                "cuisine": "Sandwich",
                "rating": 4.6,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "fda0e506-2fb3-4d33-a588-f743d09a7625"
            },
            {
                "name": "Grill & Fill 26",
                "address": "Uppal, Hyderabad",
                "cuisine": "Sandwich",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "c4415ce7-7b07-4389-acd2-7dfa9c7d6a68"
            },
            {
                "name": "Sandwich Express 71",
                "address": "Attapur, Hyderabad",
                "cuisine": "Sandwich",
                "rating": 4.6,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "757cbe17-080e-4b15-919b-789771d4c4fe"
            },
            {
                "name": "Sandwich Express 11",
                "address": "LB Nagar, Hyderabad",
                "cuisine": "Sandwich",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "bbe49145-16e3-4a15-9740-3ce811d65b53"
            },
            {
                "name": "Bread Basket 77",
                "address": "Madhapur, Hyderabad",
                "cuisine": "Sandwich",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "c9b395cb-ef60-43c8-9bb9-c7fc11fecb2c"
            },
            {
                "name": "Sandwich Express 8",
                "address": "LB Nagar, Hyderabad",
                "cuisine": "Sandwich",
                "rating": 4.4,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "dddb249e-9836-48ef-9096-a2bc55c0efa6"
            },
            {
                "name": "Sandwich Express 48",
                "address": "Kukatpally, Hyderabad",
                "cuisine": "Sandwich",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "e3489078-012d-41ac-8f1c-51a3e8c14bc1"
            },
            {
                "name": "Sandwich Express 58",
                "address": "Begumpet, Hyderabad",
                "cuisine": "Sandwich",
                "rating": 4.0,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "1a45edf5-9b35-4c2c-ad32-9ee2177680fa"
            },
            {
                "name": "Sandwich Express 68",
                "address": "Uppal, Hyderabad",
                "cuisine": "Sandwich",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "3dfc54b0-d5cd-4b9f-b5e2-fba445a9dd9a"
            },
            {
                "name": "Grill & Fill 80",
                "address": "Kukatpally, Hyderabad",
                "cuisine": "Sandwich",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "ac3ff953-6283-48f2-a799-0758484d000a"
            },
            {
                "name": "Bread Basket 81",
                "address": "Secunderabad, Hyderabad",
                "cuisine": "Sandwich",
                "rating": 4.4,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "8b618c0a-13af-4fe0-855e-3149d9b101e2"
            },
            {
                "name": "Bread Basket 81",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Sandwich",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "e6e3989c-6774-4b78-8a54-9fcb118e0acd"
            },
            {
                "name": "Grill & Fill 47",
                "address": "Secunderabad, Hyderabad",
                "cuisine": "Sandwich",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "18e9369b-c3ff-4b45-a804-0e381f7fb084"
            },
            {
                "name": "Bread Basket 90",
                "address": "Manikonda, Hyderabad",
                "cuisine": "Sandwich",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "30b96865-cd6b-424b-bdfc-aa235935946a"
            },
            {
                "name": "Bread Basket 71",
                "address": "Banjara Hills, Hyderabad",
                "cuisine": "Sandwich",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "57ee103f-f6f9-482d-8a59-dd59f4873553"
            },
            {
                "name": "Sandwich Express 30",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Sandwich",
                "rating": 3.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "48e71333-e4df-4ab8-8f1c-f006e057cbad"
            },
            {
                "name": "Italian Oven 76",
                "address": "Gachibowli, Hyderabad",
                "cuisine": "Pizza",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "d16b6da7-e9e7-40e1-919f-e8407573e2c4"
            },
            {
                "name": "Italian Oven 13",
                "address": "LB Nagar, Hyderabad",
                "cuisine": "Pizza",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "239a3040-a958-42ba-879a-6a2502ae8c4d"
            },
            {
                "name": "Italian Oven 88",
                "address": "Gachibowli, Hyderabad",
                "cuisine": "Pizza",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "0266ccdd-49f0-42ec-a49d-666b31877671"
            },
            {
                "name": "Italian Oven 6",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Pizza",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "8698400c-3c30-4256-b1f0-0d737cb9327d"
            },
            {
                "name": "Italian Oven 40",
                "address": "Mehdipatnam, Hyderabad",
                "cuisine": "Pizza",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "1fb4af46-18f4-4dc0-98f8-d110b9d3bb2c"
            },
            {
                "name": "Pizza Corner 69",
                "address": "Mehdipatnam, Hyderabad",
                "cuisine": "Pizza",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "14249b77-73d7-4ec8-abf4-32d3275affb7"
            },
            {
                "name": "Pizza Corner 97",
                "address": "Secunderabad, Hyderabad",
                "cuisine": "Pizza",
                "rating": 4.0,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "f8358d9a-45cd-429f-a21b-fdfe99d2f58c"
            },
            {
                "name": "Cheesy Slice 12",
                "address": "Begumpet, Hyderabad",
                "cuisine": "Pizza",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "405f10df-9fda-42a7-ba95-b9deb2aebfa9"
            },
            {
                "name": "Pizza Corner 86",
                "address": "Tolichowki, Hyderabad",
                "cuisine": "Pizza",
                "rating": 3.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "0d347064-527e-429c-b731-32d538d3d170"
            },
            {
                "name": "Italian Oven 64",
                "address": "Madhapur, Hyderabad",
                "cuisine": "Pizza",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "22f43f8a-70d1-4ce9-ae72-c20fd4306e05"
            },
            {
                "name": "Italian Oven 11",
                "address": "Mehdipatnam, Hyderabad",
                "cuisine": "Pizza",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "54c52130-df44-4946-8802-9c52be373949"
            },
            {
                "name": "Pizza Corner 48",
                "address": "Madhapur, Hyderabad",
                "cuisine": "Pizza",
                "rating": 4.6,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "bb4c9c86-c5b8-4cf6-bbad-892b9e900231"
            },
            {
                "name": "Italian Oven 78",
                "address": "Begumpet, Hyderabad",
                "cuisine": "Pizza",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "dba6fd55-b3fd-4323-a306-588923d2e5df"
            },
            {
                "name": "Pizza Corner 79",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Pizza",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "ed2a73a0-8e87-4fcf-8b09-5b67ec6d862c"
            },
            {
                "name": "Pizza Corner 4",
                "address": "Tolichowki, Hyderabad",
                "cuisine": "Pizza",
                "rating": 4.6,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "2c0a2da9-50f3-4f1b-9a64-d0952461f4d1"
            },
            {
                "name": "Burger Hub 41",
                "address": "Uppal, Hyderabad",
                "cuisine": "Burgers",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "72a4d72a-5306-45bd-abf5-d09a426a7808"
            },
            {
                "name": "Burger Nation 70",
                "address": "Mehdipatnam, Hyderabad",
                "cuisine": "Burgers",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "4ba58d59-d776-47af-bc37-1ab17e55cbe6"
            },
            {
                "name": "Burger Hub 84",
                "address": "Secunderabad, Hyderabad",
                "cuisine": "Burgers",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "7008c65e-d952-43ea-9870-f32e376aa236"
            },
            {
                "name": "Burger Hub 71",
                "address": "Kukatpally, Hyderabad",
                "cuisine": "Burgers",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "c5b7d704-eae5-41e6-9a43-99accf40cf30"
            },
            {
                "name": "Burger Hub 16",
                "address": "Kukatpally, Hyderabad",
                "cuisine": "Burgers",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "e388d71f-3575-4807-ae2b-71c9d89b1c79"
            },
            {
                "name": "Burger Hub 13",
                "address": "Secunderabad, Hyderabad",
                "cuisine": "Burgers",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "35398a46-34b7-4193-afcc-dd44953c91d0"
            },
            {
                "name": "Burger Hub 34",
                "address": "Hitech City, Hyderabad",
                "cuisine": "Burgers",
                "rating": 4.0,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "cf61c15b-9bd0-44a5-a86a-42ff603597a6"
            },
            {
                "name": "Stacked Buns 56",
                "address": "Begumpet, Hyderabad",
                "cuisine": "Burgers",
                "rating": 3.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "a1bbe0bb-42db-489c-9f72-7338f67b01e5"
            },
            {
                "name": "Burger Nation 75",
                "address": "Mehdipatnam, Hyderabad",
                "cuisine": "Burgers",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "db7305a5-0797-4b33-8d50-6a2543f91b37"
            },
            {
                "name": "Burger Hub 69",
                "address": "Hitech City, Hyderabad",
                "cuisine": "Burgers",
                "rating": 4.4,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "995b970f-eff7-4869-ac5c-bcfe6ec12b7b"
            },
            {
                "name": "Stacked Buns 80",
                "address": "Kondapur, Hyderabad",
                "cuisine": "Burgers",
                "rating": 4.6,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "035dabd2-9623-4cea-a630-8368c910cfd5"
            },
            {
                "name": "Stacked Buns 88",
                "address": "Kukatpally, Hyderabad",
                "cuisine": "Burgers",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "a21a4e3f-3f60-49b5-b90f-d3052ba7532b"
            },
            {
                "name": "Burger Nation 92",
                "address": "Hitech City, Hyderabad",
                "cuisine": "Burgers",
                "rating": 4.4,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "68add48e-9d45-451d-9d4b-ce0d7d81cbc4"
            },
            {
                "name": "Stacked Buns 83",
                "address": "Kondapur, Hyderabad",
                "cuisine": "Burgers",
                "rating": 4.6,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "8deefc0e-a53e-4256-97c7-a822c25b6194"
            },
            {
                "name": "Burger Hub 65",
                "address": "LB Nagar, Hyderabad",
                "cuisine": "Burgers",
                "rating": 4.6,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "6de126ab-e294-43af-9db2-c786f5a5cb89"
            },
            {
                "name": "Burger Hub 99",
                "address": "Tolichowki, Hyderabad",
                "cuisine": "Burgers",
                "rating": 4.0,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "315208f7-bd9d-4925-9dac-c3e1608c49bf"
            },
            {
                "name": "Stacked Buns 8",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Burgers",
                "rating": 3.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "91a5ad99-54f3-4fab-b9b8-2aaa672ba8d9"
            },
            {
                "name": "Creamy Penne 64",
                "address": "Secunderabad, Hyderabad",
                "cuisine": "Pasta",
                "rating": 3.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "3ff2ab12-45c0-40c6-94b4-ba79a2e7a50d"
            },
            {
                "name": "Pasta Fresca 74",
                "address": "Tolichowki, Hyderabad",
                "cuisine": "Pasta",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "46558232-bd38-44f5-9cc4-f51dec936253"
            },
            {
                "name": "Italian Treat 20",
                "address": "Uppal, Hyderabad",
                "cuisine": "Pasta",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "a2c2d535-4a74-41f2-a863-821e823dbce5"
            },
            {
                "name": "Pasta Fresca 49",
                "address": "Ameerpet, Hyderabad",
                "cuisine": "Pasta",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "f267e93f-d62c-476f-adf6-2229e94807b0"
            },
            {
                "name": "Pasta Fresca 41",
                "address": "Banjara Hills, Hyderabad",
                "cuisine": "Pasta",
                "rating": 4.6,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "887dde88-dfb8-4ff1-9f84-67ab43453412"
            },
            {
                "name": "Pasta Fresca 93",
                "address": "Manikonda, Hyderabad",
                "cuisine": "Pasta",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "2cee7121-ba8a-48e6-9b5b-23014db2111a"
            },
            {
                "name": "Italian Treat 47",
                "address": "Tolichowki, Hyderabad",
                "cuisine": "Pasta",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "59ff6374-5006-4a4f-9c14-53db176ab7fd"
            },
            {
                "name": "Pasta Fresca 87",
                "address": "Ameerpet, Hyderabad",
                "cuisine": "Pasta",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "d1757ea0-90e9-4ce8-9edd-4dd6af524c8f"
            },
            {
                "name": "Creamy Penne 57",
                "address": "Tolichowki, Hyderabad",
                "cuisine": "Pasta",
                "rating": 4.0,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "727a85cb-8076-405d-a207-7ffe564a686c"
            },
            {
                "name": "Creamy Penne 25",
                "address": "Tolichowki, Hyderabad",
                "cuisine": "Pasta",
                "rating": 4.6,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "befbb810-a297-4a60-89e5-76b7fb85ea45"
            },
            {
                "name": "Creamy Penne 36",
                "address": "Begumpet, Hyderabad",
                "cuisine": "Pasta",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "7951f1fb-bb4b-4309-a755-3cf391503b62"
            },
            {
                "name": "Pasta Fresca 11",
                "address": "Uppal, Hyderabad",
                "cuisine": "Pasta",
                "rating": 4.0,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "adeb6a39-9f6e-4dde-b0db-9d61a7e1ea25"
            },
            {
                "name": "Pasta Fresca 61",
                "address": "Hitech City, Hyderabad",
                "cuisine": "Pasta",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "d04d11a0-690e-4fae-ac71-646f1319123d"
            },
            {
                "name": "Creamy Penne 57",
                "address": "Ameerpet, Hyderabad",
                "cuisine": "Pasta",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "1f38f50f-ad23-4735-8dc9-f25c2bdeb855"
            },
            {
                "name": "Pasta Fresca 62",
                "address": "Gachibowli, Hyderabad",
                "cuisine": "Pasta",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "30494264-3891-45db-96bb-80d8da06b0ad"
            },
            {
                "name": "Creamy Penne 13",
                "address": "Banjara Hills, Hyderabad",
                "cuisine": "Pasta",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "6ae89ed0-af53-4f81-a65d-5ae1e2d27beb"
            },
            {
                "name": "Creamy Penne 36",
                "address": "Secunderabad, Hyderabad",
                "cuisine": "Pasta",
                "rating": 4.4,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "e49b8d35-d2a8-47ca-8a30-2e1e4413b82b"
            },
            {
                "name": "Noodle Bar 1",
                "address": "Mehdipatnam, Hyderabad",
                "cuisine": "Noodles",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "acc009dc-3525-4bbe-bf5b-46445cb72513"
            },
            {
                "name": "Noodle Bar 94",
                "address": "Kondapur, Hyderabad",
                "cuisine": "Noodles",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "4a8c97c0-7d58-4f96-aa0c-7b2299beb45d"
            },
            {
                "name": "Asian Bowl 52",
                "address": "Mehdipatnam, Hyderabad",
                "cuisine": "Noodles",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "51cc617b-2cb1-4246-8b85-7cca4876ccd2"
            },
            {
                "name": "Wok Express 87",
                "address": "Kukatpally, Hyderabad",
                "cuisine": "Noodles",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "82cf3e87-2eef-4d99-8ac0-7b3eed0ce4a0"
            },
            {
                "name": "Noodle Bar 55",
                "address": "Hitech City, Hyderabad",
                "cuisine": "Noodles",
                "rating": 4.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "876edfd8-a760-43c4-81d8-94587967ed3e"
            },
            {
                "name": "Asian Bowl 97",
                "address": "Begumpet, Hyderabad",
                "cuisine": "Noodles",
                "rating": 4.4,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "ba29ad24-54b1-448e-b874-60ea8d05eafa"
            },
            {
                "name": "Wok Express 14",
                "address": "Manikonda, Hyderabad",
                "cuisine": "Noodles",
                "rating": 4.0,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "966ed980-ca6d-4e00-8fa5-522ee834db7f"
            },
            {
                "name": "Asian Bowl 27",
                "address": "Secunderabad, Hyderabad",
                "cuisine": "Noodles",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "2dc842a9-09b2-4a24-83c0-36918e725781"
            },
            {
                "name": "Noodle Bar 25",
                "address": "Secunderabad, Hyderabad",
                "cuisine": "Noodles",
                "rating": 3.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "1d229df5-1088-4f36-a927-6aa405ad3254"
            },
            {
                "name": "Noodle Bar 95",
                "address": "Ameerpet, Hyderabad",
                "cuisine": "Noodles",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "ea9ca167-20be-4ce2-908c-afdeed58fb2e"
            },
            {
                "name": "Wok Express 49",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Noodles",
                "rating": 4.4,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "4098f591-96c7-4cdb-b93b-31c4699dee7d"
            },
            {
                "name": "Wok Express 27",
                "address": "Uppal, Hyderabad",
                "cuisine": "Noodles",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "bb57cf9e-c070-49cf-8ec8-ef8c6d5db27e"
            },
            {
                "name": "Wok Express 51",
                "address": "Hitech City, Hyderabad",
                "cuisine": "Noodles",
                "rating": 4.4,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "364ece32-0ff4-468f-806a-c22c641c1bf8"
            },
            {
                "name": "Asian Bowl 65",
                "address": "Uppal, Hyderabad",
                "cuisine": "Noodles",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "021adce8-0fe2-4aa1-b79c-ba91dbf1e2e2"
            },
            {
                "name": "Asian Bowl 85",
                "address": "Attapur, Hyderabad",
                "cuisine": "Noodles",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "d9039f14-7436-424c-b7ce-f84500c07e43"
            },
            {
                "name": "Asian Bowl 61",
                "address": "Hitech City, Hyderabad",
                "cuisine": "Noodles",
                "rating": 4.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "98e26ade-7990-42a1-8f52-b6dd1902e839"
            },
            {
                "name": "Noodle Bar 53",
                "address": "Secunderabad, Hyderabad",
                "cuisine": "Noodles",
                "rating": 3.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "b1e89df5-6ecf-4b6e-9ae4-31b121a8f676"
            },
            {
                "name": "Hyderabadi Zaika 96",
                "address": "Tolichowki, Hyderabad",
                "cuisine": "Biryani",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "11d2c3f5-83dd-4cb1-b96a-7c100d6d6601"
            },
            {
                "name": "Nawab\u2019s Kitchen 59",
                "address": "Ameerpet, Hyderabad",
                "cuisine": "Biryani",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "64b1da49-db92-4057-a4d9-2e7728e3c7f3"
            },
            {
                "name": "Nawab\u2019s Kitchen 53",
                "address": "Kukatpally, Hyderabad",
                "cuisine": "Biryani",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "237d0c1c-2347-4ca4-b45c-54eb190fdb49"
            },
            {
                "name": "Hyderabadi Zaika 82",
                "address": "Kondapur, Hyderabad",
                "cuisine": "Biryani",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "3f40eb5b-251d-46ed-a213-6dee68c6ef1c"
            },
            {
                "name": "Biryani House 14",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Biryani",
                "rating": 4.0,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "25e07cc1-030c-4d0d-9cb4-8701e6dbf1e7"
            },
            {
                "name": "Biryani House 20",
                "address": "Madhapur, Hyderabad",
                "cuisine": "Biryani",
                "rating": 4.4,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "ed60920d-0aa5-47b4-b5c0-4eb4c800e2e7"
            },
            {
                "name": "Hyderabadi Zaika 27",
                "address": "Kukatpally, Hyderabad",
                "cuisine": "Biryani",
                "rating": 4.6,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "dceb81ef-7c43-4a61-8ac9-d55adcc0d123"
            },
            {
                "name": "Nawab\u2019s Kitchen 24",
                "address": "Secunderabad, Hyderabad",
                "cuisine": "Biryani",
                "rating": 3.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "12c234cb-e9a1-4a66-be8f-b2820878fcfa"
            },
            {
                "name": "Hyderabadi Zaika 3",
                "address": "Attapur, Hyderabad",
                "cuisine": "Biryani",
                "rating": 4.6,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "f8e709b0-1b5c-4281-b1f9-1b7184d9e725"
            },
            {
                "name": "Nawab\u2019s Kitchen 15",
                "address": "Tolichowki, Hyderabad",
                "cuisine": "Biryani",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "72e5cef6-d9bc-4749-b162-e53ff8b5cb52"
            },
            {
                "name": "Hyderabadi Zaika 61",
                "address": "Ameerpet, Hyderabad",
                "cuisine": "Biryani",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "e2ce36dd-7929-41de-8407-7256997081de"
            },
            {
                "name": "Hyderabadi Zaika 56",
                "address": "Tolichowki, Hyderabad",
                "cuisine": "Biryani",
                "rating": 3.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "2fc4914f-b4e6-426a-adb2-2f733d9db7f9"
            },
            {
                "name": "Nawab\u2019s Kitchen 26",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Biryani",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "31dba461-7c09-4b7f-9d13-bd426d81b4ff"
            },
            {
                "name": "Biryani House 44",
                "address": "Begumpet, Hyderabad",
                "cuisine": "Biryani",
                "rating": 4.0,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "ec8d6e22-7966-473c-986b-7443d79b60ce"
            },
            {
                "name": "Hyderabadi Zaika 99",
                "address": "Ameerpet, Hyderabad",
                "cuisine": "Biryani",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "8d858a66-2a06-417e-bd20-c265f0bcdfc9"
            },
            {
                "name": "Nawab\u2019s Kitchen 66",
                "address": "LB Nagar, Hyderabad",
                "cuisine": "Biryani",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "e823dd65-7253-434a-afaf-e83ae3fa6eff"
            },
            {
                "name": "Dragon Bowl 76",
                "address": "Tolichowki, Hyderabad",
                "cuisine": "Chinese",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "c8edb0f4-41ee-438d-883b-c04954f64933"
            },
            {
                "name": "Dragon Bowl 50",
                "address": "Banjara Hills, Hyderabad",
                "cuisine": "Chinese",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "cf46e120-f634-4961-9281-ca1cc698633b"
            },
            {
                "name": "Dragon Bowl 45",
                "address": "Manikonda, Hyderabad",
                "cuisine": "Chinese",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "e2e75d1a-95a3-44c3-94da-65db37cac338"
            },
            {
                "name": "Dragon Bowl 4",
                "address": "Madhapur, Hyderabad",
                "cuisine": "Chinese",
                "rating": 3.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "c65c677e-cf82-4b01-ad44-9b14532171d0"
            },
            {
                "name": "Red Chilli 42",
                "address": "Mehdipatnam, Hyderabad",
                "cuisine": "Chinese",
                "rating": 4.6,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "aa1f26c7-b137-4e47-a678-01e2feb16c22"
            },
            {
                "name": "Dragon Bowl 71",
                "address": "Kondapur, Hyderabad",
                "cuisine": "Chinese",
                "rating": 4.0,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "61a32d57-fc9d-4b05-894e-104b1a88e59b"
            },
            {
                "name": "Dragon Bowl 22",
                "address": "Hitech City, Hyderabad",
                "cuisine": "Chinese",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "5ed907e8-f20d-4dae-8c70-3e755d833595"
            },
            {
                "name": "Dragon Bowl 9",
                "address": "Mehdipatnam, Hyderabad",
                "cuisine": "Chinese",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "73f54a42-a876-439a-9c0c-2c465dc6ef00"
            },
            {
                "name": "Red Chilli 29",
                "address": "Manikonda, Hyderabad",
                "cuisine": "Chinese",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "52701e80-01db-4f86-a79d-ec88f0ec32c3"
            },
            {
                "name": "Red Chilli 98",
                "address": "Madhapur, Hyderabad",
                "cuisine": "Chinese",
                "rating": 3.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "abfa3801-223d-4ce4-9fc9-d3246e6ee9e1"
            },
            {
                "name": "Red Chilli 32",
                "address": "Gachibowli, Hyderabad",
                "cuisine": "Chinese",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "6a63847a-69a5-407e-9ce5-570654202cba"
            },
            {
                "name": "Dragon Bowl 47",
                "address": "Ameerpet, Hyderabad",
                "cuisine": "Chinese",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "2c3cf0bc-b383-4102-a8fb-7b4932e1e206"
            },
            {
                "name": "Red Chilli 1",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Chinese",
                "rating": 4.0,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "d1d8f21d-d3ab-4882-8651-538d7075aa57"
            },
            {
                "name": "Chopstick House 71",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Chinese",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "7a761ce5-28a3-49ee-b9d9-7923fbbea74e"
            },
            {
                "name": "Dragon Bowl 37",
                "address": "Madhapur, Hyderabad",
                "cuisine": "Chinese",
                "rating": 3.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "de640fb3-605a-410e-9f26-b4a246a51864"
            },
            {
                "name": "Bake Bliss 87",
                "address": "Kukatpally, Hyderabad",
                "cuisine": "Bakery",
                "rating": 4.0,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "676385d5-1b43-48b7-8228-a7a496c56a03"
            },
            {
                "name": "Bake Bliss 65",
                "address": "Banjara Hills, Hyderabad",
                "cuisine": "Bakery",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "9add0397-55b5-4e4c-8f3d-16e01a3b4c9d"
            },
            {
                "name": "Sweet Crumbs 75",
                "address": "Begumpet, Hyderabad",
                "cuisine": "Bakery",
                "rating": 3.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "1856e3f9-f636-48c5-b417-463da36dec0e"
            },
            {
                "name": "Sweet Crumbs 89",
                "address": "Attapur, Hyderabad",
                "cuisine": "Bakery",
                "rating": 3.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "1367a90e-bda1-4185-8c92-33f419ea05d1"
            },
            {
                "name": "Bake Bliss 16",
                "address": "Manikonda, Hyderabad",
                "cuisine": "Bakery",
                "rating": 3.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "1244a514-fd55-4a12-8ca9-fbce193f7797"
            },
            {
                "name": "Sweet Crumbs 71",
                "address": "LB Nagar, Hyderabad",
                "cuisine": "Bakery",
                "rating": 3.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "871327d7-4731-4c53-bfca-5090463509e0"
            },
            {
                "name": "Sweet Crumbs 36",
                "address": "Hitech City, Hyderabad",
                "cuisine": "Bakery",
                "rating": 4.4,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "f998224d-f6b7-4621-8efe-1567e36b4529"
            },
            {
                "name": "Oven Fresh 68",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Bakery",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "b91a9613-d425-409d-ada1-790b48b78e6f"
            },
            {
                "name": "Oven Fresh 56",
                "address": "Banjara Hills, Hyderabad",
                "cuisine": "Bakery",
                "rating": 3.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "94bf7d95-eb52-4092-87a9-c4a5c18eae95"
            },
            {
                "name": "Oven Fresh 29",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Bakery",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "86723dec-c96a-477e-8b5b-f3d4969fc4a8"
            },
            {
                "name": "Sweet Crumbs 16",
                "address": "Tolichowki, Hyderabad",
                "cuisine": "Bakery",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "d82b6c13-71fc-4240-932e-1ed43e9b6a55"
            },
            {
                "name": "Bake Bliss 45",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Bakery",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "d0dbfc69-e740-4450-a02c-3932ebb3debf"
            },
            {
                "name": "Sweet Crumbs 47",
                "address": "Secunderabad, Hyderabad",
                "cuisine": "Bakery",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "d2edd17e-4f4f-4d12-b1a1-a69fa48a23cb"
            },
            {
                "name": "Bake Bliss 6",
                "address": "Mehdipatnam, Hyderabad",
                "cuisine": "Bakery",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "5eba879f-685e-4f27-9a3a-374c429f21b4"
            },
            {
                "name": "Oven Fresh 62",
                "address": "LB Nagar, Hyderabad",
                "cuisine": "Bakery",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "adcd2a06-b548-4c78-9ba4-905e13a1d192"
            },
            {
                "name": "Sweet Crumbs 78",
                "address": "Gachibowli, Hyderabad",
                "cuisine": "Bakery",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "998174b8-51ea-444b-8925-c629918031c3"
            },
            {
                "name": "Bake Bliss 88",
                "address": "Uppal, Hyderabad",
                "cuisine": "Bakery",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "6f9f3043-dc60-48ed-89ab-93bc90e1cf34"
            },
            {
                "name": "Bake Bliss 48",
                "address": "Secunderabad, Hyderabad",
                "cuisine": "Bakery",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "b2636c30-6b1d-4801-b62b-922337c8a366"
            },
            {
                "name": "Cafe Mocha 79",
                "address": "Kondapur, Hyderabad",
                "cuisine": "Cafe",
                "rating": 4.0,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "2a663fdb-6274-4e27-87b2-1bc2303065f3"
            },
            {
                "name": "Bean Story 57",
                "address": "Hitech City, Hyderabad",
                "cuisine": "Cafe",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "445c984a-ef73-4ba7-8feb-6e60a453d02c"
            },
            {
                "name": "Bean Story 90",
                "address": "Uppal, Hyderabad",
                "cuisine": "Cafe",
                "rating": 3.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "a3aacd5d-0c0f-4700-b30c-f9e037365956"
            },
            {
                "name": "Bean Story 40",
                "address": "Gachibowli, Hyderabad",
                "cuisine": "Cafe",
                "rating": 3.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "b773337c-3c7a-454c-8cc0-f824fe22ebfd"
            },
            {
                "name": "Cafe Mocha 64",
                "address": "Attapur, Hyderabad",
                "cuisine": "Cafe",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "da117706-338a-448a-9768-c4fbf55bbc2e"
            },
            {
                "name": "Bean Story 92",
                "address": "Begumpet, Hyderabad",
                "cuisine": "Cafe",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "a3902596-a965-4a58-8369-d283250e058f"
            },
            {
                "name": "Bean Story 47",
                "address": "Hitech City, Hyderabad",
                "cuisine": "Cafe",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "ce0900f8-99ca-4dc7-97b7-5ee8b6d604b2"
            },
            {
                "name": "Cafe Mocha 9",
                "address": "LB Nagar, Hyderabad",
                "cuisine": "Cafe",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "e8bf6037-d53f-44f3-b7f4-faa60b86826f"
            },
            {
                "name": "Bean Story 99",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Cafe",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "639d6707-7853-4c70-a58c-8fbab83d0c43"
            },
            {
                "name": "Urban Brew 98",
                "address": "Manikonda, Hyderabad",
                "cuisine": "Cafe",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "cedaba38-4d36-45e6-adc1-ceaa74f62c27"
            },
            {
                "name": "Bean Story 49",
                "address": "Manikonda, Hyderabad",
                "cuisine": "Cafe",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "11196f0f-39df-4727-94c8-da4a7657be5d"
            },
            {
                "name": "Cafe Mocha 27",
                "address": "Ameerpet, Hyderabad",
                "cuisine": "Cafe",
                "rating": 3.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "8c93b083-d3a8-4a1a-abb2-f3aa5a313e51"
            },
            {
                "name": "Urban Brew 5",
                "address": "Begumpet, Hyderabad",
                "cuisine": "Cafe",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "a4e23418-e1c9-40dc-bdb0-cd93e6c2973d"
            },
            {
                "name": "Bean Story 77",
                "address": "Kondapur, Hyderabad",
                "cuisine": "Cafe",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "07a70b3d-9c73-4af7-9c5f-efb1a55086f5"
            },
            {
                "name": "Bean Story 86",
                "address": "Manikonda, Hyderabad",
                "cuisine": "Cafe",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "532905a0-c5d9-4a70-bc86-c2f786fcd3ad"
            },
            {
                "name": "Cafe Mocha 62",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Cafe",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "24c54ebc-2588-459a-bb2b-785cdb84cae3"
            },
            {
                "name": "Sweet Tooth 7",
                "address": "LB Nagar, Hyderabad",
                "cuisine": "Desserts",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "d871cba2-a093-4ab4-9295-7c5f46de5f6b"
            },
            {
                "name": "Sweet Tooth 75",
                "address": "Hitech City, Hyderabad",
                "cuisine": "Desserts",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "5648d39c-c848-456a-8866-a14443152706"
            },
            {
                "name": "Sweet Tooth 35",
                "address": "Banjara Hills, Hyderabad",
                "cuisine": "Desserts",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "3721c814-a556-4a38-918f-399dc8ef015d"
            },
            {
                "name": "Sugar Rush 85",
                "address": "Madhapur, Hyderabad",
                "cuisine": "Desserts",
                "rating": 4.6,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "fca9b153-fe52-4ae0-9463-c1f7aae64f0c"
            },
            {
                "name": "Sweet Tooth 28",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Desserts",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "87624876-37ea-4b0d-9cf2-6a899540c884"
            },
            {
                "name": "Sweet Tooth 73",
                "address": "Tolichowki, Hyderabad",
                "cuisine": "Desserts",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "68cdba46-7dd8-4dcd-bf11-21c3f776a064"
            },
            {
                "name": "Sweet Tooth 57",
                "address": "Madhapur, Hyderabad",
                "cuisine": "Desserts",
                "rating": 4.6,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "27647a51-2393-48e9-961b-4b1d1742c264"
            },
            {
                "name": "Sweet Tooth 17",
                "address": "Kukatpally, Hyderabad",
                "cuisine": "Desserts",
                "rating": 4.4,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "f6edde30-4d47-4d6b-95a1-d0602ff2b71e"
            },
            {
                "name": "Sweet Tooth 20",
                "address": "Mehdipatnam, Hyderabad",
                "cuisine": "Desserts",
                "rating": 4.4,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "0abadf59-0f3f-4baf-b5ad-e594d10cbf73"
            },
            {
                "name": "Dessert Den 48",
                "address": "Uppal, Hyderabad",
                "cuisine": "Desserts",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "c75c03b5-4cf9-4c9d-ac69-d4641d670b6f"
            },
            {
                "name": "Sweet Tooth 17",
                "address": "Ameerpet, Hyderabad",
                "cuisine": "Desserts",
                "rating": 3.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "b9e52f60-cb5c-4d21-90b8-b5a8981b8c52"
            },
            {
                "name": "Dessert Den 8",
                "address": "Begumpet, Hyderabad",
                "cuisine": "Desserts",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "9f21ebc0-995b-4f33-bdbd-e8b4f216b2ad"
            },
            {
                "name": "Dessert Den 50",
                "address": "Madhapur, Hyderabad",
                "cuisine": "Desserts",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "73276339-93b2-4051-9b3d-93c103a6bd03"
            },
            {
                "name": "Dessert Den 33",
                "address": "Kukatpally, Hyderabad",
                "cuisine": "Desserts",
                "rating": 4.5,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "1f86a986-64b6-43c3-9227-4201140c1b56"
            },
            {
                "name": "Sugar Rush 4",
                "address": "Banjara Hills, Hyderabad",
                "cuisine": "Desserts",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "98411a71-7906-4895-8cf1-4257004045fc"
            },
            {
                "name": "Sweet Tooth 29",
                "address": "Mehdipatnam, Hyderabad",
                "cuisine": "Desserts",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "b3ecf24b-0992-41d4-81a0-4a99bcb8530f"
            },
            {
                "name": "Sweet Tooth 84",
                "address": "Hitech City, Hyderabad",
                "cuisine": "Desserts",
                "rating": 3.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "0e070c2e-3779-4e2f-9a53-cabd08708743"
            },
            {
                "name": "Sugar Rush 78",
                "address": "Hitech City, Hyderabad",
                "cuisine": "Desserts",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "3911eb05-4dfa-4082-9e6e-4cb2f7bcbfd6"
            },
            {
                "name": "Fit Bowl 68",
                "address": "Kondapur, Hyderabad",
                "cuisine": "Healthy",
                "rating": 3.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "f65ab7a0-8e08-4158-adfd-d8b327e37d90"
            },
            {
                "name": "Healthy Harvest 9",
                "address": "Attapur, Hyderabad",
                "cuisine": "Healthy",
                "rating": 4.7,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "7aa9db4c-83a3-4ac8-8f50-e002fc460b7b"
            },
            {
                "name": "Healthy Harvest 29",
                "address": "Mehdipatnam, Hyderabad",
                "cuisine": "Healthy",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "f96f209d-6cb8-4720-a984-9978908a795e"
            },
            {
                "name": "Green Eats 52",
                "address": "Ameerpet, Hyderabad",
                "cuisine": "Healthy",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "e9e727bd-7ae4-4d8b-96f9-b36a13f46a8f"
            },
            {
                "name": "Green Eats 62",
                "address": "Jubilee Hills, Hyderabad",
                "cuisine": "Healthy",
                "rating": 3.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "e533afb2-caae-44ff-a236-a22061665edc"
            },
            {
                "name": "Healthy Harvest 20",
                "address": "LB Nagar, Hyderabad",
                "cuisine": "Healthy",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "6d534ad0-762a-4c71-9282-10e2c5a63ab9"
            },
            {
                "name": "Fit Bowl 10",
                "address": "Tolichowki, Hyderabad",
                "cuisine": "Healthy",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "f15431ee-34a0-49d3-a536-68af200006d3"
            },
            {
                "name": "Fit Bowl 10",
                "address": "Manikonda, Hyderabad",
                "cuisine": "Healthy",
                "rating": 3.9,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "f0756dc9-6171-4a4f-b528-38b9619e59fd"
            },
            {
                "name": "Green Eats 74",
                "address": "Mehdipatnam, Hyderabad",
                "cuisine": "Healthy",
                "rating": 4.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "64b2aa44-bfc8-4ea1-9bcb-f3d7a67fd30d"
            },
            {
                "name": "Fit Bowl 73",
                "address": "Banjara Hills, Hyderabad",
                "cuisine": "Healthy",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "a641144c-799c-4038-aa5c-20040fc3e7fc"
            },
            {
                "name": "Green Eats 13",
                "address": "Mehdipatnam, Hyderabad",
                "cuisine": "Healthy",
                "rating": 4.1,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "968f993e-9e8c-410d-8d1d-dcefcd40cfd5"
            },
            {
                "name": "Green Eats 87",
                "address": "Gachibowli, Hyderabad",
                "cuisine": "Healthy",
                "rating": 3.8,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "5faf2d81-b4b3-4643-9751-1e759e063afa"
            },
            {
                "name": "Green Eats 7",
                "address": "Banjara Hills, Hyderabad",
                "cuisine": "Healthy",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "b884da7c-ad5b-459e-b380-dbe02a2604e7"
            },
            {
                "name": "Green Eats 55",
                "address": "Madhapur, Hyderabad",
                "cuisine": "Healthy",
                "rating": 4.0,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "a4518942-ec2a-4c6f-9b5a-30f06637d94c"
            },
            {
                "name": "Healthy Harvest 82",
                "address": "Attapur, Hyderabad",
                "cuisine": "Healthy",
                "rating": 4.2,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "c253a121-ff7c-48ad-901e-687cecebfacc"
            },
            {
                "name": "Healthy Harvest 22",
                "address": "Banjara Hills, Hyderabad",
                "cuisine": "Healthy",
                "rating": 4.0,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
                "owner": "805531ae-8522-4b3a-99b6-a57b027a3de9"
            },
            {
                "name": "Healthy Harvest 75",
                "address": "Uppal, Hyderabad",
                "cuisine": "Healthy",
                "rating": 4.3,
                "imageUrl": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000",
            }
        ];

        // Dynamically assign the owner AND a random image based on cuisine
        const cuisineImages = {
            "Salad": [
                "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600",
                "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?q=80&w=600",
                "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?q=80&w=600"
            ],
            "Rolls": [
                "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600",
                "https://images.unsplash.com/photo-1505253758473-96b701d2cd3e?q=80&w=600",
                "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600"
            ],
            "Deserts": [
                "https://images.unsplash.com/photo-1563729768-3980346f36d9?q=80&w=600",
                "https://images.unsplash.com/photo-1551024601-5637ade84d44?q=80&w=600",
                "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=600"
            ],
            "Sandwich": [
                "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600",
                "https://images.unsplash.com/photo-1619860860774-1e2e17343432?q=80&w=600",
                "https://images.unsplash.com/photo-1553909489-cd47e5900798?q=80&w=600"
            ],
            "Cake": [
                "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600",
                "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=600"
            ],
            "Pure Veg": [
                "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600",
                "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=600"
            ],
            "Pasta": [
                "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600",
                "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=600",
                "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=600"
            ],
            "Noodles": [
                "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600",
                "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=600"
            ],
            "Biryani": [
                "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600",
                "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=600"
            ],
            "Pizza": [
                "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=600",
                "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600"
            ],
            "Burgers": [
                "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600",
                "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600"
            ],
            "Chinese": [
                "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=600",
                "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600"
            ],
            "Bakery": [
                "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600",
                "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=600"
            ],
            "Cafe": [
                "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600",
                "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600"
            ],
            "Healthy": [
                "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600",
                "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600"
            ],
            "Desserts": [
                "https://images.unsplash.com/photo-1563729768-3980346f36d9?q=80&w=600",
                "https://images.unsplash.com/photo-1551024601-5637ade84d44?q=80&w=600"
            ]
        };

        const restaurantsWithOwner = restaurants.map(restaurant => {
            const images = cuisineImages[restaurant.cuisine] || cuisineImages["Salad"]; // default fallback
            const randomImage = images[Math.floor(Math.random() * images.length)];

            return {
                ...restaurant,
                owner: owner._id,
                imageUrl: randomImage
            };
        });

        await Restaurant.deleteMany({}); // Start fresh
        await Restaurant.insertMany(restaurantsWithOwner);
        console.log("Data Seeded Successfully!");
        process.exit();

    } catch (error) {
        console.error("Error seeding data:", error);
        process.exit(1);
    }
};

seedRestaurants();
