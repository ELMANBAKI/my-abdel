import React from 'react';
import './CustomersSay.css'; // استيراد ملف التنسيق
export default function CustomersSay(params) {
   
   return (
    <section className="testimonials">
      <h2>ماذا يقول عملاؤنا؟</h2>
      <div className="customer-review">
        <img src="/page/Logo.png" alt="عميل 1" />
        <p>الطعام رائع! سأعود مرة أخرى.</p>
      </div>
      <div className="customer-review">
        <img src="/page/Little_Lemon_Restaurant_Scene.jpg" alt="عميل 2" />
        <p>الخدمة متميزة والجو جميل.</p>
      </div>
    </section>

    );
    
}
