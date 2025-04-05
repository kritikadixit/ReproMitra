
import React, { useEffect,useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { homeherobackground, searchline, micfill, miclisten,doctor,aiagent } from "../assets";
import { NavLink, useNavigate } from "react-router-dom";

function HomeHero() {
  const navigate = useNavigate();
    useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      perView: 3,
      gap: 24,
      breakpoints: {
        768: { perView: 1 },
      },
    });

    glide.mount();
  }, []);
  const [micIcon, setMicIcon] = useState(micfill);
  const toggleMicIcon = () => {
    setMicIcon((prevIcon) => (prevIcon === micfill ? miclisten : micfill));
  }; 
  const toggleChatPanel = () => {
    navigate("/chat");
  };
  return (
   
    
   <main className="mt-16"> 
   <div className="w-full flex justify-end px-6 pt-6">
  <NavLink
    to="/ayushmann-card"
    className="bg-yellow-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
  >
    AYUSHMANN CARD
  </NavLink>
</div>
    <section
      className="relative bg-gray-50"
      style={{
        backgroundImage: `url(${homeherobackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="absolute inset-0 bg-gray-50 bg-opacity-80"></div>
      {/* <div className="w-full flex justify-end px-6 pt-6">
  <NavLink
    to="/ayushmann-card"
    className="bg-yellow-800 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
  >
    AYUSHMANN CARD
  </NavLink>
</div> */}

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center gap-8">
          <div>
            <div className="space-y-6">
              <h1 className="text-5xl font-custom font-bold text-gray-900 mb-6 leading-tight">
                <span>
                  Your <span className="text-custom">Personal Health </span>
                </span>
                Journey Starts Here
              </h1>
              <div className="relative w-full max-w-3xl">
                <div className="mb-6 text-center">
                  <i className="fas fa-user-md text-7xl text-custom mb-4"></i>
                </div>
                <div className="flex items-center relative">
                  <input
                    type="search"
                    placeholder="Search health issues, symptoms, or doctors..."
                    className="w-full px-6 py-4 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-custom focus:border-transparent"
                  />
                  <button className="absolute right-0 top-0 flex flex-col justify-center items-center h-full px-6 bg-custom text-white rounded-r-lg hover:bg-opacity-90">
                    <img className="absolute w-6 h-6" src={searchline} alt="search-button" />
                  </button>
                  <button
                    className="absolute flex flex-col justify-center items-center right-20 top-1/2 -translate-y-1/2 text-gray-400 hover:text-custom p-3 transition-colors"
                    onClick={toggleMicIcon}
                  >
                    <img className="absolute transform transition-transform hover:scale-130" src={micIcon} alt="mic-button" />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="form-checkbox text-custom" />
                  <span>Enable Read Aloud</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="py-16 bg-white">
  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-custom font-bold text-gray-900 mb-16 text-center">Our Top Specialists</h2>
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <div className="bg-white rounded-xl shadow-lg p-8 mx-2 transform hover:-translate-y-1 transition-all duration-200">
              <img src={doctor} alt="Doctor" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-gray-900 text-center">Dr. Sarah Johnson</h3>
              <p className="text-sm text-gray-600 text-center mb-2">Gynecologist</p>
              <div className="flex justify-center items-center mb-4">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="ml-1 text-sm text-gray-600">4.9 (2.1k reviews)</span>
              </div>
              <button className="w-full bg-custom text-white !rounded-button py-2 text-sm font-medium hover:bg-opacity-90">Book Consultation</button>
            </div>
          </li>

          <li className="glide__slide">
            <div className="bg-white rounded-xl shadow-lg p-8 mx-2 transform hover:-translate-y-1 transition-all duration-200">
              <img src={doctor} alt="Doctor" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-gray-900 text-center">Dr. Arjun Mehta</h3>
              <p className="text-sm text-gray-600 text-center mb-2">Andrologist</p>
              <div className="flex justify-center items-center mb-4">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="ml-1 text-sm text-gray-600">4.8 (1.9k reviews)</span>
              </div>
              <button className="w-full bg-custom text-white !rounded-button py-2 text-sm font-medium hover:bg-opacity-90">Book Consultation</button>
            </div>
          </li>

          <li className="glide__slide">
            <div className="bg-white rounded-xl shadow-lg p-8 mx-2 transform hover:-translate-y-1 transition-all duration-200">
              <img src={doctor} alt="Doctor" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-gray-900 text-center">Dr. Kavita Desai</h3>
              <p className="text-sm text-gray-600 text-center mb-2">Sexual Health Expert</p>
              <div className="flex justify-center items-center mb-4">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="ml-1 text-sm text-gray-600">4.7 (1.4k reviews)</span>
              </div>
              <button className="w-full bg-custom text-white !rounded-button py-2 text-sm font-medium hover:bg-opacity-90">Book Consultation</button>
            </div>
          </li>

          <li className="glide__slide">
            <div className="bg-white rounded-xl shadow-lg p-8 mx-2 transform hover:-translate-y-1 transition-all duration-200">
              <img src={doctor} alt="Doctor" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-gray-900 text-center">Dr. Rohan Patel</h3>
              <p className="text-sm text-gray-600 text-center mb-2">Endocrinologist</p>
              <div className="flex justify-center items-center mb-4">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="ml-1 text-sm text-gray-600">4.9 (2.3k reviews)</span>
              </div>
              <button className="w-full bg-custom text-white !rounded-button py-2 text-sm font-medium hover:bg-opacity-90">Book Consultation</button>
            </div>
          </li>

          <li className="glide__slide">
            <div className="bg-white rounded-xl shadow-lg p-8 mx-2 transform hover:-translate-y-1 transition-all duration-200">
              <img src={doctor} alt="Doctor" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-gray-900 text-center">Dr. Sneha Kapoor</h3>
              <p className="text-sm text-gray-600 text-center mb-2">Reproductive Therapist</p>
              <div className="flex justify-center items-center mb-4">
                <i className="fas fa-star text-yellow-400"></i>
                <span className="ml-1 text-sm text-gray-600">4.8 (1.8k reviews)</span>
              </div>
              <button className="w-full bg-custom text-white !rounded-button py-2 text-sm font-medium hover:bg-opacity-90">Book Consultation</button>
            </div>
          </li>
        </ul>
      </div>

      <div className="glide__bullets" data-glide-el="controls[nav]">
        <button className="glide__bullet" data-glide-dir="=0"></button>
        <button className="glide__bullet" data-glide-dir="=1"></button>
        <button className="glide__bullet" data-glide-dir="=2"></button>
        <button className="glide__bullet" data-glide-dir="=3"></button>
        <button className="glide__bullet" data-glide-dir="=4"></button>
      </div>
    </div>
  </div>
</section>

    

        <section className="py-16 bg-gray-50">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-custom font-bold text-gray-900 mb-16 text-center">Common Health Issues</h2>
                <div className="space-y-12">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Women&#39;s Health</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-200">
                                <i className="fas fa-female text-custom text-2xl mb-4"></i>
                                <h4 className="text-lg font-medium text-gray-900 mb-2">PCOS</h4>
                                <p className="text-sm text-gray-600 mb-4">Understanding and managing Polycystic Ovary
                                    Syndrome symptoms and treatment options.</p>
                                <NavLink to="/pcos" className="text-custom font-medium text-sm">Learn More →</NavLink>
                            </div>
                         
                            <div className="bg-white rounded-lg shadow-sm p-6"><i
                                    className="fas fa-heartbeat text-custom text-2xl mb-4"></i>
                                <h4 className="text-lg font-medium text-gray-900 mb-2">Endometriosis</h4>
                                <p className="text-sm text-gray-600 mb-4">Expert guidance on managing endometriosis symptoms
                                    and treatment options.</p> <NavLink to= "/endometriosis" className="text-custom font-medium text-sm">Learn
                                    More →</NavLink>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm p-6"><i
                                    className="fas fa-calendar-alt text-custom text-2xl mb-4"></i>
                                <h4 className="text-lg font-medium text-gray-900 mb-2">Menstrual Disorders</h4>
                                <p className="text-sm text-gray-600 mb-4">Understanding and treating various menstrual cycle
                                    irregularities.</p><NavLink to="/menstrualdisorders" className="text-custom font-medium text-sm">Learn More
                                    →</NavLink>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm p-6"><i
                                    className="fas fa-plus-circle text-custom text-2xl mb-4"></i>
                                <h4 className="text-lg font-medium text-gray-900 mb-2">Explore More</h4>
                                <p className="text-sm text-gray-600 mb-4">Discover more women&#39;s health issues and
                                    treatment options.</p><NavLink to="/womens-health"
                                    className="text-custom font-medium text-sm">View All →</NavLink>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Men&#39;s Health</h3>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="bg-white rounded-lg shadow-sm p-6">
                                <i className="fas fa-male text-custom text-2xl mb-4"></i>
                                <h4 className="text-lg font-medium text-gray-900 mb-2">Erectile Dysfunction</h4>
                                <p className="text-sm text-gray-600 mb-4">Expert guidance on causes, treatments, and
                                    maintaining sexual health.</p>
                                <NavLink to="/erectiledysfunction" className="text-custom font-medium text-sm">Learn More →</NavLink>
                            </div>
                           
                            <div className="bg-white rounded-lg shadow-sm p-6"><i
                                    className="fas fa-venus-mars text-custom text-2xl mb-4"></i>
                                <h4 className="text-lg font-medium text-gray-900 mb-2">Low Testosterone</h4>
                                <p className="text-sm text-gray-600 mb-4">Understanding symptoms and treatment options for
                                    low testosterone levels.</p><NavLink to="/lowtestosterone"
                                    className="text-custom font-medium text-sm">Learn More →</NavLink>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm p-6"><i
                                    className="fas fa-baby text-custom text-2xl mb-4"></i>
                                <h4 className="text-lg font-medium text-gray-900 mb-2">Infertility</h4>
                                <p className="text-sm text-gray-600 mb-4">Comprehensive guide to male infertility causes and
                                    treatments.</p><NavLink to="/maleinfertility" className="text-custom font-medium text-sm">Learn More →</NavLink>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm p-6"><i
                                    className="fas fa-plus-circle text-custom text-2xl mb-4"></i>
                                <h4 className="text-lg font-medium text-gray-900 mb-2">Explore More</h4>
                                <p className="text-sm text-gray-600 mb-4">Discover more men&#39;s health issues and
                                    treatment options.</p><NavLink to="/mens-health"
                                    className="text-custom font-medium text-sm">View All →</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-white">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Health Tips &amp; Insights</h2>
                        <div className="bg-gray-50 rounded-xl p-8 shadow-inner">
                            <div className="glide">
                                <div className="glide__track" data-glide-el="track">
                                    <ul className="glide__slides">
                                        <li className="glide__slide">
                                            <h3 className="text-lg font-medium text-gray-900 mb-2">Maintaining Hormonal
                                                Balance</h3>
                                            <p className="text-sm text-gray-600">Learn about natural ways to support your
                                                hormonal health through diet and lifestyle changes.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Community Support</h2>
                        <div className="space-y-4">
                            <div
                                className="bg-gray-50 rounded-xl p-8 shadow-inner hover:bg-gray-100 transition-all duration-200">
                                <h3 className="text-lg font-medium text-gray-900 mb-2">PCOS Support Group</h3>
                                <p className="text-sm text-gray-600 mb-4">Join 5000+ members sharing experiences and
                                    support.</p>
                                <button
                                    className="bg-custom text-white !rounded-button px-4 py-2 text-sm font-medium hover:bg-opacity-90">Join
                                    Group</button>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="fixed bottom-6 right-6 z-50"><button
            className="bg-custom text-white !rounded-full px-6 h-14 flex items-center justify-center shadow-xl hover:bg-opacity-90 transition-all duration-200"
            onClick= {toggleChatPanel} ><img className="text-xl font-bold mr-2 w-8 h-8" src={aiagent} /><span className="text-sm">AI Health
                Assistant</span></button>
        <div id="chat-panel"
            className="hidden fixed bottom-24 right-6 w-96 bg-white rounded-lg shadow-xl border border-gray-200">
            <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold">AI Health Assistant</h3>
            </div>
            <div className="p-6 space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100">
                    <h4 className="font-medium mb-2">PCOS Symptoms</h4>
                    <p className="text-sm text-gray-600">Learn about common symptoms and early warning signs of PCOS</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100">
                    <h4 className="font-medium mb-2">Fertility Concerns</h4>
                    <p className="text-sm text-gray-600">Understanding fertility issues and treatment options</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100">
                    <h4 className="font-medium mb-2">Hormonal Imbalance</h4>
                    <p className="text-sm text-gray-600">Identify symptoms and natural remedies for hormonal balance</p>
                </div>
            </div>
        </div>
    </div>
   </main>
   
  );
}

export default HomeHero;
