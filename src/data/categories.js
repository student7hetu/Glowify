// src/data/categories.js
import skincare from '../assets/categories/skincare.jpg';
import haircare from '../assets/categories/haircare.jpg';
import bodycare from '../assets/categories/bodycare.jpg';
import wellness from '../assets/categories/wellness.jpg';

export const categories = [
  {
    _id: "cat1",
    name: "Skin Care",
    description: "Premium quality skin care essentials for daily glow and nourishment.",
    image: skincare
  },
  {
    _id: "cat2",
    name: "Hair Care",
    description: "Essential hair care products to strengthen, style and shine.",
    image: haircare
  },
  {
    _id: "cat3",
    name: "Body Care",
    description: "Smooth, protect, and pamper your skin with our body care collection.",
    image: bodycare
  },
  {
    _id: "cat4",
    name: "Wellness",
    description: "Boost your inner beauty and health with natural wellness products.",
    image: wellness
  }
];
