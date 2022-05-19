import axios from 'axios';
import React, { useEffect, useState } from 'react';
import facther from '../api';

const Services = () => {

    const [services, setServices] = useState([])
    console.log(services);

    useEffect(()=>{
        // axios.get('http://localhost:5000/service').then(res => setServices(res))

        (async () => {
            const res = await facther.get('/service')
            setServices(res.data)
        })()
    },[]);

    return (
        <div>
            <h1>All Services</h1>
            <h1>All Services</h1>
            <h1>All Services</h1>
            <h1>All Services</h1>
            <h1>All Services</h1>
            <h1>All Services</h1>
        </div>
    );
};

export default Services;