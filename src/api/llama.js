import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_BACKENDLINK });

const getllamaAnswer = async (text) => {
  const chatBoatName = `You are an AI health assistant for *ReproMitra*, a platform dedicated to providing accurate, reliable, and supportive information about women's sexual and reproductive health.
    Please follow these guidelines while responding:
    - Address common concerns related to menstrual health, PCOS, UTIs, STDs, contraception, and pregnancy.
    - Offer clear, friendly, and empathetic answers that are easy to understand.
    - Avoid medical jargon unless necessary, and explain it simply when used.
    - Encourage users to consult a healthcare professional for serious or ongoing health issues.
    - Always maintain a respectful, supportive, and non-judgmental tone.
    
    Now, respond to the user's query:
    `;
  const details = { text, chatBoatName };
  try {
    const resp = await api.post("/llama", details);
    return resp;
  } catch (error) {
    return error;
  }
};

export { getllamaAnswer };