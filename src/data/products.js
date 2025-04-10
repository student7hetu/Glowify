// src/data/products.js
import hydratingcream from '../assets/skincare/hydratingcream.jpg';
import gentlecleanser from '../assets/skincare/gentlecleanser.jpg';
import nightserum from '../assets/skincare/nightserum.jpg';
import facemask from '../assets/skincare/facemask.jpg';
import toner from '../assets/skincare/toner.jpg';
import eyecream from '../assets/skincare/eyecream.jpg';

import shampoo from '../assets/haircare/shampoo.jpg';
import conditioner from '../assets/haircare/conditioner.jpg';
import hairoil from '../assets/haircare/hairoil.jpg';
import hairserum from '../assets/haircare/hairserum.jpg';
import leaveincream from '../assets/haircare/leave-incream.jpg';
import scalpscrub from '../assets/haircare/scalpscrub.jpg';

import bodylotion from '../assets/bodycare/bodylotion.jpg';
import showergel from '../assets/bodycare/showergel.jpg';
import bodyscrub from '../assets/bodycare/bodyscrub.jpg';
import handcream from '../assets/bodycare/handcream.jpg';
import footcream from '../assets/bodycare/footcream.jpg';
import bodybutter from '../assets/bodycare/bodybutter.jpg';

import herbaltea from '../assets/wellness/herbaltea.jpg';
import vitamingummies from '../assets/wellness/vitamingummies.jpg';
import aromatherapyoil from '../assets/wellness/aromatherapyoil.jpg';
import proteinbar from '../assets/wellness/proteinbar.jpg';
import energydrink from '../assets/wellness/energydrink.jpg';
import immunityshot from '../assets/wellness/immunityshot.jpg';

export const products = [
  {
    _id: "prod1",
    category_id: "cat1",
    name: "Hydrating Cream",
    price: 499,
    brand: "GlowSkin",
    description: "Hydrating Cream from Skincare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: hydratingcream,
    latest: true,
  bestseller: true
  },
  {
    _id: "prod2",
    category_id: "cat1",
    name: "Gentle Cleanser",
    price: 599,
    brand: "GlowSkin",
    description: "Gentle Cleanser from Skincare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: gentlecleanser,
    latest: true,
  bestseller: true
  },
  {
    _id: "prod3",
    category_id: "cat1",
    name: "Night Serum",
    price: 699,
    brand: "GlowSkin",
    description: "Night Serum from Skincare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: nightserum,
    latest: false,
  bestseller: false
  },
  {
    _id: "prod4",
    category_id: "cat1",
    name: "Face Mask",
    price: 799,
    brand: "GlowSkin",
    description: "Face Mask from Skincare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: facemask,
    latest: false,
  bestseller: false
  },
  {
    _id: "prod5",
    category_id: "cat1",
    name: "Toner",
    price: 899,
    brand: "GlowSkin",
    description: "Toner from Skincare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: toner,
    latest: false,
  bestseller: false
  },
  {
    _id: "prod6",
    category_id: "cat1",
    name: "Eye Cream",
    price: 999,
    brand: "GlowSkin",
    description: "Eye Cream from Skincare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: eyecream,
    latest: false,
  bestseller: false
  },
  {
    _id: "prod7",
    category_id: "cat2",
    name: "Shampoo",
    price: 499,
    brand: "PureCare",
    description: "Shampoo from Haircare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: shampoo,
    latest: false,
  bestseller: false
  },
  {
    _id: "prod8",
    category_id: "cat2",
    name: "Conditioner",
    price: 599,
    brand: "PureCare",
    description: "Conditioner from Haircare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: conditioner,
    latest: false,
  bestseller: false
  },
  {
    _id: "prod9",
    category_id: "cat2",
    name: "Hair Oil",
    price: 699,
    brand: "PureCare",
    description: "Hair Oil from Haircare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: hairoil,
    latest: true,
  bestseller: true
  },
  {
    _id: "prod10",
    category_id: "cat2",
    name: "Hair Serum",
    price: 799,
    brand: "PureCare",
    description: "Hair Serum from Haircare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: hairserum,
    latest: true,
  bestseller: true
  },
  {
    _id: "prod11",
    category_id: "cat2",
    name: "Leave-In Cream",
    price: 899,
    brand: "PureCare",
    description: "Leave-In Cream from Haircare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: leaveincream,
    latest: false,
  bestseller: false
  },
  {
    _id: "prod12",
    category_id: "cat2",
    name: "Scalp Scrub",
    price: 999,
    brand: "PureCare",
    description: "Scalp Scrub from Haircare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: scalpscrub,
    latest: false,
  bestseller: false
  },
  {
    _id: "prod13",
    category_id: "cat3",
    name: "Body Lotion",
    price: 499,
    brand: "NatureTouch",
    description: "Body Lotion from Bodycare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: bodylotion,
    latest: false,
  bestseller: false
  },
  {
    _id: "prod14",
    category_id: "cat3",
    name: "Shower Gel",
    price: 599,
    brand: "NatureTouch",
    description: "Shower Gel from Bodycare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: showergel,
    latest: false,
  bestseller: false
  },
  {
    _id: "prod15",
    category_id: "cat3",
    name: "Body Scrub",
    price: 699,
    brand: "NatureTouch",
    description: "Body Scrub from Bodycare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: bodyscrub,
    latest: true,
  bestseller: true
  },
  {
    _id: "prod16",
    category_id: "cat3",
    name: "Hand Cream",
    price: 799,
    brand: "NatureTouch",
    description: "Hand Cream from Bodycare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: handcream,
    latest: true,
  bestseller: true
  },
  {
    _id: "prod17",
    category_id: "cat3",
    name: "Foot Cream",
    price: 899,
    brand: "NatureTouch",
    description: "Foot Cream from Bodycare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: footcream,
    latest: false,
  bestseller: false
  },
  {
    _id: "prod18",
    category_id: "cat3",
    name: "Body Butter",
    price: 999,
    brand: "NatureTouch",
    description: "Body Butter from Bodycare category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: bodybutter,
    latest: false,
  bestseller: false
  },
  {
    _id: "prod19",
    category_id: "cat4",
    name: "Herbal Tea",
    price: 499,
    brand: "HerbEssence",
    description: "Herbal Tea from Wellness category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: herbaltea,
    latest: true,
  bestseller: true
  },
  {
    _id: "prod20",
    category_id: "cat4",
    name: "Vitamin Gummies",
    price: 599,
    brand: "HerbEssence",
    description: "Vitamin Gummies from Wellness category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: vitamingummies,
    latest: true,
  bestseller: true
  },
  {
    _id: "prod21",
    category_id: "cat4",
    name: "Aromatherapy Oil",
    price: 699,
    brand: "HerbEssence",
    description: "Aromatherapy Oil from Wellness category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: aromatherapyoil,
    latest: false,
  bestseller: false
  },
  {
    _id: "prod22",
    category_id: "cat4",
    name: "Protein Bar",
    price: 799,
    brand: "HerbEssence",
    description: "Protein Bar from Wellness category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: proteinbar,
    latest: false,
  bestseller: false
  },
  {
    _id: "prod23",
    category_id: "cat4",
    name: "Energy Drink",
    price: 899,
    brand: "HerbEssence",
    description: "Energy Drink from Wellness category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: energydrink,
    latest: false,
  bestseller: false
  },
  {
    _id: "prod24",
    category_id: "cat4",
    name: "Immunity Shot",
    price: 999,
    brand: "HerbEssence",
    description: "Immunity Shot from Wellness category. Premium quality product for daily use.",
    ingredients: "Natural Extracts, Essential Oils",
    usage: "Use daily as directed",
    image: immunityshot,
    latest: false,
  bestseller: false
  }
];
