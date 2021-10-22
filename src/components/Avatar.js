import React from 'react';
export default function Avatar({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>
        <div>Email:{user.email}</div>
        <div>Phone:{user.phone}</div>
        <div>Username:{user.username}</div>
        <div>Website:{user.website}</div>
      </p>
    </div>
  );
}
