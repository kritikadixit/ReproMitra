import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, Loader2 } from "lucide-react";
import { userfill, doctorlogo, paperplane } from "../assets";
import { toast } from "react-toastify";
import { getGeminiAnswer } from "../api/gemini";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(true);
  // const [isRightOpen, setIsRightOpen] = useState(true);
  const [Input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [Data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setData(storedData);
  }, []);

  const togglePanel = () => setIsOpen((prev) => !prev);
  // const toggleRightPanel = () => setIsRightOpen((prev) => !prev);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!Input) {
        toast.error("Your input can't be empty!");  
      }
      setIsLoading(true);
      const geminiResp = await getGeminiAnswer({ prompt: Input });
      if (geminiResp.status === 404) {
        toast.error("Your input can't be empty!");
      }
      if (geminiResp.status === 200) {
        const newResponse = {
          question: Input,
          answer: geminiResp.data.message,
        };
        const updatedData = [...Data, newResponse];
        setData(updatedData);
        localStorage.setItem("chatHistory", JSON.stringify(updatedData));
        setInput("");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative">
      <main className="flex-1 flex overflow-hidden">
        <aside
          className={`${
            isOpen ? "w-64" : "-translate-x-64 w-64"
          } border-r border-gray-200 bg-white flex flex-col transition-all duration-300 ease-in-out relative`}
        >
          <div className="p-4">
            <button className="w-full bg-custom text-white rounded-md px-4 py-2 flex items-center justify-center font-medium">
              <Plus className="mr-2" size={16} /> New Chat
            </button>
          </div>
          <button
            className="absolute -right-10 top-5 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:bg-gray-50"
            onClick={togglePanel}
          >
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </aside>
        <section className="flex-1 flex flex-col bg-white py-6 sm:py-10 mb-5">
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">

            
            <ul className="max-w-3xl mx-auto space-y-6">
              {Data.map((chat, index) => (
                <li key={index} className="space-y-4 flex flex-col">
                  {/* User Message */}
                  <div className="flex items-center space-x-3">
                    <img
                      src={userfill}
                      alt="User Icon"
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="flex-1 bg-gray-100 text-gray-900 rounded-lg p-4 shadow-sm">
                      <p className="font-medium ">
                        {chat.question[0].toUpperCase() +
                          chat.question.slice(1)}
                      </p>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start space-x-3">
                    <img
                      src={doctorlogo}
                      alt="AI-consultant"
                      className="h-8 w-8 rounded-full"
                    />
                    <div className="flex-1 bg-gray-50 text-gray-800 rounded-lg p-4 shadow-sm border border-gray-200">
                      <p>{chat.answer}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Chat Input Section */}
          <div className="border-t border-gray-200 p-4">
            <div className="max-w-3xl mx-auto flex items-end space-x-4">
              <form
                className="flex-1 bg-white border border-gray-200 rounded-lg shadow-sm"
                onSubmit={handleFormSubmit}
              >
                <textarea
                  rows="3"
                  className="block w-full resize-none border-0 bg-transparent py-2 px-4 text-gray-900 placeholder-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Type your health question here..."
                  value={Input}
                  onChange={(e) => setInput(e.target.value)}
                ></textarea>

                {/* Input Controls */}
                <div className="flex items-center justify-between p-2 border-t border-gray-200">
                  <button
                    className={`flex items-center gap-2 rounded-md text-white px-4 py-2 font-medium transition ${
                      isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-custom hover:bg-custom-dark"
                    }`}
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin text-blue-500" />
                    ) : (
                      <>
                        <img src={paperplane} alt="send" />
                        Send
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

export default Chatbot;