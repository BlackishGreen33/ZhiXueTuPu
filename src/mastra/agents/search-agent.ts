import { google } from '@ai-sdk/google';
import { Agent } from '@mastra/core/agent';
import { LibSQLStore } from '@mastra/libsql';
import { Memory } from '@mastra/memory';

import { searchTool } from '../tools/search-tool';

export const searchAgent = new Agent({
  name: 'Search Agent',
  instructions: `
      You are a helpful search assistant that uses DuckDuckGo to find information.

      Your primary function is to help users find relevant information on the web. When responding:
      - Use the search tool to find relevant web results
      - Provide concise summaries of the most relevant results
      - Include links to original sources when appropriate
      - If no relevant results are found, explain this to the user
      - Keep responses informative and helpful

    # Tools
    - SEARCH_WEB: perform web search
  `,
  model: google('gemini-2.0-flash'),
  tools: { SEARCH_WEB: searchTool },
  memory: new Memory({
    storage: new LibSQLStore({
      url: 'file:../mastra.db', // path is relative to the .mastra/output directory
    }),
  }),
});
