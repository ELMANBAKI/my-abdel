import React, { useReducer } from 'react';
import BookingPage from './BookingPage';

const initialTimes = ['12:00', '13:00', '14:00', '15:00']; // قم بتخصيص الأوقات كما تريد

function timeReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload; // تحديث الأوقات بناءً على التاريخ المحدد
    default:
      return state;
  }
}

export default function Main() {
  const [availableTimes, dispatch] = useReducer(timeReducer, initialTimes);

  const updateTimes = (newTimes) => {
    dispatch({ type: 'UPDATE_TIMES', payload: newTimes });
  };

  return (
    <div>
      <BookingPage availableTimes={availableTimes} updateTimes={updateTimes} />
    </div>
  );
}



