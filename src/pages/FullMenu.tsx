import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { menuData, MenuItem } from '../data/menuData';
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

interface FlatMenuItem extends MenuItem {
    categoryName: string;
    subcategoryName: string;
    categoryId: string;
    subcategoryId: string;
}

const FullMenu = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState<FlatMenuItem[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    const flatMenuItems: FlatMenuItem[] = menuData.flatMap(category =>
        category.subcategories.flatMap(subcategory =>
            subcategory.items.map(item => ({
                ...item,
                categoryName: category.name,
                subcategoryName: subcategory.name,
                categoryId: category.id,
                subcategoryId: subcategory.id
            }))
        )
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (searchQuery.trim().length > 0) {
            const filtered = flatMenuItems.filter(item =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description?.toLowerCase().includes(searchQuery.toLowerCase())
            ).slice(0, 8);
            setSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [searchQuery]);

    const scrollToItem = (itemId: string) => {
        const element = document.getElementById(itemId);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            element.classList.add('highlight-item');
            setTimeout(() => {
                element.classList.remove('highlight-item');
            }, 2000);
        }
        setSearchQuery('');
        setShowSuggestions(false);
    };

    const VegIcon = () => (
        <div className="inline-flex items-center justify-center w-5 h-5 border-2 border-green-600 flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
        </div>
    );

    const NonVegIcon = () => (
        <div className="inline-flex items-center justify-center w-5 h-5 border-2 border-red-600 flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
        </div>
    );

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

    return (
        <div className="min-h-screen bg-gray-50">
            <section
                className="relative py-10 md:py-14 bg-center bg-cover bg-no-repeat"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                        Explore our authentic Indian cuisine with traditional recipes and finest spices
                    </p>
                </div>

                <div className="relative z-10 max-w-2xl mx-auto mt-6" ref={searchRef}>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search for dishes... (e.g., Biryani, Paneer, Chicken)"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => searchQuery && setShowSuggestions(true)}
                            className="w-full pl-12 pr-12 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base md:text-lg"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setShowSuggestions(false);
                                }}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}
                    </div>

                    {showSuggestions && suggestions.length > 0 && (
                        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 max-h-96 overflow-y-auto">
                            {suggestions.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToItem(item.id)}
                                    className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                                >
                                    <div className="flex items-start gap-3">
                                        {item.isVegetarian !== undefined && (
                                            <div className="mt-1">
                                                {item.isVegetarian ? <VegIcon /> : <NonVegIcon />}
                                            </div>
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <div className="font-semibold text-gray-900">{item.name}</div>
                                            <div className="text-sm text-gray-500 truncate">
                                                {item.categoryName}
                                            </div>
                                            {item.description && (
                                                <div className="text-sm text-gray-600 line-clamp-1 mt-1">
                                                    {item.description}
                                                </div>
                                            )}
                                        </div>
                                        {item.price && (
                                            <div className="text-green-600 font-semibold whitespace-nowrap">
                                                {item.price}
                                            </div>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}

                    {showSuggestions && suggestions.length === 0 && searchQuery && (
                        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 text-center text-gray-500">
                            No items found matching "{searchQuery}"
                        </div>
                    )}
                </div>
            </section>

            {/* Animated Category Scroll Bar */}
            <section className="relative overflow-hidden py-4 bg-gradient-to-r from-yellow-700 via-yellow-600 to-amber-600 shadow-md">
                {/* Left & Right blur fades */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-yellow-700 to-transparent pointer-events-none blur-md"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-amber-600 to-transparent pointer-events-none blur-md"></div>

                {/* Scrolling container */}
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-6 px-8 whitespace-nowrap animate-scroll">
                        {menuData.concat(menuData).map((category, index) => (
                            <button
                                key={category.id + '-' + index}
                                onClick={() => {
                                    const element = document.getElementById(category.id);
                                    if (element) {
                                        const offset = 120; // Adjust for sticky navbar
                                        const topPos = element.getBoundingClientRect().top + window.scrollY - offset;
                                        window.scrollTo({ top: topPos, behavior: 'smooth' });
                                    }
                                }}
                                className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-2 rounded-full border border-white/30 backdrop-blur-md transition-all duration-300"
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>



            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {menuData.map((category) => (
                        <div key={category.id} id={category.id} className="mb-12 md:mb-16 scroll-mt-32">

                            <div className="mb-6 md:mb-8 pb-4 border-b-4 border-yellow-600">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                    {category.name}
                                </h2>
                            </div>

                            {category.subcategories.map((subcategory) => (
                                <div key={subcategory.id} className="mb-8 md:mb-12">

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                        {subcategory.items.map((item) => (
                                            <div
                                                key={item.id}
                                                id={item.id}
                                                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-6 border border-gray-200"
                                            >
                                                <div className="flex items-start gap-3 mb-3">
                                                    {item.isVegetarian !== undefined && (
                                                        <div className="mt-1">
                                                            {item.isVegetarian ? <VegIcon /> : <NonVegIcon />}
                                                        </div>
                                                    )}
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                                                            {item.name}
                                                        </h4>
                                                        {item.price && (
                                                            <p className="text-lg md:text-xl font-bold text-green-600">
                                                                {item.price}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>

                                                {item.description && (
                                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-yellow-300">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-yellow-600 to-amber-600 text-white p-6 flex items-center">
                            <div className="w-3 h-3 bg-yellow-300 rounded-full mr-3 animate-pulse"></div>
                            <h2 className="text-2xl font-bold tracking-wide">ALLERGENS NOTICE</h2>
                        </div>

                        {/* Content */}
                        <div className="p-8 bg-gradient-to-b from-white to-amber-50">
                            <div className="border-l-4 border-yellow-500 pl-6">
                                <p className="text-gray-700 text-base leading-relaxed mb-4">
                                    At the Indian Feast, your health and safety are our top priorities. We understand the importance of being transparent about allergens present in our menu items to ensure a safe and enjoyable dining experience for all of our guests.
                                </p>
                                <p className="text-gray-700 text-base leading-relaxed mb-4">
                                    While we take every precaution to prevent cross-contamination, please be aware that our kitchen handles a variety of ingredients, and traces of allergens may be present in any dish.
                                </p>
                                <p className="text-gray-700 text-base leading-relaxed mb-4">
                                    If you have any allergies or dietary restrictions, please inform our staff before placing your order. Our team is committed to accommodating your needs and ensuring that your meal is prepared safely and to your satisfaction.
                                </p>
                                <p className="text-gray-800 font-medium text-base leading-relaxed">
                                    Thank you for choosing <span className="font-semibold text-yellow-700">The Indian Feast</span>. We look forward to serving you delicious, allergen-conscious dishes that cater to your unique preferences.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

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
                                            {/* <button className="bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition-colors">
                                                Order Now
                                            </button> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <DeliveryPlatforms />

            <style>{`
        @keyframes highlight {
          0%, 100% { background-color: white; }
          50% { background-color: #fef3c7; }
        }

        .highlight-item {
          animation: highlight 1s ease-in-out 2;
          border-color: #eab308 !important;
          box-shadow: 0 0 0 3px rgba(234, 179, 8, 0.3);
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 2rem;
          }

          .text-base {
            font-size: 0.875rem;
          }
        }
          @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .animate-scroll {
      display: inline-flex;
      animation: scroll 30s linear infinite;
      will-change: transform;
    }

    .animate-scroll:hover {
      animation-play-state: paused;
    }

    /* Hide scrollbar visually but keep scroll functionality */
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;     /* Firefox */
    }

      `
            }</style>
        </div>
    );
};

export default FullMenu;
