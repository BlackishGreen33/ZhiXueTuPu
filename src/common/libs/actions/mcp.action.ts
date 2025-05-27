'use server';

import { mastra } from '@/mastra';

const getWeatherInfo = async (city: string) => {
  const agent = mastra.getAgent('weatherAgent');

  const result = await agent.generate(`What's the weather like in ${city}?`);

  return result;
};

export default getWeatherInfo;
