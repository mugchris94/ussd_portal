import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/dash.css';
import home_icon from '../images/home_icon.png';
import profile from '../images/profile.jpg';
import apps_add from '../images/apps_add.png';
import DataTable from '../Views/DataTable';
import Dashcard from './Dashcard';
import Updates from "../Views/Updates.jsx";


const Dashboard = () => {

    const [items, setItems] = useState([]);

    useEffect(()=>{
        axios.get("https://dummyjson.com/carts/1")
                .then((response)=>{
                    return response.data;
                })
                .then((res)=>{
                    const carts = res.products;
                    if(carts.length = 3){
                        setItems(carts)
                    }
                })
            })
           

    return ( 
        <div className="dash-wrapper">
            <div className="dash-nav">
                <h3>
                    BlueBoxPortal
                </h3>
                <form className="nav-form">
                    <input type="text" placeholder=""/>
                    <input type="submit" value="Search"/>
                </form>
                <nav>
                    <ul>
                        <li><a href='#'>Log In</a></li>
                        <li><a href='#'>Register</a></li>
                        <li><a href='#'>Contact Us</a></li>
                    </ul>
                </nav>
            </div>
            <div className='dash-content'>
            <div className="side-nav">
                <div className='profile'>
                    <img src={profile} alt="profile"/>
                    
                    <ul className="user_detail">
                        <li className='active'>Christian Mugisha</li>
                        <li>Lead Software Developer</li>
                    </ul>
                    
                </div>
                <table>
                    <thead>
                        <th>Dashboard</th><th><img src={apps_add} alt='home_i'/></th>
                    </thead>
                    <tbody>
                        <tr><td>Dashboard</td> <td><img src={home_icon}/></td></tr>
                        <tr><td>Orders</td><td><img src={apps_add} alt="app_add"/></td></tr>
                        <tr><td>Customers</td></tr>
                        <tr><td>Products</td></tr>
                        <tr><td>Analytics</td></tr>
                        <tr><td>Trends</td></tr>
                        <tr><td>Billing</td></tr>
                    </tbody>

                </table>
                <form className='addProject'>
                    <input type="button" value="Add Projects" />
                </form>
            </div>

            <div className='main_wrapper'>
            <div className='content_wrapper'>
                <h2><img src={apps_add} alt="app_add"/>
                    Dashboard
                </h2>
                
                <div className='card-list'>
                {items.map((item) => {
                    return(
                    <Dashcard 
                        title = {item.title} 
                        price= {item.price} 
                        quantity={item.quantity}
                        total = {item.total}
                        discount = {item.discountPercentage}
                        />
                    )}
                )
                }
                    
                </div>

                <DataTable />

            </div>
            <Updates />
            </div>
            </div>
        </div>
     );
}
 
export default Dashboard;