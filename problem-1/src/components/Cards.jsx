import React, { useState } from "react";

function Cards() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <div className="w-full h-screen bg-zinc-900 flex flex-col items-center p-10 text-white">
      <button
        onClick={fetchUser}
        className="bg-green-600 px-8 py-2 rounded-md font-semibold mb-5"
      >
        Get new Card
      </button>
      <div className="cards flex gap-5 flex-wrap">
        {user && (
          <div className="card w-68 p-4 rounded-lg bg-zinc-700 text-center">
            <img
              src={user.picture.large}
              alt="User"
              className="w-20 h-20 rounded-2xl mb-4 mx-auto"
            />
            <h2 className="text-lg font-bold">{user.name.first} {user.name.last}</h2>
            <h5 className="text-sm text-gray-400">{user.gender}</h5>
            <h6 className="text-sm text-gray-300">{user.email}</h6>
            <p className="text-xs text-gray-400 mt-2">
              {user.location.city}, {user.location.country}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;
