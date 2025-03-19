'use client';

import { useState, ChangeEvent, FormEvent } from 'react';


interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
  interest: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    interest: 'general',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    console.log('Form submitted:', formData);
    // Reset form or show success message
    alert('Thank you for contacting us. We will get back to you soon!');
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-bold text-cast-dark sm:text-4xl">
              Get in touch
            </h1>
            <p className="mt-4 text-lg text-gray-500">
              Have questions about CAST AI or need help getting started? Our team is here to help.
            </p>
            
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-xl font-bold text-cast-dark">
                Our offices
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-base font-medium text-cast-blue">
                    Miami
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    360 NE 75th Street<br />
                    Miami, FL 33138<br />
                    United States
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-medium text-cast-blue">
                    Vilnius
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Antakalnio g. 17<br />
                    Vilnius, LT-10312<br />
                    Lithuania
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-xl font-bold text-cast-dark">
                Connect with us
              </h2>
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  <strong>Sales:</strong> sales@cast.ai
                </p>
                <p className="mt-2 text-base text-gray-500">
                  <strong>Support:</strong> support@cast.ai
                </p>
                <p className="mt-2 text-base text-gray-500">
                  <strong>Press:</strong> press@cast.ai
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-cast-gray p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-cast-dark">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 block w-full shadow-sm border border-gray-300 rounded-md focus:ring-cast-blue focus:border-cast-blue"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 block w-full shadow-sm border border-gray-300 rounded-md focus:ring-cast-blue focus:border-cast-blue"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm border border-gray-300 rounded-md focus:ring-cast-blue focus:border-cast-blue"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm border border-gray-300 rounded-md focus:ring-cast-blue focus:border-cast-blue"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                  I&apos;m interested in
                </label>
                <div className="mt-1">
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full shadow-sm border border-gray-300 rounded-md focus:ring-cast-blue focus:border-cast-blue"
                  >
                    <option value="general">General information</option>
                    <option value="demo">Request a demo</option>
                    <option value="pricing">Pricing information</option>
                    <option value="technical">Technical support</option>
                    <option value="partnership">Partnership opportunity</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="py-3 px-4 block w-full shadow-sm border border-gray-300 rounded-md focus:ring-cast-blue focus:border-cast-blue"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cast-blue hover:bg-cast-dark-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cast-blue"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}