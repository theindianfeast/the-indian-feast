// import React, { useState } from 'react';
// import NestedMenuDropdown from '../components/NestedMenuDropdown';
// import { MenuItem } from '../data/menuData';

// const MenuDemo = () => {
//   const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

//   const handleItemSelect = (item: MenuItem) => {
//     setSelectedItem(item);
//   };

//   const getSpiceColor = (spice: string) => {
//     switch (spice) {
//       case 'Mild': return 'text-green-600';
//       case 'Medium': return 'text-yellow-600';
//       case 'Hot': return 'text-orange-600';
//       case 'Very Hot': return 'text-red-600';
//       default: return 'text-gray-600';
//     }
//   };

//   return (
//     <div className="min-h-screen bg-yellow-50 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Interactive Menu Demo</h1>
//           <p className="text-xl text-gray-600 mb-8">
//             Try our new nested dropdown menu system - browse by category and subcategory
//           </p>
          
//           {/* Menu Dropdown */}
//           <div className="flex justify-center mb-8">
//             <NestedMenuDropdown 
//               onItemSelect={handleItemSelect}
//               className="inline-block"
//             />
//           </div>
//         </div>

//         {/* Selected Item Display */}
//         {selectedItem && (
//           <div className="max-w-2xl mx-auto">
//             <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500">
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-2xl font-bold text-gray-900">Selected Item</h2>
//                 <div className="flex items-center">
//                   <div className={`w-3 h-3 rounded-full mr-2 ${
//                     selectedItem.isVegetarian ? 'bg-green-500' : 'bg-red-500'
//                   }`}></div>
//                   <span className="text-sm font-medium text-gray-600">
//                     {selectedItem.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
//                   </span>
//                 </div>
//               </div>
              
//               <div className="space-y-4">
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedItem.name}</h3>
//                   {selectedItem.description && (
//                     <p className="text-gray-600 mb-3">{selectedItem.description}</p>
//                   )}
//                 </div>
                
//                 <div className="flex items-center justify-between">
//                   {selectedItem.price && (
//                     <div className="text-2xl font-bold text-green-600">{selectedItem.price}</div>
//                   )}
//                   {selectedItem.spiceLevel && (
//                     <div className="flex items-center">
//                       <span className="text-sm text-gray-500 mr-2">Spice Level:</span>
//                       <span className={`font-medium ${getSpiceColor(selectedItem.spiceLevel)}`}>
//                         🌶️ {selectedItem.spiceLevel}
//                       </span>
//                     </div>
//                   )}
//                 </div>
                
//                 <div className="pt-4 border-t border-gray-200">
//                   <button className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-green-700 transition-colors">
//                     Add to Order
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Instructions */}
//         {!selectedItem && (
//           <div className="max-w-2xl mx-auto text-center">
//             <div className="bg-white rounded-lg shadow-md p-8">
//               <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Use</h3>
//               <div className="space-y-3 text-left">
//                 <div className="flex items-start">
//                   <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
//                     <span className="text-green-600 text-sm font-bold">1</span>
//                   </div>
//                   <p className="text-gray-600">Click "Browse Menu" to open the dropdown</p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
//                     <span className="text-yellow-600 text-sm font-bold">2</span>
//                   </div>
//                   <p className="text-gray-600">Choose between Vegetarian or Non-Vegetarian</p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
//                     <span className="text-orange-600 text-sm font-bold">3</span>
//                   </div>
//                   <p className="text-gray-600">Select a subcategory (Starters, Main Course, etc.)</p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
//                     <span className="text-red-600 text-sm font-bold">4</span>
//                   </div>
//                   <p className="text-gray-600">Click on any item to see its details</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MenuDemo;