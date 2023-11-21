import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const user = await response.json();
      console.log(user);
      setUser(user);
      setIsLoading(false);
    };

    fetchUser().catch((error) => {
      setIsError(true);
      setIsLoading(false);
      console.error('Error:', error);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading......</h2>;
  }
  if (isError) {
    return <h2>There is an error......</h2>;
  }

  const { name, avatar_url, bio, company } = user;

  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>Works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
