import React from 'react';
export default function Avatar({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>
        <div>Email:{user.email}</div>
        <div>Email:{user.phone}</div>
        <div>Email:{user.username}</div>
        <div>Email:{user.website}</div>
      </p>
    </div>
  );
}
