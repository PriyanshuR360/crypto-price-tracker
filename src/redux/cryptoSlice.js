import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cryptos: [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      circulatingSupply: 19.85,
      maxSupply: 21,
      logo: 'btc.png',
      chart: 'chart1.svg',
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      price: 4865.22,
      change1h: -0.35,
      change24h: 1.05,
      change7d: 4.26,
      marketCap: 560231982147,
      volume24h: 20456789123,
      circulatingSupply: 120.4,
      maxSupply: 150,
      logo: 'eth.png',
      chart: 'chart2.svg',
    },
    {
      id: 3,
      name: 'Tether',
      symbol: 'USDT',
      price: 1.00,
      change1h: 0.01,
      change24h: -0.01,
      change7d: 0.00,
      marketCap: 96450912245,
      volume24h: 38576120451,
      circulatingSupply: 96.4,
      maxSupply: 100,
      logo: 'usdt.png',
      chart: 'chart3.svg',
    },
    {
      id: 4,
      name: 'XRP',
      symbol: 'XRP',
      price: 0.75,
      change1h: 0.15,
      change24h: 1.75,
      change7d: -2.12,
      marketCap: 38957120457,
      volume24h: 7641293811,
      circulatingSupply: 51.2,
      maxSupply: 100,
      logo: 'xrp.png',
      chart: 'chart4.svg',
    },
    {
      id: 5,
      name: 'BNB',
      symbol: 'BNB',
      price: 535.12,
      change1h: -0.25,
      change24h: 2.03,
      change7d: 5.68,
      marketCap: 82531947812,
      volume24h: 4812971532,
      circulatingSupply: 158.9,
      maxSupply: 200,
      logo: 'bnb.png',
      chart: 'chart5.svg',
    },
  ],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrices: (state) => {
      state.cryptos = state.cryptos.map(coin => {
        const rand = () => (Math.random() * 2 - 1).toFixed(2);
        return {
          ...coin,
          price: +(coin.price * (1 + rand() / 100)).toFixed(2),
          change1h: +rand(),
          change24h: +rand(),
          change7d: +rand(),
          volume24h: +(coin.volume24h * (1 + rand() / 100)).toFixed(2),
        };
      });
    },
  },
});

export const { updatePrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;
