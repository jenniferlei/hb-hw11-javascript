'use strict';

// Our customers are going to buy lots of melons!

const melonsToAdd = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                    'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                    'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                    'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                    'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                    'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                    'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                    'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                    'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                    'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                    'Watermelon', 'Santa Claus', 'Casaba']


// const countMelons = (melonArray) => {
//     // Take in an array and return a object of # of melons by melon type.

//     const melonCounts = {};

//     for (const melon of melonArray) {
//         if (melonCounts[melon]) {
//             melonCounts[melon] += 1;
//         } else {
//             melonCounts[melon] = 1;
//         }
//     }

//     return melonCounts;
// }

// console.log(countMelons(melonsToAdd));


// Refactor with Array.reduce()
// const countMelons = melonsToAdd.reduce((melonCounts, melon) => {
//     if (melonCounts[melon]) {
//         melonCounts[melon] += 1;
//     } else {
//         melonCounts[melon] = 1;
//     }
    
//     return melonCounts;
// }, {});

// console.log(countMelons)


// Use short circuit
const countMelons = melonsToAdd.reduce((melonCounts, melon) => {
    melonCounts[melon] = (melonCounts[melon] || 0) + 1;
    
    return melonCounts;
}, {});

console.log(countMelons)
