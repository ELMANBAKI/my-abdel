import React from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css';

export default function BookingPage({ availableTimes, updateTimes }) {
  return (
    <section className="booking-page">
      <h1>صفحة الحجز</h1>
      <p>نحن هنا لجعل تجربتك رائعة. يرجى ملء النموذج أدناه لحجز طاولتك.</p>
      <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </section>
  );
}
