import { useEffect } from 'react';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems('random'));
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
