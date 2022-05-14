import React from 'react';

const Landing = () => {
    return (
        <div class="hero min-h-screen bg-base-200 mt-16">
  <div class="hero-content flex-col lg:flex-row">
    
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
  </div>
</div>
    );
};

export default Landing;