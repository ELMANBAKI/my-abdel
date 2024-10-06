
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // استيراد ملف التنسيق

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">الصفحة الرئيسية</Link></li>
        <li><Link to="/about">عن المطعم</Link></li>
        <li><Link to="/booking">الحجز</Link></li>
      </ul>
    </nav>
  );
}
