import { getllamaAnswer } from "./llama";

const handleLlamaQuery = async ({
  input,
  existingData,
  setData,
  setInput,
  navigate,
}) => {
  try {
    if (!input) {
      throw new Error("Input cannot be empty");
    }
    const LlamaResp = await getllamaAnswer(input);
    
    if (LlamaResp.status === 404) {
      throw new Error("Your input can't be empty!");
    }

    if (LlamaResp.status === 200) {
      const newResponse = {
        question: input,
        answer: LlamaResp.data.summary,
      };
      const updatedData = [...existingData, newResponse];
      setData(updatedData);
      localStorage.setItem("chatHistory", JSON.stringify(updatedData));
      setInput && setInput("");
      navigate && navigate("/chat");
    }
  } catch (error) {
    return error;
  }
};

export { handleLlamaQuery };