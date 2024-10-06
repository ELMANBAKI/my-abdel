import React, { useState } from 'react';
import './BookingForm.css';

export default function BookingForm({ availableTimes, updateTimes }) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // معالجة البيانات عند إرسال النموذج
    console.log(`اسم العميل: ${name}, تاريخ الحجز: ${date}, الوقت: ${time}, عدد الضيوف: ${guests}`);
    // إعادة تعيين الحقول
  setName('');
  setDate('');
  setTime('');
  setGuests(1); // تعيين عدد الضيوف إلى 1 (أو القيمة الافتراضية التي ترغب فيها)
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>احجز طاولتك الآن</h2>
      <label>
        الاسم:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        تاريخ الحجز:
        <input
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            updateTimes(availableTimes); // تحديث الأوقات عند تغيير التاريخ
          }}
          required
        />
      </label>
      <label>
        الوقت:
        <select value={time} onChange={(e) => setTime(e.target.value)} required>
          {availableTimes.map((availableTime, index) => (
            <option key={index} value={availableTime}>
              {availableTime}
            </option>
          ))}
        </select>
      </label>
      <label>
        عدد الضيوف:
        <input
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
          required
        />
      </label>
      <button type="submit">احجز الآن</button>
    </form>
  );
}
