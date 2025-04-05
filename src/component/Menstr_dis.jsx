import React from 'react';

const MenstrualDisorders = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Menstrual Disorders
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Understanding, diagnosing, and managing common menstrual health issues
        </p>
      </section>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">What Are Menstrual Disorders?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-4">
              Menstrual disorders are problems that affect a woman's normal menstrual cycle, including 
              painful periods, heavy bleeding, or absent periods. These conditions can impact physical health, 
              emotional well-being, and quality of life.
            </p>
            <p className="text-gray-700 mb-4">
              About 30% of women experience clinically significant menstrual disorders during their reproductive years. 
              While some variations are normal, persistent or severe symptoms may indicate underlying health issues.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-blue-700 mb-2">Did You Know?</h3>
              <p className="text-gray-700">
                The average woman has about 450 periods in her lifetime, spending approximately 7 years menstruating.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="Menstrual health awareness" 
              className="rounded-lg shadow-md w-full h-auto max-h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Common Types of Menstrual Disorders</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Type 1 */}
          <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-blue-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Dysmenorrhea</h3>
            <p className="text-gray-700 mb-2"><strong>Painful periods:</strong></p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Primary (without underlying condition)</li>
              <li>Secondary (due to conditions like endometriosis)</li>
            </ul>
          </div>

          {/* Type 2 */}
          <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-blue-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Menorrhagia</h3>
            <p className="text-gray-700"><strong>Heavy menstrual bleeding:</strong></p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Soaking through pads/tampons hourly</li>
              <li>Bleeding lasting {" > "} 7 days</li>
              <li>Passing large clots</li>
            </ul>
          </div>

          {/* Type 3 */}
          <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-blue-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Oligomenorrhea</h3>
            <p className="text-gray-700"><strong>Infrequent periods:</strong></p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Cycles longer than 35 days</li>
              <li>Fewer than 9 periods/year</li>
              <li>Common in PCOS, athletes</li>
            </ul>
          </div>

          {/* Type 4 */}
          <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-blue-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Amenorrhea</h3>
            <p className="text-gray-700"><strong>Absent periods:</strong></p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Primary (never started)</li>
              <li>Secondary (stopped for 3+ months)</li>
              <li>Causes: pregnancy, menopause, disorders</li>
            </ul>
          </div>

          {/* Type 5 */}
          <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-blue-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">PMS & PMDD</h3>
            <p className="text-gray-700"><strong>Severe premenstrual symptoms:</strong></p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Physical and emotional symptoms</li>
              <li>PMDD is severe, disabling form</li>
              <li>Affects 3-8% of menstruating women</li>
            </ul>
          </div>

          {/* Type 6 */}
          <div className="bg-blue-50 p-4 rounded-lg hover:shadow-md transition-shadow">
            <div className="text-blue-600 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Abnormal Uterine Bleeding</h3>
            <p className="text-gray-700"><strong>Irregular bleeding patterns:</strong></p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Between periods</li>
              <li>After intercourse</li>
              <li>Post-menopausal bleeding</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Potential Causes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">Hormonal Imbalances</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
              <li>Estrogen/progesterone</li>
              <li>Thyroid disorders</li>
              <li>Prolactin issues</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">Structural Issues</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
              <li>Fibroids</li>
              <li>Polyps</li>
              <li>Adenomyosis</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">Reproductive Conditions</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
              <li>Endometriosis</li>
              <li>PCOS</li>
              <li>PID</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">Other Factors</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
              <li>Stress</li>
              <li>Extreme weight changes</li>
              <li>Certain medications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Diagnosis Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Diagnosis</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Medical Evaluation</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Detailed history:</strong> menstrual patterns, symptoms, family history</li>
              <li><strong>Physical exam:</strong> including pelvic exam when appropriate</li>
              <li><strong>Symptom tracking:</strong> encourage keeping a menstrual diary</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Diagnostic Tests</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Blood tests:</strong> hormone levels, thyroid function, iron levels</li>
              <li><strong>Ultrasound:</strong> transvaginal or abdominal to visualize reproductive organs</li>
              <li><strong>Hysteroscopy:</strong> in some cases to examine the uterus</li>
              <li><strong>Endometrial biopsy:</strong> for abnormal bleeding in women over 45</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Treatment Section */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Treatment Options</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Medical Treatments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Hormonal Therapies</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Birth control pills</li>
                <li>Progestin therapy</li>
                <li>Hormonal IUDs</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Pain Management</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>NSAIDs (ibuprofen)</li>
                <li>Prescription pain meds</li>
                <li>Heat therapy</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Other Medications</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Tranexamic acid (for heavy bleeding)</li>
                <li>GnRH agonists (severe cases)</li>
                <li>Antidepressants (for PMDD)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Surgical Options</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Minimally Invasive</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Endometrial ablation</li>
                <li>Polypectomy</li>
                <li>Myomectomy</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Hysterectomy</h4>
              <p className="text-gray-700 text-sm">Last resort for severe cases when childbearing is complete</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Lifestyle & Home Remedies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Diet & Nutrition</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Iron-rich foods for heavy bleeding</li>
                <li>Omega-3s to reduce inflammation</li>
                <li>Limit salt, caffeine, alcohol</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Exercise</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Regular moderate exercise</li>
                <li>Yoga for cramps</li>
                <li>Avoid over-exercising</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Stress Management</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Meditation</li>
                <li>Adequate sleep</li>
                <li>Relaxation techniques</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When to Seek Help */}
      <section className="max-w-7xl mx-auto bg-red-50 rounded-xl shadow-md p-6 mb-12 border-l-4 border-red-500">
        <h2 className="text-3xl font-bold text-red-700 mb-6">When to Seek Medical Help</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-red-800 mb-4">Emergency Signs</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Bleeding so heavy you soak through pads hourly</li>
              <li>Severe pain that prevents normal activities</li>
              <li>Dizziness or fainting from blood loss</li>
              <li>Fever with menstrual symptoms</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-800 mb-4">Concerning Symptoms</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Periods lasting {" > "}7 days</li>
              <li>Cycles {"<"}21 or {">"}35 days regularly</li>
              <li>Bleeding between periods</li>
              <li>No period for 3+ months (not pregnant)</li>
              <li>Severe PMS affecting daily life</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Prevention & Management */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-6 mb-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Prevention & Long-Term Management</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Tracking & Monitoring</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Maintain a menstrual calendar</li>
              <li>Track symptoms, flow, and pain levels</li>
              <li>Note any changes in patterns</li>
              <li>Bring records to doctor visits</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Preventive Care</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Regular gynecological checkups</li>
              <li>Maintain healthy weight</li>
              <li>Manage chronic conditions</li>
              <li>Address nutritional deficiencies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="max-w-7xl mx-auto bg-blue-700 rounded-xl shadow-md p-6 text-white">
        <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Organizations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">ACOG (American College of OB/GYN)</a></li>
              <li><a href="#" className="hover:underline">Endometriosis Foundation</a></li>
              <li><a href="#" className="hover:underline">PCOS Awareness Association</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Helpful Apps</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Clue Period Tracker</a></li>
              <li><a href="#" className="hover:underline">Flo Health</a></li>
              <li><a href="#" className="hover:underline">MyTherapy (med reminders)</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Support Communities</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">r/Endo on Reddit</a></li>
              <li><a href="#" className="hover:underline">HealthyWomen.org</a></li>
              <li><a href="#" className="hover:underline">Women's Health.gov</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenstrualDisorders;