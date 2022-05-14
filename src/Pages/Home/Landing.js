import React from 'react';
import heroimg from '../../assets/images/bucketgirl.png'

const Landing = () => {
    return (
        <>
        <div class="hero h-screen lg:h-[60vh] bg-accent relative z-0 mt-16">
  <div class="hero-content flex-col lg:flex-row">
    
    <div>
        <small>Best Quality</small>
      <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
      <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
    <div className='h-[60vh] shrink-0'>
    <img src={heroimg} className='h-full' alt='heroimg' />
    </div>
  </div>
</div>
<div className='rounded-2xl mx-auto shadow-lg relative z-20 p-10 w-5/6 bg-base-100'>
    <h1>Get Free Estimate</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
    </div>
</div>
</>
    );
};

export default Landing;