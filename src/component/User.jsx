import React from 'react'

const User = ({user}) => {
  return (
    <article>
        <img src={user.avatar} alt={user.first_name} />
        <h3>{`${user.first_name} ${user.lastname}`}</h3>
        <p>Email: {user.email}</p>
        <p>User ID:{user.id}</p>
    </article>
  )
}

export default User
