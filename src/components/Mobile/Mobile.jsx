// src/components/Mobile/Mobile.jsx
import React from 'react';
import MobileHeader from './MobileHeader';
import MobileHero from './MobileHero';
import NotifyForm from './NotifyForm';

import MobileLogoCard from './MobileLogoCard';


export default function Mobile() {
  return (
    <div className="bg-white text-black">
      <MobileHeader />
      <MobileHero />
      <MobileLogoCard/>
      <NotifyForm />

    </div>
  );
}
