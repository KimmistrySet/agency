import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-09-30.clover',
});

// TinkerBot Pricing Plans
export const PRICING_PLANS = {
  free: {
    name: 'Free',
    price: 0,
    credits: 100,
    features: ['Basic bots', 'Limited API calls', 'Community support'],
  },
  basic: {
    name: 'Basic',
    price: 29,
    credits: 1000,
    features: ['All basic bots', '1000 API calls/month', 'Email support'],
    stripePriceId: 'price_basic_monthly',
  },
  professional: {
    name: 'Professional', 
    price: 99,
    credits: 5000,
    features: ['All bots', '5000 API calls/month', 'Priority support', 'Analytics'],
    stripePriceId: 'price_professional_monthly',
  },
  enterprise: {
    name: 'Enterprise',
    price: 299,
    credits: 20000,
    features: ['All bots', 'Unlimited API calls', 'Dedicated support', 'Custom integrations'],
    stripePriceId: 'price_enterprise_monthly',
  },
} as const;

export type PricingPlan = keyof typeof PRICING_PLANS;

