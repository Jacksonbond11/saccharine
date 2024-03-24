import React from "react";

const Hero = () => {


  const backgroundStyle = {
    backgroundImage: "url('/bg.webp')",
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundClip: 'border-box',
    opacity: 0.8, 
  };


  return (
    <div>
      <div className="pb-8 text-center bg-cover bg-opacity-90 text-white" style={backgroundStyle}>
        <div>

        <h1 className="text-7xl font-semibold">saccharine</h1>
        <h2 className="text-5xl font-thin">"life is sweet"</h2>
      </div>
      <div className="hero min-h-1/2">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">sign up now</h1>
            <p className="py-6">be the first to know when the store opens.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
                  </div>
    </div>
  );
};

export default Hero;
