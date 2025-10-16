import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import DeliveryPlatforms from '../components/DeliveryPlatforms';
import aloo_tikki from './../../public/aloo_tikki.jpeg';
import pani_puri from './../../public/pani_puri.jpeg';
import onion_bhajji from './../../public/onion_bhajji.jpeg';
import chole_bhature from './../../public/chole.jpeg';
import poppadams_dips from './../../public/papadam_dips.jpeg';
import vada_pav from './../../public/vada_pav.jpeg';
import chicken_lollipop from './../../public/chicken_lollipop.jpeg';
import samosa from './../../public/samosa.jpeg';
import biryani_1 from './../../public/biryani_1.jpeg';
import biryani_2 from './../../public/biryani_2.jpeg';
import dosa_1 from './../../public/dosa_1.jpeg';
import dosa_2 from './../../public/dosa_2.jpeg';
import gulab_jamun from './../../public/gulab_jamun.jpeg';
import carrot_halwa from './../../public/carrot_halwa.jpeg';
import kala_jamun from './../../public/kala_jamun.jpeg';

const Menu = () => {
  const [openVegCategory, setOpenVegCategory] = useState<string | null>(null);
  const [openNonVegCategory, setOpenNonVegCategory] = useState<string | null>(null);

  

  const featuredDishes = [
    {
      name: 'Aloo Tikki',
      description: 'Crispy potato patties seasoned with spices shallow-fried to golden perfection. It is a delicious snack often served with chutney and salad.',
      price: '£3.95',
      image: [aloo_tikki],
    },
    {
      name: 'Pani Puri Shots',
      description: 'Crispy hollow puris filled with spiced chickpeas, served with four flavorful glasses of water: refreshing Mint, zesty Tangy, fiery Spicy, Sweet. A burst of in every bite!',
      price: '£4.49',
      image: [pani_puri],
    },
    {
      name: 'Onion Bhajji',
      description: 'Crispy, golden fritters made with thinly sliced onions and spiced chickpea flour batter. Each bite is a crunchy delight, served with cilantro aiole, tamarind and, mint for dipping. A must-try appetizer!',
      price: '£4.49',
      image: [onion_bhajji]
    },
    {
      name: 'Chole Bhature',
      description: 'Two fluffy deeply-fried bhatures served with Spicy chickpeas simmered in a rich gravy served with. A flavorful and satisfying classic!',
      price: '£6.99',
      image: [chole_bhature, poppadams_dips]
    },
    {
      name: 'Poppadams Dips',
      description: 'Thin, wafers are expertly crafted from a blend of lentil or chickpea flour, and a shard of poppadom with chutneys.',
      price: '£2.99',
      image: [poppadams_dips]
    },
    {
      name: 'Vada Pav',
      description: 'A Bombay classic street food! A soft, buttered bun stuffed with a golden-fried spicy potato vada, topped with tangy tamarind chutney, and zesty coriander chutney. A burst of flavor in every bite.',
      price: '£5.49',
      image: [vada_pav]
    },
    {
      name: 'Chicken Lollipop',
      description: 'Crispy chicken wings shaped like lollipops, marinated and deep-fried.',
      price: '£8.99',
      image: [chicken_lollipop]
    },
    {
      name: 'Samosa',
      description: 'Crispy, golden pastries filled with spiced potatoes and peas. Deep-fried to perfection and served hot with tangy chutney, and fried chilies -an irresistible snack!',
      price: '£2.99',
      image: [samosa]
    },
    {
      name: 'Chicken Biryani',
      description: 'Basmati rice flavored with chicken and whole masala mix, served with mirchi ka salan and raita.',
      price: '£9.99',
      image: [biryani_1, biryani_2]
    },
    {
      name: 'Masala Dosa',
      description: 'Crispy dosa filled with spiced potato masala, served with coconut chutney and sambar.',
      price: '£5.99',
      image: [dosa_1, dosa_2]
    },
    {
      name: 'Gulab Jamun',
      description: 'Tender, syrup-soaked balls made from milk solids, delicately flavored with cardamom and rose water. Each bite is a sweet, floral delight that melts in your mouth!',
      price: '£2.49',
      image: [gulab_jamun]
    },
    {
      name: 'Carrot Halwa',
      description: 'A warm, sweet treat made from grated carrots simmered in milk and sugar, with aromatic cardamom. Topped with crunchy nuts, it\'s a cozy dessert that melts in your mouth!',
      price: '£2.99',
      image: [carrot_halwa]
    },
    {
      name: 'Kala Jamun',
      description: 'Rich, dark balls made from khoya and paneer, deep-fried to perfection and soaked in fragrant sugar syrup. Each bite is a luscious blend of crispy and soft textures, featuring favorite flavors.',
      price: '£2.49',
      image: [kala_jamun]
    }
  ];

  const [currentIndexes, setCurrentIndexes] = useState(
    featuredDishes.map(() => 0)
  );

  const handleNext = (index: number) => {
    if (featuredDishes[index].image.length <= 1) return; // ignore single image
    setCurrentIndexes((prev) =>
      prev.map((val, i) =>
        i === index
          ? (val + 1) % featuredDishes[index].image.length
          : val
      )
    );
  };

  const handlePrev = (index: number) => {
    if (featuredDishes[index].image.length <= 1) return; // ignore single image
    setCurrentIndexes((prev) =>
      prev.map((val, i) =>
        i === index
          ? (val - 1 + featuredDishes[index].image.length) %
            featuredDishes[index].image.length
          : val
      )
    );
  };

  const toggleVegCategory = (category: string) => {
    setOpenVegCategory(openVegCategory === category ? null : category);
  };

  const toggleNonVegCategory = (category: string) => {
    setOpenNonVegCategory(openNonVegCategory === category ? null : category);
  };

  const vegetarianCategories = [
    {
      id: 'veg-starters',
      name: 'Starters',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        { name: 'Paneer Tikka', description: 'Grilled cottage cheese with bell peppers and onions', price: '£8.95', spice: 'Medium' },
        { name: 'Veg Spring Roll', description: 'Crispy rolls filled with fresh vegetables', price: '£6.95', spice: 'Mild' },
        { name: 'Samosa (2 pieces)', description: 'Crispy pastry filled with spiced potatoes and peas', price: '£5.95', spice: 'Mild' },
        { name: 'Onion Bhajji', description: 'Deep-fried onion fritters with aromatic spices', price: '£6.95', spice: 'Mild' },
        { name: 'Aloo Tikki', description: 'Spiced potato patties served with chutneys', price: '£7.95', spice: 'Medium' }
      ]
    },
    {
      id: 'veg-mains',
      name: 'Main Courses',
      image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        { name: 'Palak Paneer', description: 'Cottage cheese in creamy spinach sauce', price: '£12.95', spice: 'Mild' },
        { name: 'Dal Makhani', description: 'Black lentils simmered in butter and cream', price: '£10.95', spice: 'Mild' },
        { name: 'Aloo Gobi', description: 'Cauliflower and potatoes with turmeric and spices', price: '£11.95', spice: 'Medium' },
        { name: 'Chana Masala', description: 'Chickpeas in spiced tomato gravy', price: '£10.95', spice: 'Medium' },
        { name: 'Paneer Makhani', description: 'Cottage cheese in rich tomato and butter sauce', price: '£13.95', spice: 'Mild' },
        { name: 'Vegetable Korma', description: 'Mixed vegetables in creamy coconut curry', price: '£12.95', spice: 'Mild' }
      ]
    },
    {
      id: 'veg-biryanis',
      name: 'Biryanis & Rice',
      image: 'https://images.pexels.com/photos/13647508/pexels-photo-13647508.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        { name: 'Vegetable Biryani', description: 'Mixed vegetables with saffron rice', price: '£13.95', spice: 'Mild' },
        { name: 'Paneer Biryani', description: 'Cottage cheese with aromatic basmati rice', price: '£14.95', spice: 'Medium' },
        { name: 'Pilau Rice', description: 'Fragrant basmati rice with whole spices', price: '£4.95', spice: 'Mild' },
        { name: 'Coconut Rice', description: 'Basmati rice cooked with coconut milk', price: '£5.95', spice: 'Mild' },
        { name: 'Jeera Rice', description: 'Cumin flavored basmati rice', price: '£4.95', spice: 'Mild' }
      ]
    },
    {
      id: 'veg-breads',
      name: 'Breads',
      image: 'https://images.pexels.com/photos/5560025/pexels-photo-5560025.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        { name: 'Naan', description: 'Traditional leavened bread from tandoor', price: '£3.95', spice: 'None' },
        { name: 'Garlic Naan', description: 'Naan bread with fresh garlic and herbs', price: '£4.95', spice: 'None' },
        { name: 'Cheese Naan', description: 'Naan stuffed with melted cheese', price: '£5.95', spice: 'None' },
        { name: 'Peshwari Naan', description: 'Sweet naan with coconut, almonds, and raisins', price: '£5.95', spice: 'None' },
        { name: 'Chapati', description: 'Thin whole wheat bread', price: '£2.95', spice: 'None' },
        { name: 'Paratha', description: 'Flaky layered bread cooked on griddle', price: '£4.95', spice: 'None' }
      ]
    },
    {
      id: 'veg-desserts',
      name: 'Desserts',
      image: 'https://images.pexels.com/photos/6789045/pexels-photo-6789045.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        { name: 'Gulab Jamun', description: 'Sweet dumplings in cardamom syrup', price: '£5.95', spice: 'None' },
        { name: 'Rasmalai', description: 'Cottage cheese dumplings in sweetened milk', price: '£6.95', spice: 'None' },
        { name: 'Kulfi', description: 'Traditional Indian ice cream with pistachios', price: '£4.95', spice: 'None' },
        { name: 'Gajar Halwa', description: 'Carrot pudding with nuts and cardamom', price: '£5.95', spice: 'None' },
        { name: 'Kheer', description: 'Rice pudding with saffron and almonds', price: '£5.95', spice: 'None' }
      ]
    }
  ];

  const nonVegetarianCategories = [
    {
      id: 'indian-street-food',
      name: 'Indian Street Food',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        { name: 'Poppadams Dips', description: 'Thin, wafers are expertly crafted from a blend of lentil or chickpea flour, and a shard of poppadom with chutneys.', price: '£2.99', spice: 'Hot' },
        { name: 'Masala Poppadams Dips', description: 'Crispy papad topped with a mixture of finely chopped onions, tomatoes, coriander leaves, and a sprinkle of authentic spices and served with chutneys.', price: '£3.49', spice: 'Hot' },
        { name: 'Pani Puris Shots', description: 'Crispy hollow puris filled with spiced chickpeas, served with four flavorful glasses of water: refreshing Mint, zesty Tangy, fiery Spicy, Sweet. A burst of in every bite!', price: '£4.49', spice: 'Hot' },
        { name: 'Vada Pav', description: 'A Bombay classic street food! A soft, buttered bun stuffed with a golden-fried spicy potato vada, topped with tangy tamarind chutney, and zesty coriander chutney. A burst of flavor in every bite.', price: '£5.49', spice: 'Hot' },
        { name: 'Onion Bhajji', description: 'Crispy, golden fritters made with thinly sliced onions and spiced chickpea flour batter. Each bite is a crunchy delight, served with cilantro aiole, tamarind and, mint for dipping. A must-try appetizer!', price: '£4.49', spice: 'Medium' },
        { name: 'Banana Fritters', description: 'Crispy fritters made with unripened bananas and chickpea flour, lightly spiced and fried to golden perfection. Served hot with cilantro aioli, mint. and tamarind for a delightful crunch in every bite!', price: '£5.49', spice: 'Medium' },
        { name: 'Brinjal Fritters', description: 'Crispy fritters are made with slices of Aubergine dipped in a spiced chickpea flour batter and fried to golden perfection. Finished with a drizzle of of our secret Indian feast masala, these savory bites are perfect as a snack or appetizer, served hot with cilantro aioli, tamarind, and mint dipping.', price: '£5.49', spice: 'Hot' },
        { name: 'Mirchi Fritters', description: 'Crispy deep-fried fritters made with large green chilies coated in a spiced gram flour batter. Each bite offers a delightful crunch, with a hint of spice. Perfect as a snack or appetizer, served hot with cilantro aioli, tamarind, and mint dipping.', price: '£ 5.99', spice: 'Hot' },
        { name: 'Poori Bhaji', description: 'Soft, puffy puris served with a mildly spiced potato bhaji, sautéed with mustard seeds and aromatic spices. A comforting and flavorful classic!', price: '£6.49', spice: 'Hot' },
        { name: 'Chole Bhature', description: 'Two fluffy deeply-fried bhatures served with Spicy chickpeas simmered in a rich gravy served with. A flavorful and satisfying classic!', price: '£6.99', spice: 'Hot' },
        { name: 'Chicken Samosa', description: 'Crispy, golden pastry filled with spiced minced chicken, herbs, and aromatic seasonings, perfectly fried for a savory and satisfying snack!', price: '£3.49', spice: 'Medium' },
        { name: 'Samosa', description: 'Crispy, golden pastries filled with spiced potatoes and peas. Deep-fried to perfection and served hot with tangy chutney, and fried chilies -an irresistible snack!', price: '£2.99', spice: 'Medium' },
        { name: 'Samosa Chat', description: 'Crispy samosas, broken into pieces, topped with spiced chickpeas, creamy yogurt, tangy tamarind chutney, chopped onion, coriander, and crunchy sev.', price: '£5.49', spice: 'Hot' },
        { name: 'Aloo Tikki', description: 'Crispy potato patties seasoned with spices shallow-fried to golden perfection. It is a delicious snack often served with chutney and salad.', price: '£3.99', spice: 'Medium' },
        { name: 'Aloo Tikki Chat', description: 'CCrispy potato patties topped with spiced chickpeas, yogurt, and tangy chutneys. Garnished with sev and onions, it\'s a flavorful and satisfying snack!', price: '£5.49', spice: 'Medium' }
      ]
    },
    {
      id: 'dosas',
      name: 'Dosas',
      image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        { name: 'Plain Dosa', description: 'A thin, crispy crepe made from fermented rice and urad dal batter, served with chutneys and sambar.', price: '£4.99', spice: 'Medium' },
        { name: 'Ghee Roast Dosa', description: 'Crispy dosa roasted in ghee for a rich flavour served with coconut chutney and sambar.', price: '£5.49', spice: 'Hot' },
        { name: 'Onion Dosa', description: 'Crispy dosa topped with finely chopped onions, served with chutneys and sambar.', price: '£4.99', spice: 'Mild' },
        { name: 'Egg Dosa', description: 'Crispy dosa topped with scrambled eggs, served with chutneys and sambar.', price: '£5.49', spice: 'Medium' },
        { name: 'Masala Dosa', description: 'Crispy dosa filled with spiced potato masala, served with coconut chutney and sambar.', price: '£5.99', spice: 'Hot' },
        { name: 'Ghee Masala Dosa', description: 'Crispy dosa roasted in ghee filled with spiced potato masala for added flavor. Typically served with coconut chutney and sambar, it\'s a delicious South Indian dish!', price: '£6.99', spice: 'Mild' },
        { name: 'Uttapam', description: 'A thick, spongy pancake made from fermented rice and urad dal batter, topped with vegetables. Served with coconut chutney and sambar.', price: '£6.49', spice: 'Medium' },
        { name: 'Street Pizza Dosa', description: 'A fusion dish combining dosa with pizza toppings. Thick dosa base topped with tomato sauce, cheese, and chicken or veg curry.', price: '£7.49', spice: 'Hot' }
      ]
    },
    {
      id: 'fried-rice',
      name: 'Fried Rice',
      image: 'https://images.pexels.com/photos/13647508/pexels-photo-13647508.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        {
          name: 'Veg Fried Rice',
          description: 'A flavorful dish made with stir-fried rice, mixed vegetables, and a blend of savory sauces. A delicious and wholesome meal!',
          price: '£6.49'
        },
        {
          name: 'Egg Fried Rice',
          description: 'A delicious twist on a classic, featuring stir-fried rice with fluffy scrambled eggs and a hint of authentic seasoning.',
          price: '£7.49'
        },
        {
          name: 'Egg Schezwan Fried Rice',
          description: 'A spicy Schezwan-style rice dish made with fluffy scrambled eggs, colorful vegetables, and bold Indo-Chinese flavors.',
          price: '£7.99'
        },
        {
          name: 'Chicken Schezwan Fried Rice',
          description: 'A fiery fusion of stir-fried rice, tender chicken, and bold Schezwan sauce. A spicy kick to an Indo-Chinese favorite!',
          price: '£8.49'
        },
        {
          name: 'Schezwan Fried Rice',
          description: 'A spicy and zesty rice dish cooked with Schezwan sauce, a blend of colorful vegetables, and aromatic spices.',
          price: '£6.99'
        },
        {
          name: 'Kheema Fried Rice',
          description: 'A unique and hearty dish featuring stir-fried rice mixed with seasoned minced meat (Kheema) and a hint of spices. A savory indulgence!',
          price: '£7.99'
        }
      ]
    },
    {
      id: 'starters',
      name: 'Starters',
      image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        {
          name: 'Chilli Paneer',
          description: 'Crispy paneer cubes tossed in a spicy, tangy sauce with bell peppers and onions.',
          price: '£7.49'
        },
        {
          name: 'Paneer 65',
          description: 'Spicy, deep-fried paneer cubes marinated in a flavorful mixture.',
          price: '£7.99'
        },
        {
          name: 'Paneer Tikka',
          description: 'Marinated paneer and vegetables grilled until charred, served with mint chutney.',
          price: '£7.99'
        },
        {
          name: 'Paneer Manchuria',
          description: 'Crispy paneer cubes tossed in a sweet and spicy Manchurian sauce.',
          price: '£7.99'
        },
        {
          name: 'Spring Rolls',
          description: 'Crispy rolls filled with shredded vegetables like cabbage, carrots, and bean sprouts, perfectly seasoned and deep-fried to golden perfection. Served with sweet chilli sauce.',
          price: '£4.49'
        },
        {
          name: 'Paneer Spring Rolls',
          description: 'Crispy rolls filled with shredded vegetables and crumbled paneer, perfectly seasoned and deep-fried to golden perfection. Served with sweet chilli sauce.',
          price: '£5.99'
        },
        {
          name: 'Gobi Manchuria',
          description: 'Crispy cauliflower florets tossed in a spicy, sweet, and tangy sauce, seasoned with oriental flavors. A delicious Indo-Chinese classic served dry or with gravy.',
          price: '£6.99'
        },
        {
          name: 'Veg Manchuria',
          description: 'Crispy deep-fried vegetable balls tossed in a tangy, spicy sauce. A popular Indo-Chinese delicacy served dry or with gravy.',
          price: '£7.99'
        },
        {
          name: 'Chicken 65',
          description: 'Spicy, deep-fried chicken pieces marinated in yoghurt and spices, garnished with curry leaves, red spring onions and served with lemon.',
          price: '£8.49'
        },
        {
          name: 'Chicken Lollipops',
          description: 'Crispy chicken wings shaped like lollipops, marinated and deep-fried.',
          price: '£8.99'
        },
        {
          name: 'Chicken Majestic',
          description: 'Deep-fried chicken strips tossed in a tangy, spicy sauce. A popular Indo-Chinese delicacy served dry or with gravy.',
          price: '£8.49'
        },
        {
          name: 'Chilli Chicken',
          description: 'Chilli chicken features fried chicken pieces tossed in a spicy, tangy sauce made with soy sauce, chilli sauce, and vegetables like onions and bell peppers.',
          price: '£8.49'
        },
        {
          name: 'Chilli Prawns',
          description: 'Succulent prawns tossed in a spicy, tangy sauce with onions, bell peppers, and Indo-Chinese seasonings.',
          price: '£8.99'
        }
      ]
    },

    {
      id: 'curries',
      name: 'Curries',
      image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        {
          name: 'Dal Tadka',
          description: 'Cooked lentils tempered with garlic, cumin, and mustard seeds. This hearty dish is a staple in Indian cuisine, perfect with rice or naan for a wholesome meal!',
          price: '£5.99'
        },
        {
          name: 'Tomato Dal',
          description: 'Pigeon pea lentils cooked with tomatoes and spices.',
          price: '£6.49'
        },
        {
          name: 'Palak Dal',
          description: 'A wholesome blend of lentils and fresh spinach, seasoned with aromatic spices and tempered with garlic and cumin. Nutritious and comforting, perfect with rice or naan.',
          price: '£6.49'
        },
        {
          name: 'Aloo Matar',
          description: 'Savory potatoes and sweet peas simmered in a spiced onion-tomato gravy, capturing the essence of comfort in a velvety sauce.',
          price: '£6.49'
        },
        {
          name: 'Rajma',
          description: 'Hearty kidney beans simmered in a spiced onion-tomato gravy, seasoned with cumin, garam masala, and aromatic herbs.',
          price: '£6.49'
        },
        {
          name: 'Chana Masala',
          description: 'Savor the bold flavors of tender chickpeas in a zesty tomato-onion gravy, spiced to perfection. A hearty and wholesome delight, best enjoyed with rice or naan!',
          price: '£6.49'
        },
        {
          name: 'Aloo Masala',
          description: 'Tender Potatoes simmered in a fragrant coconut sauce with onions, tomatoes, and a blend of aromatic spices.',
          price: '£6.49'
        },
        {
          name: 'Paneer Tikka Masala',
          description: 'Marinated paneer cubes grilled and simmered in a spiced onion and tomato gravy.',
          price: '£6.99'
        },
        {
          name: 'Paneer Matar',
          description: 'Paneer and sweet peas simmered in a rich, mildly spiced, and creamy gravy. A comforting and flavorful classic enjoyed with rice or naan.',
          price: '£6.99'
        },
        {
          name: 'Paneer Butter Masala',
          description: 'Paneer cooked in a rich, buttery tomato gravy with spices and cream.',
          price: '£7.49'
        },
        {
          name: 'Egg Burji',
          description: 'Scrambled eggs cooked with onions and spices.',
          price: '£6.99'
        },
        {
          name: 'Mix Veg Korma',
          description: 'Seasonal vegetables in a luscious coconut sauce, enriched with ghee and aromatic spices. Finished with a hint of cashew for a rich, melt-in-the-mouth experience.',
          price: '£7.49'
        },
        {
          name: 'Chicken Curry',
          description: 'Succulent chicken simmered in a rich, spiced gravy made with onions and tomatoes.',
          price: '£6.79'
        },
        {
          name: 'Chicken Saagwala',
          description: 'Tender chicken in a vibrant spinach gravy infused with aromatic spices for a flavorful experience.',
          price: '£7.49'
        },
        {
          name: 'Chicken Tikka Masala',
          description: 'Succulent chicken tikka bathed in a velvety, spice-infused tomato sauce.',
          price: '£7.99'
        },
        {
          name: 'Butter Chicken',
          description: 'Tender chicken in a creamy, buttery tomato sauce, rich with spices. A luscious indulgence that brings comfort and delight in every bite.',
          price: '£7.99'
        },
        {
          name: 'Chicken Madras',
          description: 'Succulent chicken in a fiery curry! Tender chicken pieces simmered in a rich and spicy tomato-based sauce flavored with bold spices and aromatic curry leaves.',
          price: '£7.99'
        },
        {
          name: 'Chicken Mughlai',
          description: 'A royal feast blending tender chicken with savory scrambled eggs, cashews, and flavorful lentils. Rich and satisfying in every bite!',
          price: '£7.49'
        },
        {
          name: 'Kadai Chicken',
          description: 'Tender chicken and bell peppers simmered in a spicy tomato-onion gravy infused with aromatic spices. A bold and flavorful dish perfect with naan or rice.',
          price: '£7.99'
        },
        {
          name: 'Lamb Curry',
          description: 'Succulent lamb slow-cooked in a medley of bold spices and a rich, aromatic gravy. A hearty dish bursting with flavor.',
          price: '£8.49'
        },
        {
          name: 'Lamb Rogan Josh',
          description: 'Tender lamb simmered in a luscious Kashmiri-inspired gravy, infused with fragrant whole spices and smoky paprika. A timeless and hearty classic.',
          price: '£8.99'
        },
        {
          name: 'Kadai Lamb',
          description: 'Spicy lamb cooked with bell peppers, onions, and aromatic spices in a rich tomato-onion gravy. Bold, rustic, and full of flavor.',
          price: '£8.99'
        },
        {
          name: 'Lamb Madras',
          description: 'Tender lamb simmered in a rich, spiced sauce, delivering bold flavors and a delightful kick in every bite.',
          price: '£8.99'
        }
      ]
    }
    ,
    {
      id: 'breads',
      name: 'Breads',
      image: 'https://images.pexels.com/photos/5560025/pexels-photo-5560025.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        {
          name: 'Plain Naan',
          description: 'Plain naan is a soft, fluffy flatbread made from all-purpose flour, ideal for mopping up any immense. Perfect for pairing with curries!',
          price: '£1.49',
          spice: 'None'
        },
        {
          name: 'Garlic Naan',
          description: 'Garlic naan is a fragrant flatbread infused with roasted garlic and butter, offering a delightful aroma and flavor that elevates any meal to new heights.',
          price: '£2.49',
          spice: 'None'
        },
        {
          name: 'Butter Naan',
          description: 'Butter naan is a soft, pillowy flatbread brushed with melted butter, offering a rich and indulgent flavor. Perfect for scooping up curries or enjoying on its own!',
          price: '£1.99',
          spice: 'None'
        },
        {
          name: 'Coriander Naan',
          description: 'Coriander naan is a soft, flavorful flatbread topped with fresh coriander and mild spices, adding a refreshing herbal note to any curry or gravy dish.',
          price: '£1.99',
          spice: 'None'
        },
        {
          name: 'Chapati',
          description: 'Chapati is a soft, unleavened flatbread made from whole wheat flour. Thin and lightly cooked on a hot griddle, it’s a staple companion for curries and stews!',
          price: '£0.99',
          spice: 'None'
        }
      ]
    }
    ,
    {
      id: 'rice',
      name: 'Rice',
      image: 'https://images.pexels.com/photos/13647508/pexels-photo-13647508.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        {
          name: 'Steam Rice',
          description: 'Steamed rice is a light and fluffy side dish, expertly cooked to enhance any meal. Its neutral and airy texture makes it the perfect accompaniment to curries, stir-fries, and more!',
          price: '£2.99',
          spice: 'None'
        },
        {
          name: 'Pulao Rice',
          description: 'Aromatic rice pilaf, a fragrant dish made with basmati rice and aromatic spices, offering a flavorful and colorful accompaniment to curries or enjoyed on its own.',
          price: '£3.99',
          spice: 'Mild'
        },
        {
          name: 'Green Peas Pulao',
          description: 'Vibrant rice dish where fluffy basmati rice meets sweet green peas and aromatic spices. This colorful, one-pot wonder is a deliciously simple way to elevate any meal!',
          price: '£3.99',
          spice: 'Mild'
        },
        {
          name: 'Biryani Rice',
          description: 'Fragrant spiced rice dish layered with rich flavors and aromatic herbs, capturing the spirit of India’s favorite meals or vegetable. Each bite is a celebration of taste and tradition!',
          price: '£4.99',
          spice: 'Medium'
        },
        {
          name: 'Jeera Rice',
          description: 'A fragrant dish featuring fluffy basmati rice tossed with cumin seeds, imparting a nutty and earthy flavor that perfectly complements any curry or dal. Simple yet delicious!',
          price: '£3.99',
          spice: 'Mild'
        }
      ]
    }
    , {
      id: 'biryanis',
      name: 'Biryanis',
      image: 'https://images.pexels.com/photos/13647508/pexels-photo-13647508.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        {
          name: 'Veg Dum Pot Biryani',
          description: 'Basmati rice flavored with mixed veggies and whole masala mix, served with mirchi ka salan and raita.',
          price: '£8.99',
          spice: 'Medium'
        },
        {
          name: 'Chicken Dum Pot Biryani',
          description: 'Basmati rice flavored with chicken and whole masala mix, served with mirchi ka salan and raita.',
          price: '£9.99',
          spice: 'Medium'
        },
        {
          name: 'Lamb Dum Pot Biryani',
          description: 'Basmati rice flavored with lamb and whole masala mix, served with mirchi ka salan and raita.',
          price: '£10.99',
          spice: 'Medium'
        }
      ]
    }
    ,
    {
      id: 'thaalis',
      name: 'Thaalis',
      image: 'https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        {
          name: 'Indian Feast Veg Thali',
          description: 'Rice, naan, 3 curries, salad, samosa, and sweet — a complete vegetarian feast full of authentic flavors.',
          price: '£9.99',
          spice: 'Medium'
        },
        {
          name: 'Indian Feast Non-Vegetarian Thali',
          description: 'Rice, naan, 3 non-veg curries, samosa, and sweet — a hearty and flavorful non-vegetarian meal experience.',
          price: '£12.99',
          spice: 'Medium'
        }
      ]
    }
    ,
    {
      id: 'burger-chips',
      name: 'Burger/Chips',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        {
          name: 'Veg Burger',
          description: 'A flavorful vegetable patty seasoned with spices served in a sesame seed bun with fresh lettuce, tomatoes, onions, and a tangy sauce. A perfect vegetarian treat and a healthy option.',
          price: '£4.99',
          spice: 'Mild'
        },
        {
          name: 'Chicken Fillet Burger',
          description: 'A juicy chicken fillet patty, topped with fresh lettuce and creamy mayo, served with chips and ketchup. A deliciously satisfying choice for any burger lover!',
          price: '£5.99',
          spice: 'Medium'
        },
        {
          name: 'Plain Chips',
          description: 'Crispy, golden potato slices lightly salted for a simple yet irresistible crunch. A perfect side or snack for dipping!',
          price: '£2.99',
          spice: 'None'
        },
        {
          name: 'Masala Chips',
          description: 'Crispy fries tossed in a medley of vibrant Indian spices, delivering a zesty twist on a classic snack. Perfectly addictive and bursting with flavor!',
          price: '£3.49',
          spice: 'Medium'
        },
        {
          name: 'Peri Peri Chips',
          description: 'Crispy fries seasoned with a zesty blend of Peri Peri spices, offering a fiery kick and a spicy twist to your snack!',
          price: '£3.49',
          spice: 'Hot'
        },
        {
          name: 'Chicken Nuggets (6 Pcs)',
          description: 'Golden, crispy bites of tender chicken, seasoned and fried to perfection. A beloved classic that makes every snack time a treat!',
          price: '£5.49',
          spice: 'Mild'
        },
        {
          name: 'Chicken Popcorn',
          description: 'Crispy, bite-sized chicken pieces, perfectly seasoned and fried to golden perfection. A deliciously addictive snack, perfect for dipping and sharing!',
          price: '£5.49',
          spice: 'Medium'
        }
      ]
    }
    , {
      id: 'milk-shakes',
      name: 'Milk Shakes',
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        {
          name: 'Lotus Biscoff Milk Shake',
          description: 'Creamy blend of Biscoff cookie and vanilla ice cream, topped with whipped cream and crushed cookies. A decadent treat that’s pure bliss!',
          price: '£5.99',
          spice: 'None'
        },
        {
          name: 'Kinder Bueno Shake',
          description: 'Creamy blend of vanilla ice cream and Kinder Bueno chocolate, topped with whipped cream and chocolate drizzle. A deliciously indulgent treat!',
          price: '£5.49',
          spice: 'None'
        },
        {
          name: 'Oreo Milk Shake',
          description: 'A creamy blend of vanilla ice cream and crushed Oreo cookies, topped with whipped cream and extra Oreo crumble for a delightful mix of textures!',
          price: '£5.49',
          spice: 'None'
        },
        {
          name: 'Kit Kat Milk Shake',
          description: 'A creamy blend of velvety vanilla ice cream and crunchy Kit Kat pieces, topped with whipped cream and chocolate drizzle. Pure bliss in a glass!',
          price: '£5.49',
          spice: 'None'
        },
        {
          name: 'Banana Milk Shake',
          description: 'A creamy swirl of ripe bananas and vanilla ice cream, topped with whipped cream. It’s a tropical delight in every sip!',
          price: '£4.99',
          spice: 'None'
        },
        {
          name: 'Strawberry Milk Shake',
          description: 'A luscious blend of fresh strawberries and creamy vanilla ice cream, topped with whipped cream. It’s a sweet burst of summer in every sip!',
          price: '£4.99',
          spice: 'None'
        },
        {
          name: 'Mango Milk Shake',
          description: 'A tropical delight of ripe mangoes and creamy vanilla ice cream blended to perfection. Topped with whipped cream for a refreshing escape in every sip!',
          price: '£5.49',
          spice: 'None'
        },
        {
          name: 'Mango Lassi',
          description: 'A creamy blend of ripe mangoes and yogurt, sweetened to perfection. A refreshing drink with a tropical escape in every sip!',
          price: '£5.99',
          spice: 'None'
        },
        {
          name: 'Rajahmundry Rose Milk',
          description: 'A creamy fusion of vanilla ice cream and delicate rose syrup, crowned with velvety whipped cream. A sip of romance and refreshment blooming with flavor!',
          price: '£5.49',
          spice: 'None'
        }
      ]
    }
    ,
    {
      id: 'salads',
      name: 'Salads',
      image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        {
          name: 'Caesar Salad',
          description: 'Parmesan cheese, croutons, Caesar dressing, with baby gem and iceberg lettuce.',
          price: '£3.49',
          spice: 'None'
        },
        {
          name: 'Onion Salad',
          description: 'Sliced onions with a squeeze of lemon - a simple and refreshing side dish.',
          price: '£1.99',
          spice: 'None'
        },
        {
          name: 'Vegetable Salad',
          description: 'A fresh mix of cucumber, onion, lemon, and carrot - light, crisp, and healthy.',
          price: '£2.49',
          spice: 'None'
        }
      ]
    }
    ,
    {
      id: 'tea',
      name: 'Tea',
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        {
          name: 'Bombay Chai',
          description: 'An aromatic infusion of bold black tea leaves, creamy milk, fragrant spices like cardamom and ginger, and a hint of lemongrass. Available with 4 Osmania biscuits at an extra £1 on top of chai.',
          price: '£1.99',
          spice: 'None'
        },
        {
          name: 'Green Tea',
          description: '',
          price: '£1.99',
          spice: 'None'
        },
        {
          name: 'Herbal Tea',
          description: '',
          price: '£1.99',
          spice: 'None'
        },
        {
          name: 'Lemon Tea',
          description: '',
          price: '£1.99',
          spice: 'None'
        },
        {
          name: 'English Tea',
          description: '',
          price: '£1.99',
          spice: 'None'
        }
      ]
    }
    ,
    {
      id: 'desserts',
      name: 'Desserts',
      image: 'https://images.pexels.com/photos/6789045/pexels-photo-6789045.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        {
          name: 'Gulab Jamun',
          description: 'Tender, syrup-soaked balls made from milk solids, delicately flavored with cardamom and rose water. Each bite is a sweet, floral delight that melts in your mouth!',
          price: '£2.49',
          spice: 'None'
        },
        {
          name: 'Carrot Halwa',
          description: 'A warm, sweet treat made from grated carrots simmered in milk and sugar, with aromatic cardamom. Topped with crunchy nuts, it\'s a cozy dessert that melts in your mouth!',
          price: '£2.99',
          spice: 'None'
        },
        {
          name: 'Kala Jamun',
          description: 'Rich, dark balls made from khoya and paneer, deep-fried to perfection and soaked in fragrant sugar syrup. Each bite is a luscious blend of crispy and soft textures, featuring favorite flavors.',
          price: '£2.49',
          spice: 'None'
        },
        {
          name: 'Gulab Jamun with Ice Cream Scoop',
          description: '',
          price: '£3.99',
          spice: 'None'
        },
        {
          name: 'Chocolate Scoop',
          description: 'Classic creamy chocolate-flavored ice cream. (3 scoops)',
          price: '£2.99',
          spice: 'None'
        },
        {
          name: 'Vanilla Scoop',
          description: 'Classic creamy vanilla-flavored ice cream. (3 scoops)',
          price: '£2.99',
          spice: 'None'
        },
        {
          name: 'Strawberry Scoop',
          description: 'Classic creamy strawberry-flavored ice cream. (3 scoops)',
          price: '£2.99',
          spice: 'None'
        }
      ]
    }
    ,
    {
      id: 'coffees',
      name: 'Coffees',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        { name: 'Espresso', description: '', price: '£1.99' },
        { name: 'Double Espresso', description: '', price: '£2.49' },
        { name: 'Flat White', description: '', price: '£2.99' },
        { name: 'Latte', description: '', price: '£2.49' },
        { name: 'Cappuccino', description: '', price: '£2.49' },
        { name: 'Americano', description: '', price: '£2.49' },
        { name: 'Black Americano', description: '', price: '£1.99' },
        { name: 'Fredo Espresso', description: '', price: '£2.99' },
        { name: 'Fredo Cappuccino', description: '', price: '£3.49' },
        { name: 'Macchiato', description: '', price: '£2.99' },
        { name: 'Hot Chocolate', description: '', price: '£2.99' }
      ]
    }
    ,
    {
      id: 'kids-menu',
      name: 'Kids Menu',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: [
        { name: 'Chicken Nuggets with Fries and Drink', description: '', price: '£5.99' },
        { name: 'Chicken Popcorn with Fries and Drink', description: '', price: '£5.99' },
        { name: 'Chicken Steak Burger with Fries and Drink', description: '', price: '£5.99' }
      ]
    }

  ];

  const getSpiceColor = (spice: string) => {
    switch (spice) {
      case 'Mild': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'Hot': return 'text-orange-600';
      case 'Very Hot': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Menu</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Discover authentic Indian flavors crafted with traditional recipes and the finest spices
          </p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Vegetarian Menu */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-green-600 text-white p-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-400 rounded-full mr-3"></div>
                  <h2 className="text-3xl font-bold">Vegetarian</h2>
                </div>
                <p className="mt-2 text-green-100">Pure vegetarian dishes made with fresh ingredients</p>
              </div>

              <div className="p-6 space-y-4">
                {vegetarianCategories.map((category) => (
                  <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleVegCategory(category.id)}
                      className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                        </div>
                        {openVegCategory === category.id ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </button>

                    {openVegCategory === category.id && (
                      <div className="px-4 pb-4 bg-gray-50">
                        <div className="space-y-3">
                          {category.items.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-md font-semibold text-gray-900">{item.name}</h4>
                                <span className="text-lg font-bold text-green-600">{item.price}</span>
                              </div>
                              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                              {/* {item.spice !== 'None' && (
                                <span className={`text-xs font-medium ${getSpiceColor(item.spice)}`}>
                                  🌶️ Spice Level: {item.spice}
                                </span>
                              )} */}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Non-Vegetarian Menu */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-red-600 text-white p-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-400 rounded-full mr-3"></div>
                  <h2 className="text-3xl font-bold">Non-Vegetarian</h2>
                </div>
                <p className="mt-2 text-red-100">Delicious meat and seafood dishes with authentic spices</p>
              </div>

              <div className="p-6 space-y-4">
                {nonVegetarianCategories.map((category) => (
                  <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleNonVegCategory(category.id)}
                      className="w-full p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img
                            src={category.image}
                            alt={category.name}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                        </div>
                        {openNonVegCategory === category.id ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </button>

                    {openNonVegCategory === category.id && (
                      <div className="px-4 pb-4 bg-gray-50">
                        <div className="space-y-3">
                          {category.items.map((item, index) => (
                            <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="text-md font-semibold text-gray-900">{item.name}</h4>
                                <span className="text-lg font-bold text-green-600">{item.price}</span>
                              </div>
                              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                              {/* {item.spice !== 'None' && (
                                <span className={`text-xs font-medium ${getSpiceColor(item.spice)}`}>
                                  🌶️ Spice Level: {item.spice}
                                </span>
                              )} */}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Allergens Notice Section */}
          <div className="mt-12 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg shadow-lg overflow-hidden border-2 border-yellow-400">
            <div className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white p-6">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-300 rounded-full mr-3 animate-pulse"></div>
                <h2 className="text-2xl font-bold">ALLERGENS NOTICE</h2>
              </div>
            </div>

            <div className="p-6">
              <div className="bg-white p-6 rounded-lg border-l-4 border-yellow-500 shadow-sm">
                <p className="text-sm leading-relaxed text-gray-700 mb-4">
                  At the Indian Feast, your health and safety are our top priorities. We understand the importance of being transparent about allergens present in our menu items to ensure a safe and enjoyable dining experience for all of our guests.
                </p>
                <p className="text-sm leading-relaxed text-gray-700 mb-4">
                  While we take every precaution to prevent cross-contamination, please be aware that our kitchen handles a variety of ingredients, and traces of allergens may be present in any dish.
                </p>
                <p className="text-sm leading-relaxed text-gray-700 mb-4">
                  If you have any allergies or dietary restrictions, please inform our staff before placing your order. Our team is committed to accommodating your needs and ensuring that your meal is prepared safely and to your satisfaction.
                </p>
                <p className="text-sm leading-relaxed text-gray-700 font-medium">
                  Thank you for choosing the Indian Feast. We look forward to serving you delicious, allergen-conscious dishes that cater to your unique preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
     <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-left">
            Featured Dishes
          </h2>
          <p className="text-xl text-gray-600 animate-slide-in-right">
            Discover our most popular and beloved dishes
          </p>
        </div>

        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-8 min-w-max">
            {featuredDishes.map((dish, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform w-80 flex-shrink-0 relative"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={dish.image[currentIndexes[index]]}
                    alt={dish.name}
                    className="w-full h-48 object-cover transition-all duration-300"
                  />

                  {/* Arrows only for multiple images */}
                  {dish.image.length > 1 && (
                    <>
                      <button
                        onClick={() => handlePrev(index)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => handleNext(index)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </>
                  )}
                </div>

                {/* Dish Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-600 mb-4">{dish.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-green-600">
                      {dish.price}
                    </span>
                    <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Order?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Reserve your table now for an unforgettable dining experience
          </p>
          <div className="space-x-4">
            <a
              href="/book-table"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Book a Table
            </a>
            <a
              href="/contact"
              className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
            >
              Call for Takeaway
            </a>
          </div>
        </div>
      </section>

      <DeliveryPlatforms />
    </div>
  );
};

export default Menu;
