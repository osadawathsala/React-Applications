import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h4>{text || 'Default value'}</h4>
      {text && (
        <div>
          <h4>Whatever return</h4>
          <h4>{name}</h4>
        </div>
      )}
      {/* {!text && (
        <div>
          <h4>Whatever value</h4>
          <h4>{name}</h4>
        </div>
      )} */}
      {name && <SomeComponent name={user.name} />}
      <h2 style={{ margin: '1rem 0' }}>Ternary Operator</h2>
      <button className='btn'>{isEditing ? 'Edit' : 'Add'}</button>
      {user ? (
        <div>
          <h4>Hello there , {user.name}</h4>
        </div>
      ) : (
        <h4>Please login!</h4>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h4>Whatever value</h4>
      <h4>{name}</h4>
    </div>
  );
};

export default ShortCircuitExamples;
