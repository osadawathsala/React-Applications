import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const users = await response.json();

      setUsers(users);
    };
    fetchData();
  }, []);

  return (
    <section>
      <h2>Github Users</h2>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h2>{login}</h2>
                <a href={html_url}> Profile </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
