import React from "react";
import HomeBanner from "../components/HomeBanner";
import FoodList from '../components/FoodList'
import HomeLastSection from "../components/HomeLastSection";

export default function Home() {
  
  return (
    <div className="px-3">
      <HomeBanner />
      <FoodList />
      <HomeLastSection />
    </div>
  )
}
