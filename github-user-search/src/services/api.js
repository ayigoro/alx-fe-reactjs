import React from 'react'





const GITHUB_API_KEY = import.meta.env.VITE_APP_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
const fetchRepo = async ()=> {
  const response = await fetch ("https://api.github.com/user/repos", {
    headers:{
      Authorization : 'token ${GITHUB_API_KEY}',
    },
  })
    return response.json()
}


export default api