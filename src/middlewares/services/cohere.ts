import cohere from "cohere-ai";

cohere.init('0S33Ujnh4d7FbVP1heEgDbXG0a2c6QeVHtbK2qX6');

export const aiQuery = async (query: string) => {
  try {
    const response = await cohere.generate({
      model: 'xlarge',
      prompt: query,
      max_tokens: 100,
      temperature: 0.8,
      k: 0,
      p: 1,
      presence_penalty: 0,
      stop_sequences: [],
      return_likelihoods: 'NONE'
    });
    return response.body.generations[0].text;    
  } catch (error) {
    console.error(error);
  }
};