export const decodeToken = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((c) => `%${c.charCodeAt(0).toString(16).padStart(2, "0")}`)
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Invalid JWT token:", error);
      return null;
    }
  };
  

  export const isTokenExpired = (token) => {
    const decoded = decodeToken(token);
    if (!decoded || !decoded.exp) {
      return true; 
    }
    const currentTime = Math.floor(Date.now() / 1000); 
    return decoded.exp < currentTime;
  };

  export const getClaimFromToken = (token, claimKey) => {
    const decoded = decodeToken(token);
    return decoded && decoded[claimKey] !== undefined ? decoded[claimKey] : null;
  };
  

  export const isValidToken = (token) => {
    if (!token) return false;
    return !isTokenExpired(token);
  };
  

  export const storeToken = (token, useSession = false) => {
    const storage = useSession ? sessionStorage : localStorage;
    storage.setItem("jwtToken", token);
  };
  

  export const getToken = (useSession = false) => {
    const storage = useSession ? sessionStorage : localStorage;
    return storage.getItem("jwtToken");
  };
  

  export const removeToken = (useSession = false) => {
    const storage = useSession ? sessionStorage : localStorage;
    storage.removeItem("jwtToken");
  };
  

  export const setAuthHeader = (axiosInstance, useSession = false) => {
    const token = getToken(useSession);
    if (token && isValidToken(token)) {
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axiosInstance.defaults.headers.common["Authorization"];
    }
  };
  
  export default {
    decodeToken,
    isTokenExpired,
    getClaimFromToken,
    isValidToken,
    storeToken,
    getToken,
    removeToken,
    setAuthHeader,
  };
  