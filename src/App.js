import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePrices } from './redux/cryptoSlice';
import CryptoTable from './components/CryptoTable';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, 2000); // Update every 2 seconds
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      <h1>Real-Time Crypto Price Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
