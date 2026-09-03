const config = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix --'],
  '**/*.{js,jsx,tsx,ts,less,md,json}': ['prettier --write'],
};

export default config;
