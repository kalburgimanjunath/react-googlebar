import React, { useState, Component, setState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Avatar from './Avatar';
export default function Search(items) {
  // console.log(props);
  const [listitem, setListitem] = useState(items);
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
  // console.log(users);
  const renderList = listitem.listitem
    .filter((player) => player.name.toLowerCase().includes(player))
    .map((searchedlistitem) => {
      return (
        <tr key={searchedlistitem.name}>
          <td>
            <Link to="">{searchedlistitem.name}</Link>
          </td>
        </tr>
      );
    });
  // console.log(users);
  const renderUserList = users
    // .filter((player) => {
    //   console.log(player.name);
    //   player.name.toLowerCase().includes(player.name.toLowerCase());
    // })
    .map((item) => {
      return (
        <div className="Avatar">
          <Avatar user={item} />
        </div>
      );
    });

  return (
    <div>
      <div class="container">
        <div class="card card-login mx-auto text-center bg-dark">
          <div class="card-header mx-auto bg-dark">
            <span>
              <img
                src="https://amar.vote/assets/img/amarVotebd.png"
                class="w-75"
                alt="Logo"
              />
            </span>
            <br />
            <input type="text" value={player} onChange={onChange.bind(this)} />
          </div>

          <div class="card-body">
            {/* <table className="table table-striped">
              {listitem.listitem
                .filter((item) =>
                  item.name.toLowerCase().includes(player.toLowerCase())
                )

                .map((searchedlistitem) => {
                  return (
                    <div>
                      <tr key={searchedlistitem.name}>
                        <td>
                          <Link to="">{searchedlistitem.name}</Link>
                        </td>
                      </tr>
                      <tbody>{renderList}</tbody>
                    </div>
                  );
                })}
            </table> */}
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
                          {/* <Link to="">{searchedlistitem.name}</Link> */}
                          <Avatar user={searchedlistitem} />
                        </td>
                      </tr>
                      <tbody>{renderList}</tbody>
                    </div>
                  );
                })}
            </table>
            {renderUserList}
          </div>
        </div>
      </div>
    </div>
  );
}
