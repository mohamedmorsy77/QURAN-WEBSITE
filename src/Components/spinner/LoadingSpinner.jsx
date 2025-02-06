import React from "react";
import { Circles } from "react-loader-spinner";

function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center mt-4">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
}

export default LoadingSpinner;
