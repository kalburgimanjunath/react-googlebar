import React, { useState, Component, setState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Avatar from './Avatar';
export default function Search(items) {
  const [player, setPlayer] = useState('');
  const [users, setUsers] = useState([]);
  const urlJson = 'https://jsonplaceholder.typicode.com/users';
  useEffect(() => {
    const fetchData = async () => {
      const users_data = await axios(urlJson);
      setUsers(users_data.data);
    };
    fetchData();
  }, [setUsers]);

  const onChange = (e) => {
    setPlayer(e.target.value);
  };

  return (
    <div>
      <div class="container">
        <div class="card card-login mx-auto text-center bg-dark">
          <div class="card-header mx-auto bg-dark">
            <span>
              <h1>Google </h1>
            </span>
            <br />
            <input type="text" value={player} onChange={onChange.bind(this)} />
          </div>
          <div class="card-body">
            <table className="table table-striped">
              {users
                .filter((item) =>
                  item.name.toLowerCase().includes(player.toLowerCase())
                )
                .map((searchedlistitem) => {
                  return (
                    <div>
                      <tr key={searchedlistitem.name}>
                        <td>
                          <Link>
                            <Avatar user={searchedlistitem} />
                          </Link>
                        </td>
                      </tr>
                    </div>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
