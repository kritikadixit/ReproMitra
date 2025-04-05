import React from 'react'

const LowTestosterone = () => {
  return (
    <div className="p-6 md:p-12 bg-white text-gray-800 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center text-blue-700">
        Low Testosterone (Low T)
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">What is Low Testosterone?</h2>
        <p className="text-lg">
          Low testosterone, also known as Low T or male hypogonadism, occurs when the body doesn't produce enough of the male hormone testosterone. 
          This hormone is crucial for male sexual development, reproductive function, muscle mass, bone density, and overall mood and energy levels.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Symptoms</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Low sex drive</li>
          <li>Erectile dysfunction</li>
          <li>Fatigue and decreased energy</li>
          <li>Reduced muscle mass and strength</li>
          <li>Increased body fat</li>
          <li>Mood changes, irritability, or depression</li>
          <li>Decreased bone density</li>
          <li>Reduced facial or body hair</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Causes</h2>
        <p className="text-lg mb-2">Low testosterone can be caused by:</p>
        <ul className="list-disc list-inside text-lg">
          <li>Aging (testosterone levels naturally decline with age)</li>
          <li>Injuries or infections of the testicles</li>
          <li>Chronic illnesses (e.g., type 2 diabetes, kidney or liver disease)</li>
          <li>Pituitary gland disorders</li>
          <li>Obesity and poor lifestyle</li>
          <li>Use of steroids or certain medications</li>
          <li>Genetic conditions (e.g., Klinefelter syndrome)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Diagnosis</h2>
        <p className="text-lg">
          A diagnosis is made through a combination of:
        </p>
        <ul className="list-disc list-inside text-lg">
          <li>Blood tests to measure testosterone levels (typically done in the morning)</li>
          <li>Physical examination</li>
          <li>Medical history review</li>
          <li>Other hormone tests (e.g., LH, FSH)</li>
          <li>Pituitary imaging if necessary</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Treatment Options</h2>
        <ul className="list-disc list-inside text-lg">
          <li><strong>Testosterone Replacement Therapy (TRT)</strong> — gels, patches, injections, or implants</li>
          <li>Lifestyle changes (weight loss, exercise, healthy diet)</li>
          <li>Treating underlying medical conditions</li>
          <li>Discontinuing medications that lower testosterone (with doctor’s advice)</li>
          <li>Counseling or therapy for mental health support</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Prevention & Management</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Maintain a healthy weight</li>
          <li>Exercise regularly, especially strength training</li>
          <li>Sleep well and manage stress</li>
          <li>Avoid substance abuse (alcohol, smoking, steroids)</li>
          <li>Get regular medical checkups and monitor testosterone if symptoms appear</li>
        </ul>
      </section>

      <footer className="mt-12 text-center text-sm text-gray-600">
        <p>
          Disclaimer: The information provided is for educational purposes only. Please consult a healthcare professional for personalized medical advice.
        </p>
      </footer>
    </div>
  )
}

export default LowTestosterone
