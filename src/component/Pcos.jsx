import React from 'react';

const Pcos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
          Polycystic Ovary Syndrome (PCOS)
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A comprehensive guide to understanding, managing, and living with PCOS
        </p>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">What is PCOS?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              Polycystic Ovary Syndrome (PCOS) is a hormonal disorder common among women of reproductive age. 
              Women with PCOS may have infrequent or prolonged menstrual periods or excess male hormone (androgen) levels.
            </p>
            <p className="text-gray-700 mb-4">
              The ovaries may develop numerous small collections of fluid (follicles) and fail to regularly release eggs.
              The exact cause of PCOS is unknown, but it's often related to insulin resistance and genetics.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="font-semibold text-purple-700 mb-2">Did You Know?</h3>
              <p className="text-gray-700">
                PCOS affects approximately 1 in 10 women of childbearing age, making it one of the most common endocrine disorders.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="PCOS awareness" 
              className="rounded-lg shadow-md w-full h-auto max-h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Symptoms Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Symptoms of PCOS</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Symptom Card 1 */}
          <div className="bg-pink-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-purple-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Irregular Periods</h3>
            <p className="text-gray-700">
              Infrequent, irregular or prolonged menstrual cycles are the most common sign of PCOS.
            </p>
          </div>

          {/* Symptom Card 2 */}
          <div className="bg-pink-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-purple-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Excess Androgen</h3>
            <p className="text-gray-700">
              Elevated levels of male hormones may result in physical signs like excess facial and body hair (hirsutism).
            </p>
          </div>

          {/* Symptom Card 3 */}
          <div className="bg-pink-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-purple-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Polycystic Ovaries</h3>
            <p className="text-gray-700">
              Ovaries might be enlarged and contain follicles that surround the eggs, affecting regular function.
            </p>
          </div>

          {/* Symptom Card 4 */}
          <div className="bg-pink-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-purple-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Weight Gain</h3>
            <p className="text-gray-700">
              Many women with PCOS struggle with weight gain or obesity, especially around the abdomen.
            </p>
          </div>

          {/* Symptom Card 5 */}
          <div className="bg-pink-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-purple-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Acne & Skin Issues</h3>
            <p className="text-gray-700">
              Oily skin, severe acne, or dark patches of skin (acanthosis nigricans) are common.
            </p>
          </div>

          {/* Symptom Card 6 */}
          <div className="bg-pink-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-purple-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Fertility Issues</h3>
            <p className="text-gray-700">
              PCOS is a leading cause of female infertility due to irregular ovulation or no ovulation.
            </p>
          </div>
        </div>
      </section>

      {/* Causes & Risk Factors */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Causes & Risk Factors</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Potential Causes:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Insulin resistance:</strong> High insulin levels might increase androgen production</li>
              <li><strong>Heredity:</strong> PCOS often runs in families</li>
              <li><strong>Low-grade inflammation:</strong> May stimulate polycystic ovaries to produce androgens</li>
              <li><strong>Excess androgen:</strong> The ovaries produce abnormally high levels of androgens</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Risk Factors:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Family history of PCOS or type 2 diabetes</li>
              <li>Obesity or being overweight</li>
              <li>Sedentary lifestyle</li>
              <li>Insulin resistance or diabetes</li>
              <li>Ethnicity (higher in South Asian women)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Complications Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Potential Complications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="text-lg font-semibold text-red-800 mb-2">Infertility</h3>
            <p className="text-gray-700">Difficulty conceiving due to irregular ovulation</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="text-lg font-semibold text-red-800 mb-2">Type 2 Diabetes</h3>
            <p className="text-gray-700">Higher risk due to insulin resistance</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="text-lg font-semibold text-red-800 mb-2">Heart Disease</h3>
            <p className="text-gray-700">Increased cardiovascular risk factors</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="text-lg font-semibold text-red-800 mb-2">Endometrial Cancer</h3>
            <p className="text-gray-700">From buildup of uterine lining</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="text-lg font-semibold text-red-800 mb-2">Depression & Anxiety</h3>
            <p className="text-gray-700">From hormonal imbalances and symptoms</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="text-lg font-semibold text-red-800 mb-2">Sleep Apnea</h3>
            <p className="text-gray-700">More common in women with PCOS</p>
          </div>
        </div>
      </section>

      {/* Diagnosis Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Diagnosis</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Diagnostic Criteria (Rotterdam Criteria):</h3>
            <p className="text-gray-700 mb-4">PCOS is diagnosed when at least 2 of these 3 criteria are met:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Irregular or absent periods</li>
              <li>Clinical or biochemical signs of hyperandrogenism</li>
              <li>Polycystic ovaries on ultrasound</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Tests May Include:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Pelvic exam</li>
              <li>Blood tests (hormone levels, glucose tolerance, cholesterol)</li>
              <li>Ultrasound (transvaginal or abdominal)</li>
              <li>Other tests to rule out similar conditions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Treatment Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Treatment & Management</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-purple-800 mb-4">Lifestyle Changes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Healthy Diet</h4>
              <p className="text-gray-700">Low glycemic index foods, balanced macronutrients, anti-inflammatory foods</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Regular Exercise</h4>
              <p className="text-gray-700">150 minutes per week, mix of cardio and strength training</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Weight Management</h4>
              <p className="text-gray-700">Even 5-10% weight loss can improve symptoms</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-purple-800 mb-4">Medications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Hormonal Birth Control</h4>
              <p className="text-gray-700">Pills, patches, or rings to regulate periods and reduce androgen</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Metformin</h4>
              <p className="text-gray-700">Improves insulin resistance and may help with weight loss</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Anti-Androgens</h4>
              <p className="text-gray-700">Reduce hair growth and acne (e.g., spironolactone)</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Fertility Medications</h4>
              <p className="text-gray-700">Clomiphene, letrozole, or gonadotropins to induce ovulation</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Topical Treatments</h4>
              <p className="text-gray-700">For acne and excessive hair growth</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-purple-800 mb-4">Other Treatments</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Surgical Options</h4>
              <p className="text-gray-700">Ovarian drilling (laparoscopic procedure) may help with ovulation</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Alternative Therapies</h4>
              <p className="text-gray-700">Acupuncture, supplements (inositol, vitamin D), stress management</p>
            </div>
          </div>
        </div>
      </section>

      {/* Living with PCOS */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Living with PCOS</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Self-Care Tips</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Track your menstrual cycles and symptoms</li>
              <li>Prioritize sleep and stress reduction</li>
              <li>Build a supportive healthcare team</li>
              <li>Connect with PCOS support communities</li>
              <li>Be patient with treatment - results take time</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-purple-800 mb-4">When to See a Doctor</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>If you've missed periods and aren't pregnant</li>
              <li>If you have PCOS symptoms (excess hair growth, acne, weight gain)</li>
              <li>If you've been trying to conceive for 12+ months without success</li>
              <li>If you have diabetes symptoms (increased thirst, frequent urination)</li>
              <li>If you experience depression or anxiety related to PCOS</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="max-w-7xl mx-auto bg-purple-700 rounded-xl shadow-md p-6 text-white">
        <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Organizations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">PCOS Awareness Association</a></li>
              <li><a href="#" className="hover:underline">The Endocrine Society</a></li>
              <li><a href="#" className="hover:underline">American Society for Reproductive Medicine</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Support Groups</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">PCOS Challenge</a></li>
              <li><a href="#" className="hover:underline">Soul Cysters</a></li>
              <li><a href="#" className="hover:underline">MyPCOSTeam</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Helpful Apps</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Flo Period Tracker</a></li>
              <li><a href="#" className="hover:underline">MyFitnessPal</a></li>
              <li><a href="#" className="hover:underline">Headspace (for stress)</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pcos;