import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - HiOps',
  description: 'Flexible pricing plans for Kubernetes cost optimization with HiOps.',
};

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  billing: string;
  features: string[];
  cta: string;
  ctaLink: string;
  highlighted: boolean;
}

const plans: PricingPlan[] = [
  {
    name: 'Free',
    description: 'For small teams and personal projects',
    price: '$0',
    billing: 'forever',
    features: [
      'Connect 1 Kubernetes cluster',
      'Cost monitoring and reports',
      'Basic cost optimization recommendations',
      'Community support',
      '1-day data retention',
    ],
    cta: 'Get started',
    ctaLink: '/signup',
    highlighted: false,
  },
  {
    name: 'Pro',
    description: 'For growing teams with multiple clusters',
    price: '$199',
    billing: 'per month',
    features: [
      'Connect up to 5 Kubernetes clusters',
      'Advanced cost optimization',
      'Spot instance automation',
      'Node auto-scaling',
      'Email support',
      '30-day data retention',
      'Custom policies',
    ],
    cta: 'Start free trial',
    ctaLink: '/signup?plan=pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For organizations with complex requirements',
    price: 'Custom',
    billing: 'contact sales',
    features: [
      'Unlimited Kubernetes clusters',
      'Enterprise-grade security',
      'Multi-cloud management',
      'Dedicated account manager',
      'SLA guarantees',
      '1-year data retention',
      'Custom integrations',
      'On-premise deployment options',
    ],
    cta: 'Contact sales',
    ctaLink: '/contact',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cast-dark tracking-tight sm:text-5xl">
            Pricing Plans
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Simple, transparent pricing that scales with your business
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {plans.map((plan, planIdx) => (
            <div 
              key={planIdx} 
              className={`rounded-lg shadow-lg overflow-hidden ${
                plan.highlighted ? 'border-2 border-cast-blue ring-1 ring-cast-blue' : 'border border-gray-200'
              }`}
            >
              <div className={`px-6 py-8 bg-white ${plan.highlighted ? 'bg-cast-light-blue' : ''}`}>
                <div>
                  <h3 className="text-2xl font-bold text-cast-dark tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">{plan.description}</p>
                  <p className="mt-8">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-base font-medium text-gray-500">/{plan.billing}</span>
                  </p>
                  <Link 
                    href={plan.ctaLink}
                    className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                      plan.highlighted 
                        ? 'bg-cast-blue text-white hover:bg-cast-dark-blue' 
                        : 'bg-cast-light-blue text-cast-blue hover:bg-blue-50'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
              <div className="px-6 pt-6 pb-8 bg-white border-t border-gray-200">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">What&apos;s included</h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex">
                      <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="ml-3 text-base text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-cast-gray rounded-lg py-10 px-6 md:py-16 md:px-12 lg:flex lg:items-center lg:p-16">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-2xl font-bold text-cast-dark tracking-tight">
              Not sure which plan is right for you?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Our team can help you find the right solution for your business needs.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <div className="sm:flex">
              <Link
                href="/demo"
                className="rounded-md shadow px-6 py-3 text-base font-medium text-white bg-cast-blue hover:bg-cast-dark-blue md:py-4 md:text-lg md:px-10"
              >
                Schedule a demo
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-cast-dark tracking-tight">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-medium text-cast-dark">
                How does HiOps pricing work?
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Our pricing is based on a monthly subscription model with different tiers depending on the number of Kubernetes clusters you need to manage and the features you require.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-cast-dark">
                Do you offer a free trial?
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Yes, all paid plans come with a 14-day free trial, no credit card required. You can also use our Free plan indefinitely.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-cast-dark">
                How much can I expect to save?
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Our customers typically see cost reductions of 30-50% on their cloud bills. The exact savings depend on your current infrastructure setup and optimization opportunities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-cast-dark">
                Can I upgrade or downgrade my plan later?
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades will be applied at the end of your current billing cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}