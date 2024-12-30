const env = "test";
const envConfigs = {
  dev: {
    API_BASE_URL: "https://run.mocky.io/v3" || process.env.REACT_APP_API_BASE_URL,
  },
  test: {
    API_BASE_URL: "http://192.168.100.164:3000/api" || process.env.REACT_APP_API_BASE_URL,
  },
  prod: {
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  },
};
const envConfig = envConfigs[env];

export default envConfig;
