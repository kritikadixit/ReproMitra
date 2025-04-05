import React from 'react';
import { Link } from 'react-router-dom';

const WomenReproductiveDiseases = () => {
  const diseaseCategories = [
    {
      name: "Gynecological Cancers",
      diseases: [
        {
          name: "Ovarian Cancer",
          description: "Malignant growth in ovaries, often called the 'silent killer'",
          link: "/ovarian-cancer"
        },
        {
          name: "Cervical Cancer",
          description: "Cancer caused by HPV affecting the cervix",
          link: "/cervical-cancer"
        },
        {
          name: "Uterine Cancer",
          description: "Cancer of the uterus lining (endometrium)",
          link: "/uterine-cancer"
        },
        {
          name: "Vulvar Cancer",
          description: "Rare cancer affecting external female genitalia",
          link: "/vulvar-cancer"
        }
      ]
    },
    {
      name: "Fertility & Pregnancy-Related",
      diseases: [
        {
          name: "Premature Ovarian Insufficiency",
          description: "Early loss of ovarian function before age 40",
          link: "/poi"
        },
        {
          name: "Asherman's Syndrome",
          description: "Uterine adhesions/scarring affecting menstruation and fertility",
          link: "/ashermans"
        },
        {
          name: "Ectopic Pregnancy",
          description: "Pregnancy implanting outside the uterus, often in fallopian tubes",
          link: "/ectopic-pregnancy"
        },
        {
          name: "Gestational Trophoblastic Disease",
          description: "Rare tumors developing from placental tissue",
          link: "/gtd"
        }
      ]
    },
    {
      name: "Structural & Functional Disorders",
      diseases: [
        {
          name: "Adenomyosis",
          description: "Endometrial tissue grows into uterine muscle wall",
          link: "/adenomyosis"
        },
        {
          name: "Pelvic Organ Prolapse",
          description: "Weakening of pelvic muscles causing organ descent",
          link: "/prolapse"
        },
        {
          name: "Vulvodynia",
          description: "Chronic vulvar pain without identifiable cause",
          link: "/vulvodynia"
        },
        {
          name: "Bartholin's Cyst",
          description: "Blocked gland near vaginal opening causing swelling",
          link: "/bartholins-cyst"
        }
      ]
    },
    {
      name: "Infections & Inflammatory Conditions",
      diseases: [
        {
          name: "Bacterial Vaginosis (BV)",
          description: "Bacterial imbalance in vagina causing discharge",
          link: "/bv"
        },
        {
          name: "Vaginal Atrophy",
          description: "Thinning/drying of vaginal walls, often post-menopausal",
          link: "/vaginal-atrophy"
        },
        {
          name: "Tubo-Ovarian Abscess",
          description: "Pus-filled pocket in reproductive tract",
          link: "/toa"
        },
        {
          name: "Lichen Sclerosus",
          description: "Chronic skin condition affecting genital area",
          link: "/lichen-sclerosus"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
          Women's Reproductive Health Conditions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive information about various reproductive system disorders
        </p>
      </section>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <input
            type="text"
            placeholder="Search reproductive conditions..."
            className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
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
            <div className="bg-indigo-700 px-6 py-4">
              <h2 className="text-2xl font-bold text-white">{category.name}</h2>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.diseases.map((disease, idx) => (
                  <Link 
                    to={disease.link} 
                    key={idx}
                    className="group block p-4 border border-gray-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-300 transition-all"
                  >
                    <h3 className="text-lg font-semibold text-indigo-800 group-hover:text-indigo-900 mb-2">
                      {disease.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{disease.description}</p>
                    <div className="mt-3 flex items-center text-indigo-600 group-hover:text-indigo-800">
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

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto mt-16 bg-indigo-700 rounded-xl shadow-md p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Can't find what you're looking for?</h2>
        <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
          Our AI health assistant can help identify symptoms and guide you to the right information.
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-100 transition-colors">
          Chat with Health Assistant
        </button>
      </section>
    </div>
  );
};

export default WomenReproductiveDiseases;