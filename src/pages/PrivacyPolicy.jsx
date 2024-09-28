import React from 'react';
import { ChevronDown } from 'lucide-react';

const PrivacyPolicy = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="h-screen flex flex-col justify-center items-center p-8 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl">
          Your privacy is important to us. Learn how we collect, use, and protect your information.
        </p>
        <button
          onClick={scrollToContent}
          className="mt-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300 ease-in-out"
        >
          <ChevronDown size={24} />
        </button>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">1. Introduction</h2>
          <p className="mb-6">
            Last updated: August 23, 2024
          </p>
          <p className="mb-6">
            This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          </p>
          <p className="mb-6">
            We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-8">2. Collecting and Using Your Personal Data</h2>
          <h3 className="text-2xl font-semibold mb-4">Types of Data Collected</h3>
          <h4 className="text-xl font-semibold mb-2">Personal Data</h4>
          <p className="mb-4">
            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Usage Data</li>
          </ul>

          <h4 className="text-xl font-semibold mb-2">Usage Data</h4>
          <p className="mb-6">
            Usage Data is collected automatically when using the Service. It may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
          </p>

          {/* Add more sections as needed */}

          <h2 className="text-3xl font-bold mt-12 mb-8">Contact Us</h2>
          <p className="mb-6">
            If you have any questions about this Privacy Policy, You can contact us:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>By email: info@toteminteractive.in</li>
            <li>By visiting this page on our website: <a href="https://toteminteractive.in/" className="text-green-500 hover:underline">https://toteminteractive.in/</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;