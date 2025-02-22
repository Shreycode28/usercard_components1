import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://via.placeholder.com/150"; // Placeholder image
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 234 567 890";
  const address = "123 Main Street, City, Country";

  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 w-80 text-center border border-gray-200">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4 border border-gray-300"
      />
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-gray-500 text-sm mt-2">{address}</p>
    </div>
  );
};

export default Usercard;
