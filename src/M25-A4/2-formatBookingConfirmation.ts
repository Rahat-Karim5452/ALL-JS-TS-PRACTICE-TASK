interface Booking {
  name: string;
  guests: number;
  time: string;
}

const formatBookingConfirmation = (booking: Booking): string => {
  //   console.log(booking);
  const { name, guests, time } = booking;
  return `${name}'s table for ${guests} guests is confirmed at ${time}.`;
};
const booking1 = { name: "Aisha", guests: 4, time: "7:00 PM" };
const booking2 = { name: "Rahim", guests: 2, time: "8:30 PM" };
// formatBookingConfirmation(booking1);
console.log(formatBookingConfirmation(booking1));
console.log(formatBookingConfirmation(booking2));
