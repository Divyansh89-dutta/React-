import React, { useState, useEffect } from "react";

function Local() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  // Load stored users from localStorage on mount
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // Save users to localStorage whenever users change
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return alert("Please fill all fields!");

    const newUser = { id: Date.now(), name, email };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  };

  // Delete user from state and localStorage
  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className="w-full h-screen bg-zinc-900 text-white flex flex-col items-center p-10">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>
      <form onSubmit={handleSubmit} className="mb-5">
        <input
          type="text"
          placeholder="Name"
          className="p-2 mr-2 rounded-md text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="p-2 mr-2 rounded-md text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="bg-green-600 px-4 py-2 rounded-md">
          Add User
        </button>
      </form>

      <div className="w-1/2">
        {users.length > 0 ? (
          users.map((user) => (
            <div
              key={user.id}
              className="flex justify-between items-center bg-zinc-700 p-3 rounded-md mb-2"
            >
              <p>
                {user.name} - {user.email}
              </p>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-600 px-4 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No users added yet.</p>
        )}
      </div>
    </div>
  );
}

export default Local;
