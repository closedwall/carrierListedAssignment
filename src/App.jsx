import React, { useState } from 'react'
import './App.css'
import Revenue from './Icons/Revenue.png'
import Like from './Icons/Like.png'
import Transactions from './Icons/Transactions.png'
import Users from './Icons/Users.png'
import Notification from './Icons/Notification.png'
import PieChart from './Components/PieChart'
import LineGraph from './Components/LineGraph'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect, user, isAuthenticated, isLoading, logout } = useAuth0();
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  }

  );

  return (
    <div className='dashboard'>
      <div id='sidebar' className="sidebar">
        <h1>Board.</h1>
        <div className='sidecontent'>
          <ul>
            <li>Dashboard</li>
            <li>Transactions</li>
            <li>Schedules</li>
            <li>Users</li>
            <li>Settings</li>
          </ul>
          <ul>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div id='navbar' className="navbar">
        <div className='navcontent'>
          <h2>Dashboard</h2>
          <div>
            <input type="text" placeholder='Search...' />
            <img src={Notification} alt="notification" />
            {
              isAuthenticated ?
                <div className='authentication'>
                  <button className='logoutbtn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    <img className='avatar' src={user.picture} alt={user.name} />
                  </button>
                </div>
                :
                <button className='loginbtn' onClick={() => loginWithRedirect()}>Log In</button>
            }
          </div>
        </div>
      </div>
      <div id='card1' className="card">
        <img src={Revenue} alt="revenue" />
        <div className='cardcontent'>
          <p>Total revenues</p>
          <h3>$2,129430</h3>
        </div>
      </div>
      <div id='card2' className="card">
        <img src={Like} alt="like" />
        <div className='cardcontent'>
          <p>Total Transactions</p>
          <h3>15,20</h3>
        </div>
      </div>
      <div id='card3' className="card">
        <img src={Transactions} alt="transactions" />
        <div className='cardcontent'>
          <p>Total Likes</p>
          <h3>9,721</h3>
        </div>
      </div>
      <div id='card4' className="card">
        <img src={Users} alt="users" />
        <div className='cardcontent'>
          <p>Total Users</p>
          <h3>892</h3>
        </div>
      </div>
      <div id='activity' className="activity">
        Activites
        <LineGraph />
      </div>
      <div id='products' className="topproducts">
        <div style={{ display: "flex", justifyContent: 'space-between' }}>
          <h3>Top Products</h3>
          <small>may-june 2021 &#8744;</small>
        </div>
        <div style={{ marginTop: "2vh" }}>
          <PieChart />
        </div>
      </div>
      <div id='schedule' className="schedule">
        <div style={{ display: "flex", justifyContent: 'space-between' }}>
          <h3>Today's schedules</h3>
          <small>See All &gt;</small>
        </div>
        <div style={{ marginTop: "2vh" }}>
          <div >
            <div className='schedulecontent'>
              <div className="verticalbar verticalbarone"></div>
              <div>
                <p>Meeting with suppliers from kuta bali</p>
                <p><span className='faded-small'>14.00 - 15.00</span></p>
                <p><span className='faded-small'>at Sunset Road, Kuta, Bali</span></p>
              </div>
            </div>
            <div className='schedulecontent'>
              <div className="verticalbar verticalbartwo"></div>
              <div>
                <p>Check operation at Giga Factory 1</p>
                <p><span className='faded-small'>18.00-20.00</span></p>
                <p><span className='faded-small'>at Central jhakarta</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
