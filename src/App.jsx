import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import PlanRates from './components/PlanRates';
import SignInPage from './components/SignInPage';
import BusinessPage from "./components/Business/Business";
import MobilePage from "./components/Mobile/Mobile";

export default function App() {
  const location = useLocation();

  // Check if the route is business page
  const isBusiness = location.pathname.startsWith('/business');

  return (
    <div className="App flex flex-col min-h-screen">
      {/* Only show main header/footer if not on business route */}
      {!isBusiness && <Header />}

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PlanRates />
              <Features />
            </>
          }
        />

        {/* Sign In Page */}
        <Route path="/signin" element={<SignInPage />} />

        {/* Business Page with its own components */}
        <Route path="/business/*" element={<BusinessPage />} />

        <Route path="/mobile" element={<MobilePage />} />


    
      </Routes>

      {/* Only show footer if not business */}
      {!isBusiness && <Footer />}

    </div>
  );
}
