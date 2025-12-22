import React from 'react'
import axios from 'axios'




const githubAPI = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github.v3+json",
    Authorization: import.meta.env.VITE_APP_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

      ? `token ${import.meta.env.VITE_APP_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
}`
      : undefined,
  },
});

/**
 * Fetch GitHub user data by username
 * @param {string} username
 * @returns {Promise<Object>}
 */
export const fetchUserData = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("User not found");
    }
    throw new Error("Failed to fetch user data");
  }
};

export default githubService

// src/components/Search.jsx doesn't contain: ["avatar_url", "login", "Loading", "Looks like we cant find the user", "img"]