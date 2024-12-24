export const validatePhoneNumber = (value) => {
    if (!value) return ""; 
    const numericValue = value.replace(/[^\d]/g, "");
    return numericValue.substring(0, 10);
  };
  