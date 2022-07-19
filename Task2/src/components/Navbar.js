import React, { useState } from 'react'
import './Navbar.css'
import Spinner from './Spinner';
import UserCard from './UserCard';


const Navbar = () => {

  const [gotUser, setgotUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([])

  const but = async () => {
    setLoading(true);
    const data = await fetch('https://reqres.in/api/users?page=1');
    const findata = (await data.json()).data;

    setUsers(findata)
    setgotUser(true);
    setLoading(false);
  }
  return (
    <>
      <nav className='navbar'>
        <ul>
          <li>
            <img src="https://letsgrowmore.in/wp-content/uploads/2021/05/Artboard-1-1-removebg-preview-e1645900071758.jpg" alt="LGMVIP" className='logo' />
          </li>
          <li className='buton'><button className='user' onClick={but}>Get Users</button></li>

        </ul>
      </nav>

      <div className="container" style={{ display: "grid", gridTemplateColumns: 'auto auto auto', rowGap: '20px', margin: 'auto', backgroundColor: '#fff' }}>{
        gotUser && !(loading) && (users.map((element) => {
          return (<div key={element.id} style={{ margin: '30px auto' }} >
            <UserCard id={element.id} avatar={element.avatar} name={element.first_name + " " + element.last_name} email={element.email} />
          </div>)
        }))
      }</div>

      <div>
        {
          !(gotUser) && (loading) && <Spinner/>
        }
      </div>


    </>
  )
}

export default Navbar
