import React from 'react'





const fetchData = async () =>{
  const response = await fetch ("https://api.example.com/data")
  return response.json()
}

export default api