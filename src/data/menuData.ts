export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
  isVegetarian?: boolean;
}

export interface MenuSubcategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  name: string;
  subcategories: MenuSubcategory[];
}

export const menuData: MenuCategory[] = [
  {
    id: 'indian-street-food',
    name: 'Indian Street Food',
    subcategories: [
      {
        id: 'indian-street-food',
        name: 'Indian Street Food',
        items: [
          { id: 'poppadams-dips', name: 'Poppadams Dips', description: 'Thin, wafers are expertly crafted from a blend of lentil or chickpea flour, and a shard of poppadom with chutneys.', price: '£2.99', isVegetarian: true },
          { id: 'masala-poppadams-dips', name: 'Masala Poppadams Dips', description: 'Crispy papad topped with a mixture of finely chopped onions, tomatoes, coriander leaves, and a sprinkle of authentic spices and served with chutneys.', price: '£3.49', isVegetarian: true },
          { id: 'pani-puris-shots', name: 'Pani Puris Shots', description: 'Crispy hollow puris filled with spiced chickpeas, served with four flavorful glasses of water: refreshing Mint, zesty Tangy, fiery Spicy, Sweet. A burst of in every bite!', price: '£4.49', isVegetarian: true },
          { id: 'vada-pav', name: 'Vada Pav', description: 'A Bombay classic street food! A soft, buttered bun stuffed with a golden-fried spicy potato vada, topped with tangy tamarind chutney, and zesty coriander chutney. A burst of flavor in every bite.', price: '£5.49', isVegetarian: true },
          { id: 'onion-bhajji', name: 'Onion Bhajji', description: 'Crispy, golden fritters made with thinly sliced onions and spiced chickpea flour batter. Each bite is a crunchy delight, served with cilantro aiole, tamarind and, mint for dipping. A must-try appetizer!', price: '£4.49', isVegetarian: true },
          { id: 'banana-fritters', name: 'Banana Fritters', description: 'Crispy fritters made with unripened bananas and chickpea flour, lightly spiced and fried to golden perfection. Served hot with cilantro aioli, mint. and tamarind for a delightful crunch in every bite!', price: '£5.49', isVegetarian: true },
          { id: 'aubergine-fritters', name: 'Aubergine Fritters', description: 'Crispy fritters are made with slices of Aubergine dipped in a spiced chickpea flour batter and fried to golden perfection. Finished with a drizzle of of our secret Indian feast masala, these savory bites are perfect as a snack or appetizer, served hot with cilantro aioli, tamarind, and mint dipping.', price: '£5.49', isVegetarian: true },
          { id: 'mirchi-fritters', name: 'Mirchi Fritters', description: 'Crispy deep-fried fritters made with large green chilies coated in a spiced gram flour batter. Each bite offers a delightful crunch, with a hint of spice. Perfect as a snack or appetizer, served hot with cilantro aioli, tamarind, and mint dipping.', price: '£ 5.99', isVegetarian: true },
          { id: 'poori-bhaji', name: 'Poori Bhaji', description: 'Soft, puffy puris served with a mildly spiced potato bhaji, sautéed with mustard seeds and aromatic spices. A comforting and flavorful classic!', price: '£6.49', isVegetarian: true },
          { id: 'chole-bhature', name: 'Chole Bhature', description: 'Two fluffy deeply-fried bhatures served with Spicy chickpeas simmered in a rich gravy served with. A flavorful and satisfying classic!', price: '£6.99', isVegetarian: true },
          { id: 'chicken-samosa', name: 'Chicken Samosa', description: 'Crispy, golden pastry filled with spiced minced chicken, herbs, and aromatic seasonings, perfectly fried for a savory and satisfying snack!', price: '£2.49', isVegetarian: false },
          { id: 'samosa', name: 'Samosa', description: 'Crispy, golden pastries filled with spiced potatoes and peas. Deep-fried to perfection and served hot with tangy chutney, and fried chilies -an irresistible snack!', price: '£2.49', isVegetarian: true },
          { id: 'samosa-chat', name: 'Samosa Chat', description: 'Crispy samosas, broken into pieces, topped with spiced chickpeas, creamy yogurt, tangy tamarind chutney, chopped onion, coriander, and crunchy sev.', price: '£5.49', isVegetarian: true },
          { id: 'aloo-tikki', name: 'Aloo Tikki', description: 'Crispy potato patties seasoned with spices shallow-fried to golden perfection. It is a delicious snack often served with chutney and salad.', price: '£3.99', isVegetarian: true },
          { id: 'aloo-tikki-chat', name: 'Aloo Tikki Chat', description: 'Crispy potato patties topped with spiced chickpeas, yogurt, and tangy chutneys. Garnished with sev and onions, it\'s a flavorful and satisfying snack!', price: '£5.49', isVegetarian: true }
        ]
      }
    ]
  },
  {
    id: 'dosas',
    name: 'Dosas',
    subcategories: [
      {
        id: 'dosa-items',
        name: 'Dosas',
        items: [
          { id: 'plain-dosa', name: 'Plain Dosa', description: 'A thin, crispy crepe made from fermented rice and urad dal batter, served with chutneys and sambar.', price: '£4.99', isVegetarian: true },
          { id: 'ghee-roast-dosa', name: 'Ghee Roast Dosa', description: 'Crispy dosa roasted in ghee for a rich flavour served with coconut chutney and sambar.', price: '£5.99', isVegetarian: true },
          { id: 'onion-dosa', name: 'Onion Dosa', description: 'Crispy dosa topped with finely chopped onions, served with chutneys and sambar.', price: '£4.99', isVegetarian: true },
          { id: 'egg-dosa', name: 'Egg Dosa', description: 'Crispy dosa topped with scrambled eggs, served with chutneys and sambar.', price: '£5.49', isVegetarian: true },
          { id: 'masala-dosa', name: 'Masala Dosa', description: 'Crispy dosa filled with spiced potato masala, served with coconut chutney and sambar.', price: '£6.49', isVegetarian: true },
          { id: 'ghee-masala-dosa', name: 'Ghee Masala Dosa', description: 'Crispy dosa roasted in ghee filled with spiced potato masala for added flavor. Typically served with coconut chutney and sambar, it\'s a delicious South Indian dish!', price: '£6.49', isVegetarian: true },
          { id: 'uttapam', name: 'Uttapam', description: 'A thick, spongy pancake made from fermented rice and urad dal batter, topped with vegetables. Served with coconut chutney and sambar.', price: '£6.99', isVegetarian: true },
          { id: 'street-pizza-dosa', name: 'Street Pizza Dosa', description: 'A fusion dish combining dosa with pizza toppings. Thick dosa base topped with tomato sauce, cheese, and chicken or veg curry.', price: '£7.49', isVegetarian: true }
        ]
      }
    ]

  },
  {
    id: 'fried-rice',
    name: 'Fried Rice',
    subcategories: [
      {
        id: 'fried-rice-items',
        name: 'Fried Rice',
        items: [
          {
            id: 'veg-fried-rice',
            name: 'Veg Fried Rice',
            description: 'A flavorful dish made with stir-fried rice, mixed vegetables, and a blend of savory sauces. A delicious and wholesome meal!',
            price: '£5.99',
            isVegetarian: true
          },
          {
            id: 'egg-fried-rice',
            name: 'Egg Fried Rice',
            description: 'A delicious twist on a classic, featuring stir-fried rice with fluffy scrambled eggs and a hint of authentic seasoning.',
            price: '£6.99',
            isVegetarian: true
          },
          {
            id: 'egg-schezwan-fried-rice',
            name: 'Egg Schezwan Fried Rice',
            description: 'A spicy Schezwan-style rice dish made with fluffy scrambled eggs, colorful vegetables, and bold Indo-Chinese flavors.',
            price: '£7.49',
            isVegetarian: true
          },
          
          {
            id: 'chicken-fried-rice',
            name: 'Chicken Fried Rice',
            description: 'Stir-fried rice with tender and crispy chicken pieces and mixed vegetables, seasoned with special Indian feast masala and garnished with green onions.',
            price: '£6.49',
            isVegetarian: false
          },
          {
            id: 'chicken-schezwan-fried-rice',
            name: 'Chicken Schezwan Fried Rice',
            description: 'A fiery fusion of stir-fried rice, tender chicken, and bold Schezwan sauce. A spicy kick to an Indo-Chinese favorite!',
            price: '£7.99',
            isVegetarian: false
          },
          {
            id: 'schezwan-fried-rice',
            name: 'Schezwan Fried Rice',
            description: 'A spicy and zesty rice dish cooked with Schezwan sauce, a blend of colorful vegetables, and aromatic spices.',
            price: '£6.49',
            isVegetarian: true
          }

        ]
      }
    ]

  },
  {
    id: 'staters',
    name: 'Staters',
    subcategories: [
      {
        id: 'staters',
        name: 'Staters',
        items: [
          {
            id: 'chilli-paneer',
            name: 'Chilli Paneer',
            description: 'Crispy paneer cubes tossed in a spicy, tangy sauce with bell peppers and onions.',
            price: '£7.49',
            isVegetarian: true
          },
          {
            id: 'panner-65',
            name: 'Paneer 65',
            description: 'Spicy, deep-fried paneer cubes marinated in a flavorful mixture.',
            price: '£7.99',
            isVegetarian: true
          },
          {
            id: 'panner-tikka',
            name: 'Paneer Tikka',
            description: 'Marinated paneer and vegetables grilled until charred, served with mint chutney.',
            price: '£7.99',
            isVegetarian: true
          },
          {
            id: 'paneer-manchuria',
            name: 'Paneer Manchuria',
            description: 'Crispy paneer cubes tossed in a sweet and spicy Manchurian sauce.',
            price: '£7.99',
            isVegetarian: true
          },
          {
            id: 'spring-rolls',
            name: 'Spring Rolls',
            description: 'Crispy rolls filled with shredded vegetables like cabbage, carrots, and bean sprouts, perfectly seasoned and deep-fried to golden perfection. Served with sweet chilli sauce.',
            price: '£4.49',
            isVegetarian: true
          },
          {
            id: 'panner-spring-rolls',
            name: 'Paneer Spring Rolls',
            description: 'Crispy rolls filled with shredded vegetables and crumbled paneer, perfectly seasoned and deep-fried to golden perfection. Served with sweet chilli sauce.',
            price: '£5.99',
            isVegetarian: true
          },
          {
            id: 'gobi-manchuria',
            name: 'Gobi Manchuria',
            description: 'Crispy cauliflower florets tossed in a spicy, sweet, and tangy sauce, seasoned with oriental flavors. A delicious Indo-Chinese classic served dry or with gravy.',
            price: '£6.99',
            isVegetarian: true
          },
          {
            id: 'veg-manchuria',
            name: 'Veg Manchuria',
            description: 'Crispy deep-fried vegetable balls tossed in a tangy, spicy sauce. A popular Indo-Chinese delicacy served dry or with gravy.',
            price: '£7.99',
            isVegetarian: true
          },
          {
            id: 'chicken-65',
            name: 'Chicken 65',
            description: 'Spicy, deep-fried chicken pieces marinated in yoghurt and spices, garnished with curry leaves, red spring onions and served with lemon.',
            price: '£8.49',
            isVegetarian: false
          },
          {
            id: 'chicken-lollipops',
            name: 'Chicken Lollipops',
            description: 'Crispy chicken wings shaped like lollipops, marinated and deep-fried.',
            price: '£8.99',
            isVegetarian: false
          },
          {
            id: 'chicken-majestic',
            name: 'Chicken Majestic',
            description: 'Deep-fried chicken strips tossed in a tangy, spicy sauce. A popular Indo-Chinese delicacy served dry or with gravy.',
            price: '£8.49',
            isVegetarian: false
          },
          {
            id: 'chilli-chicken',
            name: 'Chilli Chicken',
            description: 'Chilli chicken features fried chicken pieces tossed in a spicy, tangy sauce made with soy sauce, chilli sauce, and vegetables like onions and bell peppers.',
            price: '£8.49',
            isVegetarian: false
          },
          {
            id: 'chilli-prawns',
            name: 'Chilli Prawns',
            description: 'Succulent prawns tossed in a spicy, tangy sauce with onions, bell peppers, and Indo-Chinese seasonings.',
            price: '£8.99',
            isVegetarian: false
          },
        ]
      }
    ]

  },
  {
    id: 'curries',
    name: 'Curries',
    subcategories: [
      {
        id: 'curries',
        name: 'Curries',
        items: [
          {
            id: 'dal-tadka',
            name: 'Dal Tadka',
            description: 'Cooked lentils tempered with garlic, cumin, and mustard seeds. This hearty dish is a staple in Indian cuisine, perfect with rice or naan for a wholesome meal!',
            price: '£5.99',
            isVegetarian: true
          },
          {
            id: 'tomato-dal',
            name: 'Tomato Dal',
            description: 'Pigeon pea lentils cooked with tomatoes and spices.',
            price: '£6.49',
            isVegetarian: true
          },
          {
            id: 'palak-dal',
            name: 'Palak Dal',
            description: 'A wholesome blend of lentils and fresh spinach, seasoned with aromatic spices and tempered with garlic and cumin. Nutritious and comforting, perfect with rice or naan.',
            price: '£6.49',
            isVegetarian: true
          },
          {
            id: 'aloo-matar',
            name: 'Aloo Matar',
            description: 'Savory potatoes and sweet peas simmered in a spiced onion-tomato gravy, capturing the essence of comfort in a velvety sauce.',
            price: '£6.49',
            isVegetarian: true
          },
          {
            id: 'rajma',
            name: 'Rajma',
            description: 'Hearty kidney beans simmered in a spiced onion-tomato gravy, seasoned with cumin, garam masala, and aromatic herbs.',
            price: '£6.49',
            isVegetarian: true
          },
          {
            id: 'chana-masala',
            name: 'Chana Masala',
            description: 'Savor the bold flavors of tender chickpeas in a zesty tomato-onion gravy, spiced to perfection. A hearty and wholesome delight, best enjoyed with rice or naan!',
            price: '£6.49',
            isVegetarian: true
          },
          {
            id: 'aloo-masala',
            name: 'Aloo Masala',
            description: 'Tender Potatoes simmered in a fragrant coconut sauce with onions, tomatoes, and a blend of aromatic spices.',
            price: '£6.49',
            isVegetarian: true
          },
          {
            id: 'paneer-tikka-masala',
            name: 'Paneer Tikka Masala',
            description: 'Marinated paneer cubes grilled and simmered in a spiced onion and tomato gravy.',
            price: '£6.99',
            isVegetarian: true
          },
          {
            id: 'paneer-matar',
            name: 'Paneer Matar',
            description: 'Paneer and sweet peas simmered in a rich, mildly spiced, and creamy gravy. A comforting and flavorful classic enjoyed with rice or naan.',
            price: '£6.99',
            isVegetarian: true
          },
          {
            id: 'paneer-butter-masala',
            name: 'Paneer Butter Masala',
            description: 'Paneer cooked in a rich, buttery tomato gravy with spices and cream.',
            price: '£7.49',
            isVegetarian: true
          },
          {
            id: 'mix-veg-korma',
            name: 'Mix Veg Korma',
            description: 'Seasonal vegetables in a luscious coconut sauce, enriched with ghee and aromatic spices. Finished with a hint of cashew for a rich, melt-in-the-mouth experience.',
            price: '£7.49',
            isVegetarian: true
          },
          {
            id: 'egg-burji',
            name: 'Egg Burji',
            description: 'Scrambled eggs cooked with onions and spices.',
            price: '£6.49',
            isVegetarian: true
          },
          {
            id: 'chicken-curry',
            name: 'Chicken Curry',
            description: 'Succulent chicken simmered in a rich, spiced gravy made with onions and tomatoes.',
            price: '£6.79',
            isVegetarian: false
          },
          {
            id: 'chicken-saagwala',
            name: 'Chicken Saagwala',
            description: 'Tender chicken in a vibrant spinach gravy infused with aromatic spices for a flavorful experience.',
            price: '£7.49',
            isVegetarian: false
          },
          {
            id: 'chicken-tikka-masala',
            name: 'Chicken Tikka Masala',
            description: 'Succulent chicken tikka bathed in a velvety, spice-infused tomato sauce.',
            price: '£8.49',
            isVegetarian: false
          },
          {
            id: 'butter-chicken',
            name: 'Butter Chicken',
            description: 'Tender chicken in a creamy, buttery tomato sauce, rich with spices. A luscious indulgence that brings comfort and delight in every bite.',
            price: '£8.49',
            isVegetarian: false
          },
          {
            id: 'chicken-madras',
            name: 'Chicken Madras',
            description: 'Succulent chicken in a fiery curry! Tender chicken pieces simmered in a rich and spicy tomato-based sauce flavored with bold spices and aromatic curry leaves.',
            price: '£7.99',
            isVegetarian: false
          },
          {
            id: 'chicken-mughlai',
            name: 'Chicken Mughlai',
            description: 'A royal feast blending tender chicken with savory scrambled eggs, cashews, and flavorful lentils. Rich and satisfying in every bite!',
            price: '£7.49',
            isVegetarian: false
          },
          {
            id: 'kadai-chicken',
            name: 'Kadai Chicken',
            description: 'Tender chicken and bell peppers simmered in a spicy tomato-onion gravy infused with aromatic spices. A bold and flavorful dish perfect with naan or rice.',
            price: '£7.99',
            isVegetarian: false
          },
          {
            id: 'lamb-curry',
            name: 'Lamb Curry',
            description: 'Succulent lamb slow-cooked in a medley of bold spices and a rich, aromatic gravy. A hearty dish bursting with flavor.',
            price: '£8.49',
            isVegetarian: false
          },
          {
            id: 'lamb-rogan-josh',
            name: 'Lamb Rogan Josh',
            description: 'Tender lamb simmered in a luscious Kashmiri-inspired gravy, infused with fragrant whole spices and smoky paprika. A timeless and hearty classic.',
            price: '£8.99',
            isVegetarian: false
          },
          {
            id: 'kadai-lamb',
            name: 'Kadai Lamb',
            description: 'Spicy lamb cooked with bell peppers, onions, and aromatic spices in a rich tomato-onion gravy. Bold, rustic, and full of flavor.',
            price: '£8.99',
            isVegetarian: false
          },
          {
            id: 'lamb-madras',
            name: 'Lamb Madras',
            description: 'Tender lamb simmered in a rich, spiced sauce, delivering bold flavors and a delightful kick in every bite.',
            price: '£8.99',
            isVegetarian: false
          },

        ]
      }
    ]

  },
  {
    id: 'breads',
    name: 'Breads',
    subcategories: [
      {
        id: 'breads-items',
        name: 'Breads',
        items: [
          {
            id: 'plain-naan',
            name: 'Plain Naan',
            description: 'Plain naan is a soft, fluffy flatbread made from all-purpose flour, ideal for mopping up any immense. Perfect for pairing with curries!',
            price: '£1.49',
            isVegetarian: true
          },
          {
            id: 'garlic-naan',
            name: 'Garlic Naan',
            description: 'Garlic naan is a fragrant flatbread infused with roasted garlic and butter, offering a delightful aroma and flavor that elevates any meal to new heights.',
            price: '£1.79',
            isVegetarian: true
          },
          {
            id: 'butter-naan',
            name: 'Butter Naan',
            description: 'Butter naan is a soft, pillowy flatbread brushed with melted butter, offering a rich and indulgent flavor. Perfect for scooping up curries or enjoying on its own!',
            price: '£1.79',
            isVegetarian: true
          },
          {
            id: 'coriander-naan',
            name: 'Coriander Naan',
            description: 'Coriander naan is a soft, flavorful flatbread topped with fresh coriander and mild spices, adding a refreshing herbal note to any curry or gravy dish.',
            price: '£1.79',
            isVegetarian: true
          },
          {
            id: 'chapati',
            name: 'Chapati',
            description: 'Chapati is a soft, unleavened flatbread made from whole wheat flour. Thin and lightly cooked on a hot griddle, it’s a staple companion for curries and stews!',
            price: '£1.49',
            isVegetarian: true
          }
        ]
      }
    ]
  },
  {
    id: 'rice',
    name: 'Rice',
    subcategories: [
      {
        id: 'rice-items',
        name: 'Rice',
        items: [
          {
            id: 'steam-rice',
            name: 'Steam Rice',
            description: 'Steamed rice is a light and fluffy side dish, expertly cooked to enhance any meal. Its neutral and airy texture makes it the perfect accompaniment to curries, stir-fries, and more!',
            price: '£2.99',
            isVegetarian: true
          },
          {
            id: 'pulao-rice',
            name: 'Pulao Rice',
            description: 'Aromatic rice pilaf, a fragrant dish made with basmati rice and aromatic spices, offering a flavorful and colorful accompaniment to curries or enjoyed on its own.',
            price: '£3.99',
            isVegetarian: true
          },
          {
            id: 'green-peas-pulao',
            name: 'Green Peas Pulao',
            description: 'Vibrant rice dish where fluffy basmati rice meets sweet green peas and aromatic spices. This colorful, one-pot wonder is a deliciously simple way to elevate any meal!',
            price: '£3.99',
            isVegetarian: true
          },
          {
            id: 'biryani-rice',
            name: 'Biryani Rice',
            description: 'Fragrant spiced rice dish layered with rich flavors and aromatic herbs, capturing the spirit of India’s favorite meals or vegetable. Each bite is a celebration of taste and tradition!',
            price: '£4.99',
            isVegetarian: true
          },
          {
            id: 'jeera-rice',
            name: 'Jeera Rice',
            description: 'A fragrant dish featuring fluffy basmati rice tossed with cumin seeds, imparting a nutty and earthy flavor that perfectly complements any curry or dal. Simple yet delicious!',
            price: '£3.99',
            isVegetarian: true
          }
        ]
      }
    ]
  },
  {
    id: 'biryanis',
    name: 'Biryanis',
    subcategories: [
      {
        id: 'biryani-items',
        name: 'Biryanis',
        items: [
          {
            id: 'veg-dum-pot-biryani',
            name: 'Veg Dum Pot Biryani',
            description: 'Basmati rice flavored with mixed veggies and whole masala mix, served with mirchi ka salan and raita.',
            price: '£8.99',
            isVegetarian: true
          },
          {
            id: 'chicken-dum-pot-biryani',
            name: 'Chicken Dum Pot Biryani',
            description: 'Basmati rice flavored with chicken and whole masala mix, served with mirchi ka salan and raita.',
            price: '£9.49',
            isVegetarian: false
          },
          {
            id: 'lamb-dum-pot-biryani',
            name: 'Lamb Dum Pot Biryani',
            description: 'Basmati rice flavored with lamb and whole masala mix, served with mirchi ka salan and raita.',
            price: '£10.49',
            isVegetarian: false
          }
        ]
      }
    ]
  },
  {
    id: 'thaalis',
    name: 'Thaalis',
    subcategories: [
      {
        id: 'thaali-items',
        name: 'Thaalis',
        items: [
          {
            id: 'indian-feast-veg-thali',
            name: 'Indian Feast Veg Thali',
            description: 'Rice, naan, 3 curries, salad, samosa, and sweet — a complete vegetarian feast full of authentic flavors.',
            price: '£9.99',
            isVegetarian: true
          },
          {
            id: 'indian-feast-nonveg-thali',
            name: 'Indian Feast Non-Vegetarian Thali',
            description: 'Rice, naan, 3 non-veg curries, samosa, and sweet — a hearty and flavorful non-vegetarian meal experience.',
            price: '£12.99',
            isVegetarian: false
          }
        ]
      }
    ]
  },
  {
    id: 'burger-chips',
    name: 'Burger/Chips',
    subcategories: [
      {
        id: 'burger-chips-items',
        name: 'Burger/Chips',
        items: [
          {
            id: 'veg-burger',
            name: 'Veg Burger',
            description: 'A flavorful vegetable patty seasoned with spices served in a sesame seed bun with fresh lettuce, tomatoes, onions, and a tangy sauce. A perfect vegetarian treat and a healthy option.',
            price: '£4.99',
            isVegetarian: true
          },
          {
            id: 'chicken-fillet-burger',
            name: 'Chicken Fillet Burger',
            description: 'A juicy chicken fillet patty, topped with fresh lettuce and creamy mayo, served with chips and ketchup. A deliciously satisfying choice for any burger lover!',
            price: '£5.99',
            isVegetarian: false
          },
          {
            id: 'plain-chips',
            name: 'Plain Chips',
            description: 'Crispy, golden potato slices lightly salted for a simple yet irresistible crunch. A perfect side or snack for dipping!',
            price: '£2.99',
            isVegetarian: true
          },
          {
            id: 'masala-chips',
            name: 'Masala Chips',
            description: 'Crispy fries tossed in a medley of vibrant Indian spices, delivering a zesty twist on a classic snack. Perfectly addictive and bursting with flavor!',
            price: '£3.49',
            isVegetarian: true
          },
          {
            id: 'peri-peri-chips',
            name: 'Peri Peri Chips',
            description: 'Crispy fries seasoned with a zesty blend of Peri Peri spices, offering a fiery kick and a spicy twist to your snack!',
            price: '£3.49',
            isVegetarian: true
          },
          {
            id: 'chicken-nuggets',
            name: 'Chicken Nuggets (6 Pcs)',
            description: 'Golden, crispy bites of tender chicken, seasoned and fried to perfection. A beloved classic that makes every snack time a treat!',
            price: '£5.49',
            isVegetarian: false
          },
          {
            id: 'chicken-popcorn',
            name: 'Chicken Popcorn',
            description: 'Crispy, bite-sized chicken pieces, perfectly seasoned and fried to golden perfection. A deliciously addictive snack, perfect for dipping and sharing!',
            price: '£5.49',
            isVegetarian: false
          }
        ]
      }
    ]
  },
  {
    id: 'milk-shakes',
    name: 'Milk Shakes',
    subcategories: [
      {
        id: 'milk-shakes-items',
        name: 'Milk Shakes',
        items: [
          {
            id: 'lotus-biscoff-milk-shake',
            name: 'Lotus Biscoff Milk Shake',
            description: 'Creamy blend of Biscoff cookie and vanilla ice cream, topped with whipped cream and crushed cookies. A decadent treat that’s pure bliss!',
            price: '£4.99'
          },
          {
            id: 'kinder-bueno-shake',
            name: 'Kinder Bueno Shake',
            description: 'Creamy blend of vanilla ice cream and Kinder Bueno chocolate, topped with whipped cream and chocolate drizzle. A deliciously indulgent treat!',
            price: '£5.49'
          },
          {
            id: 'oreo-milk-shake',
            name: 'Oreo Milk Shake',
            description: 'A creamy blend of vanilla ice cream and crushed Oreo cookies, topped with whipped cream and extra Oreo crumble for a delightful mix of textures!',
            price: '£5.49'
          },
          {
            id: 'kit-kat-milk-shake',
            name: 'Kit Kat Milk Shake',
            description: 'A creamy blend of velvety vanilla ice cream and crunchy Kit Kat pieces, topped with whipped cream and chocolate drizzle. Pure bliss in a glass!',
            price: '£5.49'
          },
          {
            id: 'banana-milk-shake',
            name: 'Banana Milk Shake',
            description: 'A creamy swirl of ripe bananas and vanilla ice cream, topped with whipped cream. It’s a tropical delight in every sip!',
            price: '£4.99'
          },
          {
            id: 'strawberry-milk-shake',
            name: 'Strawberry Milk Shake',
            description: 'A luscious blend of fresh strawberries and creamy vanilla ice cream, topped with whipped cream. It’s a sweet burst of summer in every sip!',
            price: '£4.99'
          },
          {
            id: 'mango-milk-shake',
            name: 'Mango Milk Shake',
            description: 'A tropical delight of ripe mangoes and creamy vanilla ice cream blended to perfection. Topped with whipped cream for a refreshing escape in every sip!',
            price: '£5.49'
          },
          {
            id: 'mango-lassi',
            name: 'Mango Lassi',
            description: 'A creamy blend of ripe mangoes and yogurt, sweetened to perfection. A refreshing drink with a tropical escape in every sip!',
            price: '£5.99'
          },
          {
            id: 'rajahmundry-rose-milk',
            name: 'Rajahmundry Rose Milk',
            description: 'A creamy fusion of vanilla ice cream and delicate rose syrup, crowned with velvety whipped cream. A sip of romance and refreshment blooming with flavor!',
            price: '£5.49'
          }
        ]
      }
    ]
  },
  {
    id: 'salads',
    name: 'Salads',
    subcategories: [
      {
        id: 'salads-items',
        name: 'Salads',
        items: [
          {
            id: 'caesar-salad',
            name: 'Caesar Salad',
            description: 'Parmesan cheese, croutons, Caesar dressing, with baby gem and iceberg lettuce.',
            price: '£3.49'
          },
          {
            id: 'onion-salad',
            name: 'Onion Salad',
            description: 'Sliced onions with a squeeze of lemon - a simple and refreshing side dish.',
            price: '£1.49'
          },
          {
            id: 'vegetable-salad',
            name: 'Vegetable Salad',
            description: 'A fresh mix of cucumber, onion, lemon, and carrot - light, crisp, and healthy.',
            price: '£2.49'
          }
        ]
      }
    ]
  },
  {
    id: 'tea',
    name: 'Tea',
    subcategories: [
      {
        id: 'tea-items',
        name: 'Tea',
        items: [
          {
            id: 'bombay-chai',
            name: 'Bombay Chai',
            description: 'An aromatic infusion of bold black tea leaves, creamy milk, fragrant spices like cardamom and ginger, and a hint of lemongrass. Available with 4 Osmania biscuits at an extra £1 on top of chai.',
            price: '£1.99'
          },
          {
            id: 'green-tea',
            name: 'Green Tea',
            description: '',
            price: '£1.99'
          },
          {
            id: 'herbal-tea',
            name: 'Herbal Tea',
            description: '',
            price: '£1.99'
          },
          {
            id: 'lemon-tea',
            name: 'Lemon Tea',
            description: '',
            price: '£1.99'
          },
          {
            id: 'english-tea',
            name: 'English Tea',
            description: '',
            price: '£1.99'
          }
        ]
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    subcategories: [
      {
        id: 'dessert-items',
        name: 'Desserts',
        items: [
          {
            id: 'gulab-jamun',
            name: 'Gulab Jamun',
            description: 'Tender, syrup-soaked balls made from milk solids, delicately flavored with cardamom and rose water. Each bite is a sweet, floral delight that melts in your mouth!',
            price: '£1.99'
          },
          {
            id: 'carrot-halwa',
            name: 'Carrot Halwa',
            description: 'A warm, sweet treat made from grated carrots simmered in milk and sugar, with aromatic cardamom. Topped with crunchy nuts, it\'s a cozy dessert that melts in your mouth!',
            price: '£2.99'
          },
          {
            id: 'kala-jamun',
            name: 'Kala Jamun',
            description: 'Rich, dark balls made from khoya and paneer, deep-fried to perfection and soaked in fragrant sugar syrup. Each bite is a luscious blend of crispy and soft textures, featuring favorite flavors.',
            price: '£2.49'
          },
          {
            id: 'gulab-jamun-with-ice-cream-scoop',
            name: 'Gulab Jamun with Ice Cream Scoop',
            description: '',
            price: '£3.99'
          },
          {
            id: 'chocolate-scoop',
            name: 'Chocolate Ice Cream(2scoops)',
            description: 'Classic creamy chocolate-flavored ice cream. (3 scoops)',
            price: '£2.49'
          },

          {
            id: 'vanilla-scoop',
            name: 'Vanilla Ice Cream(2scoops)',
            description: 'Classic creamy vanilla-flavored ice cream. (3 scoops)',
            price: '£2.49'
          },
          {
            id: 'strawberry-scoop',
            name: 'Strawberry Ice Cream(2scoops)',
            description: 'Classic creamy strawberry-flavored ice cream. (3 scoops)',
            price: '£2.49'
          }
        ]
      }
    ]
  },
  {
    id: 'kids-menu',
    name: 'Kids Menu',
    subcategories: [
      {
        id: 'kids-menu-items',
        name: 'Kids Menu',
        items: [
          {
            id: 'chicken-nuggets-with-fries-and-drink',
            name: 'Chicken Nuggets with Fries and Drink', 
            description: '', 
            price: '£5.99',
            isVegetarian: false
          },
          {
            id: 'chicken-popcorn-with-fries-and-drink',
            name: 'Chicken Popcorn with Fries and Drink', 
            description: '', 
            price: '£5.99',
            isVegetarian: false
          },
          {
            id: 'chicken-steak-burger-with-fries-and-drink',
            name: 'Chicken Steak Burger with Fries and Drink', 
            description: '', 
            price: '£5.99',
            isVegetarian: false
          }
        ]
      }
    ]
  }
];
