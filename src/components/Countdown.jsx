import React from "react";

const Countdown = () => {
  return (
    <div className="m-auto p-6">
      <div className="flex gap-5 justify-center">
        <div>
          <span className="countdown font-mono text-6xl">
            <span style={{ "--value": 15 }}></span>
          </span>
          days
        </div>
        <div>
          <span className="countdown font-mono text-6xl">
            <span style={{ "--value": 10 }}></span>
          </span>
          hours
        </div>
        <div>
          <span className="countdown font-mono text-6xl">
            <span style={{ "--value": 24 }}></span>
          </span>
          min
        </div>
        <div>
          <span className="countdown font-mono text-6xl">
            <span style={{ "--value": 51 }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default Countdown;
