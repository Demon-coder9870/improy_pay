export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Country {
  name: string;
  flag: string;
  code: string;
  currency: string;
  rate?: number;
}

export interface Testimonial {
  id: number;
  name: string;
  country: string;
  flag: string;
  avatar: string;
  rating: number;
  review: string;
  amount?: string;
  destination?: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface ExchangeRate {
  from: string;
  to: string;
  rate: number;
  fee: number;
  deliveryTime: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface SecurityFeature {
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}
