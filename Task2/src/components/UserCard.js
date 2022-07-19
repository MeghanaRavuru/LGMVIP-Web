import React from 'react'
import './UserCard.css'
const UserCard = (props) => { 
  let {id,avatar,name,email} = props
  return (
    <>
      <div className="card" >
        <img src={avatar} alt="" className="card-img" />
        <div className="card-info">
          <div className="num"><span>ID:</span><span className="user-id">{id}</span></div>
          <div className=""><span>Name:</span><span className="name">{name}</span></div>
          <div className=""><span>Email:</span><span className="email">{email}</span></div>

        </div>
      </div>
    </>
  )
}

export default UserCard