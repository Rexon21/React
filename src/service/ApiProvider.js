import axios from 'axios';
import React, { createContext, useContext, useEffect } from 'react';

const AppContext = createContext();

export const ApiProvider = ({ children }) => {

  const baseURL = (() => {
    switch (process.env.REACT_APP_STAGE) {
      case 'local':
        return process.env.REACT_APP_BASE_URL_LOCAL;
      case 'production':
        return process.env.REACT_APP_BASE_URL_PRODUCTION;
      case 'test':
        return process.env.REACT_APP_BASE_URL_TEST;
      default:
        console.log("invalid environment");
        return "";
    }
  })();

  console.log("<<< baseURL >>>:", baseURL);

  /**
   * Generic API handler
   * @param {string} method - HTTP method (GET, POST, PUT, DELETE, etc.)
   * @param {string} url - API endpoint relative to baseURL
   * @param {object} [data] - Request body data for POST/PUT requests
   * @param {object} [params] - Query parameters for the request
   * @param {object} [headers] - Custom headers for the request
   * @param {object} [config] - Additional Axios configuration options
   * @returns {Promise<object>} - API response or error
   */
  const apiRequest = async ({ method, url, data = {}, params = {}, headers = {}, config = {} }) => {
    try {
      const response = await axios({
        method,
        url: `${baseURL}${url}`,
        data, // Used for request body (e.g., POST/PUT)
        params, // Used for query params (e.g., GET)
        headers,
        ...config, // Merges any additional Axios configuration options
      });
      return response; // Returning the response
    } catch (error) {
      console.error("API Request Failed:", error);
      return error;
    }
  };

  return (
    <AppContext.Provider value={{ apiRequest }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};