import React from 'react';
import { useSelector } from 'react-redux';
import './CryptoTable.css';

// Import all logo images
import btcLogo from '../assets/icons/btc.png';
import ethLogo from '../assets/icons/eth.png';
import usdtLogo from '../assets/icons/usdt.png';
import xrpLogo from '../assets/icons/xrp.png';
import bnbLogo from '../assets/icons/bnb.png';

// Use correct chart2.svg instead of non-existing chart2.png
import chart1 from '../assets/icons/chart1.svg';
import chart2 from '../assets/icons/chart2.svg';

function CryptoTable() {
  const cryptos = useSelector(state => state.crypto.cryptos);

  // Create logo mapping object
  const cryptoLogos = {
    BTC: btcLogo,
    ETH: ethLogo,
    USDT: usdtLogo,
    XRP: xrpLogo,
    BNB: bnbLogo
  };

  // Function to get chart image based on index
  const getChartImage = (index) => {
    return index % 2 === 0 ? chart1 : chart2;
  };

  return (
    <table className="crypto-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Logo</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>1h %</th>
          <th>24h %</th>
          <th>7d %</th>
          <th>Market Cap</th>
          <th>24h Volume</th>
          <th>Circulating Supply</th>
          <th>Max Supply</th>
          <th>7D Chart</th>
        </tr>
      </thead>
      <tbody>
        {cryptos.map((coin, idx) => (
          <tr key={coin.id}>
            <td>{idx + 1}</td>

            {/* Coin Logo */}
            <td>
              {cryptoLogos[coin.symbol] ? (
                <img
                  src={cryptoLogos[coin.symbol]}
                  alt={`${coin.name} logo`}
                  width="32"
                  height="32"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              ) : (
                <div className="logo-placeholder">{coin.symbol}</div>
              )}
            </td>

            <td>{coin.name}</td>
            <td>{coin.symbol}</td>
            <td>${coin.price.toLocaleString()}</td>

            <td style={{ color: coin.change1h > 0 ? 'green' : 'red' }}>
              {coin.change1h}%
            </td>

            <td style={{ color: coin.change24h > 0 ? 'green' : 'red' }}>
              {coin.change24h}%
            </td>

            <td style={{ color: coin.change7d > 0 ? 'green' : 'red' }}>
              {coin.change7d}%
            </td>

            <td>${coin.marketCap.toLocaleString()}</td>
            <td>${coin.volume24h.toLocaleString()}</td>
            <td>{coin.circulatingSupply.toLocaleString()}M</td>
            <td>{coin.maxSupply ? `${coin.maxSupply.toLocaleString()}M` : 'N/A'}</td>

            {/* Chart Image */}
            <td>
              <img
                src={getChartImage(idx)}
                alt="7-day chart"
                width="80"
                height="40"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CryptoTable;
