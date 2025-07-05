import { CheeseOption } from "@/types";

export const url = {
    API_BASE_URL: process.env.FOOD_API_BASE_URL || 'https://wok-and-wakis-apis.vercel.app'
}

export const cheeseOptions: CheeseOption[] = [
    { label: 'Add Cheddar', price: '$2.50' },
    { label: 'Add Pepper Jack', price: '$1.50' },
    { label: 'Add Provolone', price: '$5.00' },
    { label: 'Add Swiss', price: '$3.00', highlight: true }
];

export const eggOptions = ['Over Easy', 'Over Hard', 'Over Medium', 'Scrambled'];