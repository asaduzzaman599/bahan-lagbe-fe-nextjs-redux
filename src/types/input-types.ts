export type LoginInputValue = {
  id: string;
  password: string;
};
export type signupInputValue = {
  name: string;
  email: string;
  password: string;
  contactNo: string;
  address?: string
  profileImg?: string
  role?: string
};

export enum BookingStatus {
  PENDING = 'PENDING',
  BOOKED = 'BOOKED',
  CANCELLED = 'CANCELLED',
  REJECT = 'REJECT',
  COMPLETED = 'COMPLETED',
}
