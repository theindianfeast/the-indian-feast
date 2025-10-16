import React from 'react';

const DeliveryPlatforms: React.FC = () => {
  const platforms = [
    {
      name: 'Uber Eats',
      url: 'https://www.ubereats.com/gb/store/the-indian-feast/zUU_v4WCVHiTaMpaImj9Qg?srsltid=AfmBOooCioImPIIeM259lS0o07rWLQqPwgCUAdGsFjscEn4OrAE1QhjN',
      gradient: 'from-green-500 to-green-600',
      hoverGradient: 'hover:from-green-600 hover:to-green-700'
    },
    {
      name: 'Deliveroo',
      url: 'https://deliveroo.co.uk/menu/Leeds/burley-park-and-hyde-park/the-indian-feast-hea-62-brudnel-road?srsltid=AfmBOooJ-X0tmHZxixn5ncbcUKWGl3W9qrcMTGsaY-a0jvMMbAcSPR_S',
      gradient: 'from-cyan-400 to-cyan-600',
      hoverGradient: 'hover:from-cyan-500 hover:to-cyan-700'
    },
    {
      name: 'Just Eat',
      url: 'https://www.just-eat.co.uk/restaurants-the-indian-feast-meanwood/menu',
      gradient: 'from-orange-500 to-orange-600',
      hoverGradient: 'hover:from-orange-600 hover:to-orange-700'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-3">Order Online</h2>
          <p className="text-slate-600 text-lg">Enjoy The Indian Feast from the comfort of your home</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-gradient-to-r ${platform.gradient} ${platform.hoverGradient} text-white font-semibold py-4 px-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl text-center`}
            >
              <span className="relative z-10 text-lg">{platform.name}</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"></div>
            </a>
          ))}
        </div>

        <div className="text-center mt-6">
          <p className="text-slate-500 text-sm">Available for delivery and collection</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPlatforms;
