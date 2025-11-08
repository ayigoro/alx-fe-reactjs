import React, { useContext } from 'react'
import UserContext from './UserContext'


const userData = useContext(UserContext)
function UserProfile ({userData}){
  return(
    <div>
      <h2>{userData.name}</h2>
      <p>Age:{userData.age}</p>
      <p>Bio:{userData.bio}</p>
    </div>
  )
}

export default UserProfile