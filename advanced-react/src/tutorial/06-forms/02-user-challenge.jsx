import { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakedId = Date.now();
    const newUser = { id: fakedId, name };
    console.log(newUser);
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setName('');
  };

  const removeUser = (id) => {
    console.log('id', id);
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>

      <h2> Users </h2>
      {users.map((user) => {
        const { id, name } = user;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button
              className='btn'
              onClick={() => {
                removeUser(id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default UserChallenge;
