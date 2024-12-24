import { useEffect, useState } from "react";
import axios from "axios";

const useCSRF = () => {
  const [csrfToken, setCsrfToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCSRFToken = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/csrf-token", {
          withCredentials: true, 
        });

        if (response.data && response.data.csrfToken) {
          setCsrfToken(response.data.csrfToken);
          setError(null); 
        } else {
          throw new Error("CSRF token not found in response");
        }
      } catch (err) {
        setError(err.message || "Error fetching CSRF token");
      } finally {
        setLoading(false);
      }
    };

    fetchCSRFToken();
  }, []);


  const attachCSRFToken = (instance) => {
    if (csrfToken) {
      instance.defaults.headers.common["X-CSRF-Token"] = csrfToken;
    }
  };

  return { csrfToken, attachCSRFToken, loading, error };
};

export default useCSRF;
