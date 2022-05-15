import React from 'react';
import heroimg from '../../assets/images/bucketgirl.png'

const Landing = () => {
  return (
    <>
      <div class="hero h-screen lg:h-[60vh] bg-accent relative z-0 mt-16">
        <div class="hero-content flex-col lg:flex-row">

          <div>
            <small data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-delay='200'>
              Best Quality
            </small>
            <h1 data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-delay='400'
              class="text-5xl font-bold">
              Professional Cleaning Service
            </h1>
            <p data-aos='fade-right'
              data-aos-duration='1000'
              data-aos-delay='600'
              class="py-6 max-w-xl">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button
              data-aos='zoom-in'
              data-aos-delay='1000'
              class="btn btn-primary">
              Get Started
              </button>
          </div>
          <div className='h-[60vh] shrink-0'>
            <img src={heroimg} className='h-full' alt='heroimg' />
          </div>
        </div>
      </div>
      <div className='rounded-2xl mx-auto shadow-lg relative z-20 p-10 w-5/6 bg-base-100 mt-[-50px]'>
        <h1 className='text-2xl text-primary mb-5'>Get Free Estimate</h1>
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
        <button className='btn btn-primary mt-5'>Get a Quote</button>
      </div>
    </>
  );
};

export default Landing;