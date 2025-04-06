import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Loader2,
  Maximize2,
} from "lucide-react";
import { userfill, doctorlogo, paperplane, infocircle } from "../assets";
import { toast } from "react-toastify";
import { handleLlamaQuery } from "../api/handleLlama.query";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(true);
  const [Input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [Data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setData(storedData);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!Input) return toast.error("Your input can't be empty!");
      setIsLoading(true);
      await handleLlamaQuery({
        input: Input,
        existingData: Data,
        setData,
        setInput,
      });
    } catch (error) {
      toast.error(error.message || "Something went wrong");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const togglePanel = () => setIsOpen((prev) => !prev);
  // const toggleRightPanel = () => setIsRightOpen((prev) => !prev);

  return (
    <section className="relative h-screen bg-gray-50">
      <main className="flex h-full overflow-hidden">
        <aside
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } w-64 border-r border-gray-200 bg-white flex flex-col transition-all duration-300 ease-in-out relative`}
        >
          <div className="p-4 border-b border-gray-200">
            <button className="w-full bg-custom hover:bg-custom-dark text-white rounded-lg px-4 py-3 flex items-center justify-center font-medium transition-colors">
              <Plus className="mr-2" size={18} /> New Chat
            </button>
          </div>

          {/* Chat History */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Add chat history items here */}
          </div>

          <button
            className="absolute -right-3 top-5 bg-white border border-gray-200 rounded-full p-1.5 shadow-lg hover:bg-gray-50 z-10"
            onClick={togglePanel}
          >
            {isOpen ? (
              <ChevronLeft size={20} className="text-gray-600" />
            ) : (
              <ChevronRight size={20} className="text-gray-600" />
            )}
          </button>
        </aside>

        <section className="flex-1 flex flex-col bg-white shadow-inner">
          <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <div className="max-w-3xl mx-auto space-y-8">
              {/* Welcome Message */}
              <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
                <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                  Welcome to HealthChat AI
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your private, secure space for reproductive health questions.
                  All conversations are end-to-end encrypted and HIPAA
                  compliant.
                </p>
                <div className="mt-4 flex items-start bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                  <img
                    src={infocircle}
                    alt="info"
                    className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-yellow-700">
                      This information is AI-generated. For accurate diagnosis
                      and treatment, please consult a healthcare professional.
                      We are not responsible for medical decisions made based on
                      this information.
                    </p>
                  </div>
                  <button
                    className="ml-3 text-yellow-600 hover:text-yellow-800 flex-shrink-0"
                    onClick={() =>
                      document
                        .getElementById("disclaimer-modal")
                        .classList.remove("hidden")
                    }
                  >
                    <Maximize2 strokeWidth={2} className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chat Messages */}
              <ul className="space-y-8">
                {Data.map((chat, index) => (
                  <li key={index} className="space-y-8">
                    {/* User Message */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-custom flex items-center justify-center">
                          <img
                            src={userfill}
                            alt="User"
                            className="w-5 h-5 filter invert"
                          />
                        </div>
                      </div>
                      <div className="flex-1 bg-custom text-white rounded-xl p-4 shadow-lg">
                        <p className="font-medium">
                          {chat.question[0].toUpperCase() +
                            chat.question.slice(1)}
                        </p>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center border-2 border-gray-200">
                          <img src={doctorlogo} alt="AI" className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-4 shadow-lg border border-gray-200">
                        <div className="prose max-w-none text-gray-700">
                          <p>{chat.answer}</p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-200 bg-white shadow-sm">
            <div className="max-w-3xl mx-auto p-4 sm:p-6">
              <form className="relative" onSubmit={handleFormSubmit}>
                <textarea
                  rows="3"
                  className="w-full px-4 py-3 pr-16 text-gray-900 placeholder-gray-400 border border-gray-200 rounded-xl 
                           focus:ring-2 focus:ring-custom focus:border-transparent resize-none transition-all"
                  placeholder="Type your health question here..."
                  value={Input}
                  onChange={(e) => setInput(e.target.value)}
                ></textarea>

                <button
                  className={`absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 rounded-xl 
                            ${
                              isLoading
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-custom hover:bg-custom-dark"
                            } 
                            transition-colors`}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin text-white" size={20} />
                  ) : (
                    <img
                      src={paperplane}
                      alt="Send"
                      className="w-5 h-5 filter invert"
                    />
                  )}
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-500 text-center">
                HealthChat AI · HIPAA Compliant · End-to-End Encrypted
              </p>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

export default Chatbot;