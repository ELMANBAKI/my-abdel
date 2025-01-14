import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={[]} updateTimes={() => {}} />);
  const headingElement = screen.getByText("احجز طاولتك الآن");
  expect(headingElement).toBeInTheDocument();
});
