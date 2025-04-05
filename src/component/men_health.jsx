import React from 'react';
import { Link } from 'react-router-dom';

const MaleReproductiveDiseases = () => {
  const diseaseCategories = [
    {
      name: "Prostate Conditions",
      diseases: [
        {
          name: "Benign Prostatic Hyperplasia (BPH)",
          description: "Non-cancerous prostate enlargement causing urinary symptoms",
          link: "/bph"
        },
        {
          name: "Prostatitis",
          description: "Inflammation of the prostate gland, often painful",
          link: "/prostatitis"
        },
        {
          name: "Prostate Cancer",
          description: "Malignant tumor in the prostate gland",
          link: "/prostate-cancer"
        }
      ]
    },
    {
      name: "Testicular & Scrotal Conditions",
      diseases: [
        {
          name: "Testicular Cancer",
          description: "Malignant growth in one or both testicles",
          link: "/testicular-cancer"
        },
        {
          name: "Varicocele",
          description: "Enlarged veins in the scrotum affecting sperm quality",
          link: "/varicocele"
        },
        {
          name: "Hydrocele",
          description: "Fluid buildup around the testicle causing swelling",
          link: "/hydrocele"
        },
        {
          name: "Testicular Torsion",
          description: "Medical emergency when testicle twists on spermatic cord",
          link: "/testicular-torsion"
        }
      ]
    },
    {
      name: "Penile Disorders",
      diseases: [
        {
          name: "Peyronie's Disease",
          description: "Development of fibrous scar tissue causing curved erection",
          link: "/peyronies"
        },
        {
          name: "Priapism",
          description: "Prolonged, painful erection not caused by sexual arousal",
          link: "/priapism"
        },
        {
          name: "Phimosis & Paraphimosis",
          description: "Foreskin conditions that may require medical attention",
          link: "/phimosis"
        },
        {
          name: "Penile Cancer",
          description: "Rare cancer affecting penile tissues",
          link: "/penile-cancer"
        }
      ]
    },
    {
      name: "Infections & STIs",
      diseases: [
        {
          name: "Epididymitis",
          description: "Inflammation of the epididymis, often from infection",
          link: "/epididymitis"
        },
        {
          name: "Orchitis",
          description: "Inflammation of one or both testicles",
          link: "/orchitis"
        },
        {
          name: "Urethritis",
          description: "Inflammation of the urethra, often from infection",
          link: "/urethritis"
        },
        {
          name: "Genital Warts (HPV)",
          description: "Viral infection causing growths in genital area",
          link: "/genital-warts"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Men's Reproductive Health Conditions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive information about male reproductive system disorders
        </p>
      </section>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search male reproductive conditions..."
            className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Disease Categories */}
      <div className="max-w-7xl mx-auto space-y-12">
        {diseaseCategories.map((category, index) => (
          <section key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-blue-700 px-6 py-4">
              <h2 className="text-2xl font-bold text-white">{category.name}</h2>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.diseases.map((disease, idx) => (
                  <Link 
                    to={disease.link} 
                    key={idx}
                    className="group block p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all"
                  >
                    <h3 className="text-lg font-semibold text-blue-800 group-hover:text-blue-900 mb-2">
                      {disease.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{disease.description}</p>
                    <div className="mt-3 flex items-center text-blue-600 group-hover:text-blue-800">
                      <span className="text-sm font-medium">Learn more</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Emergency Notice */}
      <section className="max-w-7xl mx-auto mt-12 bg-red-50 rounded-xl shadow-md p-6 border-l-4 border-red-500">
        <h2 className="text-2xl font-bold text-red-700 mb-4">Emergency Conditions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-red-800 mb-2">Testicular Torsion</h3>
            <p className="text-gray-700">
              Sudden, severe testicular pain requires <strong>immediate medical attention</strong> to prevent tissue death.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-red-800 mb-2">Fournier's Gangrene</h3>
            <p className="text-gray-700">
              Rare but life-threatening infection of the genital area requiring emergency surgery.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto mt-16 bg-blue-700 rounded-xl shadow-md p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need personalized advice?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Our AI health assistant provides confidential guidance on male reproductive health concerns.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-100 transition-colors">
          Start Private Consultation
        </button>
      </section>
    </div>
  );
};

export default MaleReproductiveDiseases;