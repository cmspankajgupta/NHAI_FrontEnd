const envConfig = {
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL || "http://localhost:3000",

    ENABLE_FEATURE_X: process.env.REACT_APP_ENABLE_FEATURE_X === "true",

    AUTH_SERVICE_URL: process.env.REACT_APP_AUTH_SERVICE_URL || "http://localhost:4000/auth",
    DIGILOCKER_AUTH_URL: process.env.REACT_APP_DIGILOCKER_AUTH_URL || "https://digilocker.gov.in/auth",

    APP_ENV: process.env.REACT_APP_ENV || "development",
    APP_VERSION: process.env.REACT_APP_VERSION || "1.0.0",

    LOG_LEVEL: process.env.REACT_APP_LOG_LEVEL || "info",
    DEVICE_ID : process.env.REACT_DEVICE_ID || 'Windows1O0G1GYY2RFJE',
    CLIENT_ID : process.env.REACT_CLIENT_ID || '25UT2GT2I8T28T2JG2282GG8G2GU2U2IB1VC11O0G1GYY2RFJE'
};

export default envConfig;
