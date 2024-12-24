//Sanitizing a String
export const sanitizeString = (str) => {
    if (!str || typeof str !== "string") return str;
  
    const map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;",
    };
  
    return str.replace(/[&<>"'/`=]/g, (char) => map[char]);
  };

//Sanitizing a sanitizeObject
  export const sanitizeObject = (obj) => {
    if (!obj || typeof obj !== "object") return obj;
  
    const sanitizedObject = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const value = obj[key];
        sanitizedObject[key] =
          typeof value === "string"
            ? sanitizeString(value)
            : typeof value === "object"
            ? sanitizeObject(value)
            : value;
      }
    }
    return sanitizedObject;
  };


  //Stripping HTML Tags
  export const stripHtmlTags = (str) => {
    if (!str || typeof str !== "string") return str;
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  };
  
//   Sanitizing an Array
  export const sanitizeArray = (arr) => {
    if (!Array.isArray(arr)) return arr;
    return arr.map((item) => {
      if (typeof item === "string") {
        return sanitizeString(item);
      } else if (typeof item === "object" && !Array.isArray(item)) {
        return sanitizeObject(item);
      } else if (Array.isArray(item)) {
        return sanitizeArray(item);
      }
      return item;
    });
  };
  
//   General Sanitization
  export const sanitize = (input) => {
    if (typeof input === "string") {
      return sanitizeString(input);
    } else if (typeof input === "object" && !Array.isArray(input)) {
      return sanitizeObject(input);
    } else if (Array.isArray(input)) {
      return sanitizeArray(input);
    }
    return input;
  };
  
  export default {
    sanitizeString,
    sanitizeObject,
    stripHtmlTags,
    sanitizeArray,
    sanitize,
  };
  