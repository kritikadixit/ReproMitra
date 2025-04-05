import React from 'react';

const Endometriosis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
          Endometriosis
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding, managing, and living with this chronic condition
        </p>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">What is Endometriosis?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              Endometriosis is a condition where tissue similar to the lining of the uterus (endometrium) grows outside
              the uterine cavity. This tissue responds to hormonal changes and bleeds during menstruation, causing
              inflammation, pain, and scar tissue formation.
            </p>
            <p className="text-gray-700 mb-4">
              It affects approximately 1 in 10 women of reproductive age, with symptoms often starting in adolescence.
              Diagnosis typically takes 7-10 years due to symptom normalization and lack of awareness.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-semibold text-purple-700 mb-2">Did You Know?</h3>
              <p className="text-gray-700">
                Endometriosis can occur in distant locations like the lungs or brain, though pelvic areas are most common.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Endometriosis awareness" 
              className="rounded-lg shadow-md w-full h-auto max-h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Symptoms</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Symptom 1 */}
          <div className="bg-pink-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-purple-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Pelvic Pain</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Severe menstrual cramps</li>
              <li>Chronic pelvic pain</li>
              <li>Pain during/after sex</li>
              <li>Pain with bowel movements</li>
            </ul>
          </div>

          {/* Symptom 2 */}
          <div className="bg-pink-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-purple-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Bleeding Issues</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Heavy periods</li>
              <li>Irregular bleeding</li>
              <li>Prolonged bleeding</li>
              <li>Premenstrual spotting</li>
            </ul>
          </div>

          {/* Symptom 3 */}
          <div className="bg-pink-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-purple-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Bowel/Bladder</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Painful urination</li>
              <li>Blood in urine</li>
              <li>Diarrhea/constipation</li>
              <li>Bloating ("endo belly")</li>
            </ul>
          </div>

          {/* Symptom 4 */}
          <div className="bg-pink-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-purple-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Fertility Issues</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Difficulty conceiving</li>
              <li>Higher miscarriage risk</li>
              <li>Affects 30-50% of patients</li>
            </ul>
          </div>

          {/* Symptom 5 */}
          <div className="bg-pink-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-purple-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Fatigue</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Chronic exhaustion</li>
              <li>Low energy levels</li>
              <li>Sleep disturbances</li>
            </ul>
          </div>

          {/* Symptom 6 */}
          <div className="bg-pink-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-purple-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Other Symptoms</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Lower back pain</li>
              <li>Leg pain</li>
              <li>Nausea</li>
              <li>Headaches</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stages & Types */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Stages & Types</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-purple-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">Stage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-purple-800 uppercase tracking-wider">Characteristics</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-800">Stage 1 (Minimal)</td>
                <td className="px-6 py-4 text-sm text-gray-700">Isolated implants</td>
                <td className="px-6 py-4 text-sm text-gray-700">Few superficial lesions, minimal adhesions</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-800">Stage 2 (Mild)</td>
                <td className="px-6 py-4 text-sm text-gray-700">More extensive implants</td>
                <td className="px-6 py-4 text-sm text-gray-700">More lesions but no significant adhesions</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-800">Stage 3 (Moderate)</td>
                <td className="px-6 py-4 text-sm text-gray-700">Deep implants</td>
                <td className="px-6 py-4 text-sm text-gray-700">Multiple deep lesions, small cysts, some adhesions</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-800">Stage 4 (Severe)</td>
                <td className="px-6 py-4 text-sm text-gray-700">Extensive disease</td>
                <td className="px-6 py-4 text-sm text-gray-700">Many deep implants, large cysts, dense adhesions</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">Common Locations</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Ovaries (endometriomas)</li>
              <li>Fallopian tubes</li>
              <li>Pelvic peritoneum</li>
              <li>Bladder and bowel</li>
              <li>Uterosacral ligaments</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">Rare Locations</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Lungs (thoracic endometriosis)</li>
              <li>Diaphragm</li>
              <li>Brain</li>
              <li>Skin (scar endometriosis)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Diagnosis Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Diagnosis</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Clinical Evaluation</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Detailed medical history:</strong> Symptom patterns, family history</li>
              <li><strong>Pelvic exam:</strong> Checking for tenderness, nodules, or masses</li>
              <li><strong>Symptom tracking:</strong> Pain diaries, menstrual charts</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Diagnostic Tests</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Ultrasound:</strong> Transvaginal or abdominal to detect endometriomas</li>
              <li><strong>MRI:</strong> For deep infiltrating endometriosis</li>
              <li><strong>Laparoscopy:</strong> Gold standard for definitive diagnosis</li>
              <li><strong>Biopsy:</strong> During laparoscopy to confirm tissue type</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Treatment Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Treatment Options</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-purple-800 mb-4">Medical Treatments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Pain Management</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>NSAIDs (ibuprofen, naproxen)</li>
                <li>Prescription pain medications</li>
                <li>Heat therapy</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Hormonal Therapies</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Birth control pills</li>
                <li>Progestins (IUD, implant, pills)</li>
                <li>GnRH agonists (Lupron)</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Other Medications</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Aromatase inhibitors</li>
                <li>Danazol (less commonly used)</li>
                <li>Experimental treatments</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-purple-800 mb-4">Surgical Options</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Laparoscopy</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Diagnostic and treatment</li>
                <li>Excision of lesions</li>
                <li>Adhesiolysis</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Laparotomy</h4>
              <p className="text-gray-700 text-sm">For severe cases requiring extensive surgery</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Hysterectomy</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Last resort option</li>
                <li>Often with oophorectomy</li>
                <li>Not a cure but may help symptoms</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-purple-800 mb-4">Complementary Therapies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Diet & Nutrition</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Anti-inflammatory diet</li>
                <li>Omega-3 fatty acids</li>
                <li>Limit red meat and dairy</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Physical Therapies</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Pelvic floor therapy</li>
                <li>Acupuncture</li>
                <li>Yoga and stretching</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Mind-Body</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Meditation</li>
                <li>Cognitive behavioral therapy</li>
                <li>Stress management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Living with Endo */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Living with Endometriosis</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Daily Management</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Create a pain management plan with your doctor</li>
              <li>Use heat pads for cramp relief</li>
              <li>Maintain an endometriosis symptom diary</li>
              <li>Plan rest periods during flare-ups</li>
              <li>Adapt exercise routines to your energy levels</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Emotional Support</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Join support groups (online or in-person)</li>
              <li>Consider therapy for chronic pain coping</li>
              <li>Educate loved ones about your condition</li>
              <li>Set boundaries around your limitations</li>
              <li>Celebrate small victories in management</li>
            </ul>
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="max-w-7xl mx-auto bg-red-50 rounded-xl shadow-md p-6 mb-12 border-l-4 border-red-500">
        <h2 className="text-3xl font-bold text-red-700 mb-6">When to Seek Emergency Care</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-red-800 mb-4">Medical Emergencies</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Severe, sudden abdominal pain</li>
              <li>Heavy bleeding with dizziness/fainting</li>
              <li>Inability to urinate or have bowel movements</li>
              <li>Signs of ovarian torsion (sudden extreme pain)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-800 mb-4">Concerning Symptoms</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Pain preventing daily activities</li>
              <li>Symptoms not responding to treatment</li>
              <li>New or worsening symptoms</li>
              <li>Depression or anxiety related to condition</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="max-w-7xl mx-auto bg-purple-700 rounded-xl shadow-md p-6 text-white">
        <h2 className="text-3xl font-bold mb-6">Support & Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Organizations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Endometriosis Foundation of America</a></li>
              <li><a href="#" className="hover:underline">World Endometriosis Society</a></li>
              <li><a href="#" className="hover:underline">Endometriosis UK</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Support Communities</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">r/Endo (Reddit)</a></li>
              <li><a href="#" className="hover:underline">Nancy's Nook (Facebook)</a></li>
              <li><a href="#" className="hover:underline">Endometriosis Association</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Helpful Apps</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Phendo (research app)</a></li>
              <li><a href="#" className="hover:underline">My Pain Diary</a></li>
              <li><a href="#" className="hover:underline">Flo Period Tracker</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Endometriosis;