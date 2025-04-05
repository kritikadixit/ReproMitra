import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_BACKENDLINK });
const getGeminiAnswer = async (prompt) => {
  try {
    const resp = await api.post("/gemini", prompt);
    return resp;
  } catch (error) {
    return error;
  }
};
export { getGeminiAnswer };