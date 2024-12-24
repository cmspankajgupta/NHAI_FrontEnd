
export const formatCurrency = (amount, currency = "$", locale = "en-US") => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency.replace(/[^\w]/g, ""), // Remove any non-alphanumeric characters
      minimumFractionDigits: 2,
    }).format(amount);
  };
  

  export const formatDate = (date, locale = "en-US", options = {}) => {
    const defaultOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat(locale, { ...defaultOptions, ...options }).format(new Date(date));
  };
  

  export const truncateString = (text, maxLength = 50) => {
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };
  

  export const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  

  export const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  

  export const toTitleCase = (text) => {
    return text
      .split(" ")
      .map((word) => capitalizeFirstLetter(word))
      .join(" ");
  };
  

  export const maskString = (text, visibleChars = 4) => {
    const maskedLength = text.length - visibleChars;
    const maskedPart = "*".repeat(maskedLength > 0 ? maskedLength : 0);
    return maskedPart + text.slice(-visibleChars);
  };
  

  export const formatPercentage = (value, decimals = 2) => {
    return `${parseFloat(value).toFixed(decimals)}%`;
  };
  
  export default {
    formatCurrency,
    formatDate,
    truncateString,
    formatNumberWithCommas,
    capitalizeFirstLetter,
    toTitleCase,
    maskString,
    formatPercentage,
  };
  