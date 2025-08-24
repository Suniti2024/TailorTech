"use client";


import React from "react";
import Header from "../component/Header";


export default function Page() {
const getStarted = () => {
alert("Welcome! Let's get you started with our amazing platform!");
};


return (
<>
<Header />


<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="text-center mb-16">
<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
Welcome to <span className="text-indigo-600">TailorTech</span>
</h1>
<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
A structured digital platform designed to connect clients with verified local freelance tailors. Our system incorporates artificial intelligence for body measurement, real-time client–tailor matchmaking, personalized clothing recommendations, and location-based search functionalities.
</p>
<button onClick={getStarted} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
Get Started
</button>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Card 1 */}
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
      <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Body Measurement</h3>
    <p className="text-gray-600">Advanced artificial intelligence technology provides accurate body measurements for perfect-fitting garments every time.</p>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
      <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Matchmaking</h3>
    <p className="text-gray-600">Instantly connect with verified local freelance tailors through our intelligent client-tailor matching system.</p>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
      <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Recommendations</h3>
    <p className="text-gray-600">Get customized clothing suggestions based on your style preferences, body type, and fashion trends.</p>
  </div>

  {/* Card 4 */}
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
      <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">Location-based Search</h3>
    <p className="text-gray-600">Find the best local tailors near you with our advanced location-based search and filtering system.</p>
  </div>

  {/* Card 5 */}
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
      <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">Order Management</h3>
    <p className="text-gray-600">Streamlined workflow automation for tailors with efficient lead generation and comprehensive order tracking.</p>
  </div>

  {/* Card 6 */}
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
      <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Tailors</h3>
    <p className="text-gray-600">Connect with confidence through our verified network of skilled local freelance tailors with proven expertise.</p>
  </div>
</div>

</main>
</>
);
}