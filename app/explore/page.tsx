'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Unified Analytics',
    description: 'Track all your social media metrics in one place with real-time data from Instagram, Twitter, Facebook, and LinkedIn.',
    icon: '📊'
  },
  {
    id: 2,
    title: 'Engagement Insights',
    description: 'Understand what content performs best with detailed engagement analytics and audience demographics.',
    icon: '🔍'
  },
  {
    id: 3,
    title: 'Content Calendar',
    description: 'Plan and schedule your content across all platforms with our intuitive content calendar.',
    icon: '📅'
  },
  {
    id: 4,
    title: 'AI Recommendations',
    description: 'Get AI-powered recommendations to optimize your posting schedule and content strategy.',
    icon: '🤖'
  },
  {
    id: 5,
    title: 'Competitor Analysis',
    description: 'Monitor your competitors and benchmark your performance against industry standards.',
    icon: '📈'
  },
  {
    id: 6,
    title: 'Automated Reporting',
    description: 'Generate beautiful, customizable reports to share with your team or clients.',
    icon: '📝'
  },
  {
    id: 7,
    title: 'Sentiment Analysis',
    description: 'Track the sentiment of comments and mentions to understand how your audience feels about your brand.',
    icon: '😊'
  },
  {
    id: 8,
    title: 'Hashtag Performance',
    description: 'Discover which hashtags drive the most engagement and reach for your content.',
    icon: '#️⃣'
  }
];

const testimonials = [
  {
    id: 1,
    quote: "This dashboard has completely transformed how we manage our social media. The unified analytics save us hours every week.",
    author: "Sarah Johnson",
    role: "Marketing Director, TechCorp"
  },
  {
    id: 2,
    quote: "The AI recommendations have helped us increase our engagement by 45% in just two months. Absolutely worth every penny.",
    author: "Michael Chen",
    role: "Social Media Manager, GrowthBrand"
  },
  {
    id: 3,
    quote: "As a small business owner, I needed something simple yet powerful. This dashboard is exactly what I was looking for.",
    author: "Emma Rodriguez",
    role: "Founder, Artisan Crafts"
  }
];

export default function ExplorePage() {
  const [activeTab, setActiveTab] = useState('features');

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="relative bg-blue-600">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Unified Social Media Analytics
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Monitor performance across Instagram, Twitter, Facebook, and LinkedIn in one central dashboard. Get real-time insights and AI-powered recommendations to optimize your social media strategy.
          </p>
          <div className="mt-10 flex space-x-4">
            <Link
              href="/register"
              className="inline-block bg-white py-3 px-5 rounded-md shadow-md text-base font-medium text-blue-600 hover:bg-blue-50"
            >
              Get Started Free
            </Link>
            <Link
              href="/dashboard"
              className="inline-block bg-blue-500 py-3 px-5 rounded-md shadow-md text-base font-medium text-white hover:bg-blue-400"
            >
              Try Demo Dashboard
            </Link>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('features')}
              className={`${
                activeTab === 'features'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab('pricing')}
              className={`${
                activeTab === 'pricing'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Pricing
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`${
                activeTab === 'testimonials'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Testimonials
            </button>
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Features Tab */}
        {activeTab === 'features' && (
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Powerful features to boost your social media presence
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500">
              Our dashboard provides all the tools you need to analyze, optimize, and grow your social media presence.
            </p>
            
            <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.id} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-6 py-8">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Tab */}
        {activeTab === 'pricing' && (
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500">
              Choose the plan that's right for your business.
            </p>
            
            <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
              {/* Free Plan */}
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-medium text-gray-900">Free</h3>
                  <p className="mt-4 text-gray-500">Perfect for individuals just getting started.</p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-900">$0</span>
                    <span className="text-base font-medium text-gray-500">/mo</span>
                  </p>
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">Connect 2 social accounts</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">Basic analytics</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">7-day data history</p>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="/register"
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Get started
                    </Link>
                  </div>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="bg-white overflow-hidden shadow-xl rounded-lg border-2 border-blue-500 transform scale-105">
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-medium text-gray-900">Pro</h3>
                  <p className="mt-4 text-gray-500">For growing businesses and creators.</p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-900">$29</span>
                    <span className="text-base font-medium text-gray-500">/mo</span>
                  </p>
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">Connect 5 social accounts</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">Advanced analytics</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">30-day data history</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">AI recommendations</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">Content calendar</p>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="/register"
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Start free trial
                    </Link>
                  </div>
                </div>
              </div>

              {/* Business Plan */}
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-medium text-gray-900">Business</h3>
                  <p className="mt-4 text-gray-500">For agencies and larger organizations.</p>
                  <p className="mt-8">
                    <span className="text-4xl font-extrabold text-gray-900">$99</span>
                    <span className="text-base font-medium text-gray-500">/mo</span>
                  </p>
                  <ul className="mt-8 space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">Connect 20 social accounts</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">Premium analytics</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">Unlimited data history</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">All Pro features</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">Priority support</p>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="/register"
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Contact sales
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What our customers are saying
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500">
              Don't just take our word for it — hear from some of our amazing customers.
            </p>
            
            <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white overflow-hidden shadow rounded-lg border border-gray-200 p-8">
                  <svg className="h-8 w-8 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-lg text-gray-600 mb-6">"{testimonial.quote}"</p>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-blue-200">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500"
              >
                Try demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
