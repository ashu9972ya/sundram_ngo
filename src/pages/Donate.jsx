// Donate.js
import React from "react";

const Donate = () => {
  const googlePayQRCodeData = "your-google-pay-qr-code-data";

  return (
    <div className="donate-container p-8 bg-white shadow-md rounded-md max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Support Us with a Donation
      </h1>

      <div className="qr-code-container mb-6 flex justify-center">
        <img
          src={googlePayQRCodeData}
          alt="Google Pay QR Code"
          className="w-64 h-64"
        />
      </div>

      <p className="text-base mb-6 text-center">
        Scan the QR code with Google Pay to make a donation.
      </p>

      {/* Donate Button with Tailwind CSS */}
      <button className="bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 focus:outline-none focus:shadow-outline-green active:bg-green-700 w-full">
        <span className="font-semibold">Donate Now</span>
      </button>
    </div>
  );
};

export default Donate;
