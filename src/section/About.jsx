import React from 'react';

const AboutRepromitra = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-6">
            Revolutionizing Reproductive Healthcare with AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ReproMitra is an innovative AI-powered platform bridging the gap in reproductive healthcare access, especially for underserved communities.
          </p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white rounded-xl shadow-md mb-12">
        <div className="md:flex items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Healthcare access problem" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-indigo-700 mb-6">The Problem We're Solving</h2>
            <p className="text-gray-600 mb-4">
              Millions worldwide, especially in underprivileged areas, lack access to reproductive healthcare due to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Financial constraints making consultations unaffordable</li>
              <li>Social stigma and embarrassment preventing people from seeking help</li>
              <li>Geographical barriers limiting access to specialists</li>
              <li>Lack of awareness about reproductive health issues</li>
            </ul>
            <p className="text-gray-600 mt-6">
              This leads to undiagnosed and untreated conditions, affecting quality of life and overall health outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">Our Comprehensive Solution</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-indigo-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">AI-Powered Diagnosis</h3>
            <p className="text-gray-600">
              Advanced symptom checker and disease prediction using machine learning to provide preliminary assessments.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-indigo-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Privacy-Preserving Consultations</h3>
            <p className="text-gray-600">
              Anonymous consultations to eliminate embarrassment and social stigma around reproductive health issues.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-indigo-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Ayushman Card Integration</h3>
            <p className="text-gray-600">
              Seamless connection with India's Ayushman Bharat scheme to make healthcare truly affordable for all.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-indigo-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Risk Prediction</h3>
            <p className="text-gray-600">
              AI analytics to assess your risk of reproductive diseases and provide preventive recommendations.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-indigo-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Multilingual Support</h3>
            <p className="text-gray-600">
              Breaking language barriers to make reproductive healthcare accessible to non-English speaking populations.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-indigo-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Telemedicine Redirection</h3>
            <p className="text-gray-600">
              When needed, we connect you with specialized gynecologists and andrologists for professional care.
            </p>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-indigo-50 rounded-xl mb-12">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">What Makes ReproMitra Unique</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Specialized Focus</h3>
            <p className="text-gray-600">
              Unlike general telemedicine platforms, ReproMitra focuses exclusively on reproductive health (gynecology and andrology), allowing for deeper expertise and more tailored solutions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">AI-Driven Privacy</h3>
            <p className="text-gray-600">
              Our platform allows completely anonymous consultations, removing the fear of judgment that prevents many from seeking reproductive healthcare.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Holistic Approach</h3>
            <p className="text-gray-600">
              We combine medical guidance with mental health support, custom diet plans, and lifestyle recommendations for comprehensive reproductive healthcare.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Government Partnership</h3>
            <p className="text-gray-600">
              Our integration with Ayushman Bharat makes us the first reproductive health platform to leverage government healthcare schemes for maximum affordability.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">Our Technology Stack</h2>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Frontend</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">React.js (Web)</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Flutter (Mobile)</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Tailwind CSS</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-6">Backend</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Node.js + Express.js</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Firebase & PostgreSQL</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 p-8 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">AI/ML & Blockchain</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">TensorFlow/PyTorch</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Hyperledger (Blockchain)</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">BioBERT/GPT-4 (NLP)</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-6">Cloud & APIs</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">AWS/GCP Cloud</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Ayushman Bharat API</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-700">Twilio (Telemedicine)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">Our Future Roadmap</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-indigo-200 transform -translate-x-1/2"></div>
          
          {/* Timeline items */}
          <div className="space-y-8 md:space-y-16">
            {/* Item 1 */}
            <div className="relative md:flex items-center">
              <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 text-right">
                <h3 className="text-xl font-semibold text-indigo-700">Phase 1: Research & Data</h3>
                <p className="text-gray-600">Collecting medical datasets and developing symptom-checking logic</p>
              </div>
              <div className="hidden md:block w-12 h-12 rounded-full bg-indigo-600 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <div className="md:w-1/2 md:pl-8"></div>
            </div>
            
            {/* Item 2 */}
            <div className="relative md:flex items-center">
              <div className="md:w-1/2 md:pr-8"></div>
              <div className="hidden md:block w-12 h-12 rounded-full bg-indigo-600 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                <h3 className="text-xl font-semibold text-indigo-700">Phase 2: Backend</h3>
                <p className="text-gray-600">Building API endpoints and implementing secure authentication</p>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="relative md:flex items-center">
              <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 text-right">
                <h3 className="text-xl font-semibold text-indigo-700">Phase 3: AI Training</h3>
                <p className="text-gray-600">Developing NLP models and machine learning pipelines</p>
              </div>
              <div className="hidden md:block w-12 h-12 rounded-full bg-indigo-600 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <div className="md:w-1/2 md:pl-8"></div>
            </div>
            
            {/* Item 4 */}
            <div className="relative md:flex items-center">
              <div className="md:w-1/2 md:pr-8"></div>
              <div className="hidden md:block w-12 h-12 rounded-full bg-indigo-600 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <span className="text-white font-bold">4</span>
              </div>
              <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                <h3 className="text-xl font-semibold text-indigo-700">Phase 4: Frontend</h3>
                <p className="text-gray-600">Developing mobile and web interfaces with user-friendly UX</p>
              </div>
            </div>
            
            {/* Item 5 */}
            <div className="relative md:flex items-center">
              <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0 text-right">
                <h3 className="text-xl font-semibold text-indigo-700">Phase 5: Testing</h3>
                <p className="text-gray-600">Beta testing with users and medical professionals</p>
              </div>
              <div className="hidden md:block w-12 h-12 rounded-full bg-indigo-600 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <span className="text-white font-bold">5</span>
              </div>
              <div className="md:w-1/2 md:pl-8"></div>
            </div>
            
            {/* Item 6 */}
            <div className="relative md:flex items-center">
              <div className="md:w-1/2 md:pr-8"></div>
              <div className="hidden md:block w-12 h-12 rounded-full bg-indigo-600 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <span className="text-white font-bold">6</span>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h3 className="text-xl font-semibold text-indigo-700">Phase 6: Deployment</h3>
                <p className="text-gray-600">Cloud deployment with auto-scaling and security measures</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center bg-indigo-700 rounded-xl">
        <h2 className="text-3xl font-bold text-white mb-6">Join Us in Revolutionizing Reproductive Healthcare</h2>
        <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
          Whether you're a potential user, healthcare provider, or partner, we invite you to be part of this transformative journey.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-100 transition-colors duration-300">
            Get Started
          </button>
          <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-indigo-600 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutRepromitra;
