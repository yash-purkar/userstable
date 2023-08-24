// import React from 'react'

export const Navbar = () => {
  return (
    <nav className="flex justify-between text-white bg-indigo-400 p-3 mb-10">
      <h1 className="text-2xl font-bold">UsersTable</h1>
      <ul className="flex gap-10 text-lg">
        <li className="cursor-not-allowed">Home</li>
        <li className="cursor-not-allowed">About</li>
        <li className="cursor-not-allowed">Contact</li>
      </ul>
    </nav>
  )
}
