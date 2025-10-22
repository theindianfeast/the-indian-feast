import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, Award, Camera, Quote } from 'lucide-react';
import review_1 from './../../public/review_1.png';
import review_2 from './../../public/review_2.png';
import review_3 from './../../public/review_3.png';
import gallery_1 from './../../public/gallery_1.jpeg';
import gallery_2 from './../../public/gallery_8.jpg';
import gallery_3 from './../../public/gallery_9.jpg';
import gallery_4 from './../../public/gallery_10.jpg';
import gallery_5 from './../../public/gallery_5.webp';
import gallery_6 from './../../public/gallery_6.webp';
import gallery_7 from './../../public/gallery_7.webp';
import gallery_11 from './../../public/gallery_11.jpg';
import gallery_12 from './../../public/gallery_12.jpg';
import DeliveryPlatforms from '../components/DeliveryPlatforms';
import home from './../../public/home.jpeg';

const Home = () => {
  const galleryImages = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
    gallery_11,
    gallery_12
  ];

  const testimonials = [

    {
      name: "Fathima Ismail",
      text: "Overall a 5 Star experience The food - it was a tasty food, with an authentic touch. Portion sizes were good Service - great service however we had to wait very long for the food to arrive but they were extremely apologetic about it The atmosphere was nice small Resturnat but clean Toilet was clean also Drinks were good maybe they could do some traditional cold drinks in summer Good price - reasonable We had the thali, dosa, lamb curry, Homaby chai It was really a good experince and would recommend Meal type Dinner Price per person £40–50 Food: 4 Service: 5 Atmosphere: 5 Noise level Quiet, easy to talk Wait time No wait Recommendation for vegetarians Highly recommend Vegetarian offerings Clearly labeled vegetarian dishes Dietary restrictions Halal option is available but not stated on the website (check with staff and on the door) Parking space Plenty of parking Parking options Free street parking",
      image: review_3,
      rating: 5
    },
    {
      name: "Lally",
      text: "I had an incredible dining experience that truly reminded me of home in India. Our group of 10 tried a variety of dishes, and each one was absolutely delightful. The Non-Veg Thali is a must try authentic and bursting with flavors. For starters, the Chicken Lollipop was heavenly and melted my heart. The Pani Puri tasted just like it came straight from an Indian street vendor so authentic and refreshing. The food was not only delicious but also hygienic. I highly recommend this place for anyone wanting to experience the best of Indian cuisine. “Happy feasting.” Service: Dine in. Meal type: Dinner. Price per person: £30–40. Food: 5. Service: 5. Atmosphere: 5. Recommended dishes: Gulab Jamun with Ice Cream Scoop, Mirchi Bajji, Biryani, Non Veg Thali. Recommendation for vegetarians: Highly recommend. Vegetarian offerings: Large vegetarian selection, Clearly labeled vegetarian dishes.",
      image: review_1,
      rating: 5
    },
    {
      name: "Andy Twigg.",
      text: "I have now eaten at this authentic Indian Restaraunt 4 times. Last night I had the pleasure of meeting one of the owners and the Chef. Front of house was great and super friendly as always. We had Onion Dosa and an Onion Bhaji for starter. The Bhaji was wonderful, not a slight drop of oil, just crispy Bhaji. The onion Dosa was served with 4 Sambals, all beautiful flavoured. We had Butter Chiken and Butter Paneer for mains with rice and 2 amazing garlic naans, the crispy type, not the thick dough ones. Mains were super rich tasting and zero oil, Indian Cusine like I experienced on my Indian travels. 100% recommend. Thank you for another wonderful evening. Meal type Dinner Price per person £10–20 Food: 5 Service: 5 Atmosphere: 5 Noise level Quiet, easy to talk Group size 2 people Recommendation for vegetarians Highly recommend Vegetarian offerings Large vegetarian selection Parking space Plenty of parking Parking options Free street parking",
      image: review_2,
      rating: 5
    }
  ];

  return (
    <div className="relative">
      <div className="fixed bottom-4 right-4 z-40">
        <img
          src="/halal.png"
          alt="Halal Certified"
          className="w-16 h-16 md:w-20 md:h-20 opacity-70 hover:opacity-90 transition-opacity duration-300 drop-shadow-lg"
        />
      </div>

      <div>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img
              src={home}
              alt="The Indian Feast"
              className="w-full h-full object-cover"
              style={{
                objectPosition: 'center center'
              }}
            />
            <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4 w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-in-left">
              The Indian Feast
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-in-right">
              Experience the authentic flavors of India in the heart of London
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-slide-in-up">
              <Link
                to="/menu"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors transform hover:scale-105"
              >
                View Menu
              </Link>
              <Link
                to="/book-table"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors transform hover:scale-105"
              >
                Book Table
              </Link>
              <button
                onClick={() => {
                  document.getElementById('order-online')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors transform hover:scale-105"
              >
                Order Now
              </button>
            </div>

          </div>
        </section>

        {/* Features Section */}
        {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-left">Why Choose Us</h2>
            <p className="text-xl text-gray-600 animate-slide-in-right">Experience the difference that makes us special</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center animate-slide-in-left">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">100% Halal</h3>
              <p className="text-gray-600">All our meat is certified Halal for your peace of mind</p>
            </div>
            <div className="text-center animate-slide-in-right">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">5 Star Rating</h3>
              <p className="text-gray-600">Consistently rated as the best Indian restaurant in London</p>
            </div>
            <div className="text-center animate-slide-in-left">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Daily</h3>
              <p className="text-gray-600">All dishes prepared fresh daily with authentic spices</p>
            </div>
            <div className="text-center animate-slide-in-right">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Recipes</h3>
              <p className="text-gray-600">Traditional recipes passed down through generations</p>
            </div>
          </div>
        </div>
      </section> */}

        {/* Gallery Section */}
        <section className="py-16 bg-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Camera className="h-8 w-8 text-yellow-600 mr-3" />
                <h2 className="text-4xl font-bold text-gray-900 animate-slide-in-left">Our Gallery</h2>
              </div>
              <p className="text-xl text-gray-600 animate-slide-in-right">A visual feast of our delicious creations</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Camera className="h-8 w-8 mx-auto" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12 animate-slide-in-up">
              <Link
                to="/menu"
                className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors transform hover:scale-105"
              >
                View Our Menu
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Quote className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-4xl font-bold text-gray-900 animate-slide-in-left">What Our Guests Say</h2>
              </div>
              <p className="text-xl text-gray-600 animate-slide-in-right">Real experiences from our valued customers</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}
                >
                  <div className="flex flex-col items-start mb-4">
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 border-2 border-green-500"
                      />
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    </div>
                    {/* Star Rating */}
                    <div className="flex mt-2 ml-14">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>

                  </div>

                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div id="order-online">
          <DeliveryPlatforms />
        </div>

      </div>
    </div>
  );
};

export default Home;
