import React from 'react';

const Location = () => {
  return (
    <div className="mb-20">
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Location<span className='underline underline-offset-4 decoration-1 under font-light'>Cluster</span></h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>
      <div className="map-responsive">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3963.9765216418414!2d106.7896091!3d-6.5246486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c3f3481f41c5%3A0x2e2849f745c37d05!2sEMERALD%20CILEBUT!5e0!3m2!1sid!2sid!4v1736501651692!5m2!1sid!2sid" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='Responsive Gogggle Maps'></iframe>
      </div>
    </div>
  );
};

export default Location;
