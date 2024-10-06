import React from "react";
import CallToAction from "./CallToAction";
import Specializations from "./Specializations";
import CustomersSay from "./CustomersSay";
import Casablanca from "./Casablanca";
import "./HomePage.css"; // استيراد ملف التنسيق
 

export default function HomePage() {
  return (
    <main>
      <CallToAction />
      <Specializations />
      <Casablanca />
      <CustomersSay />
     
      
    </main>
  );
}
