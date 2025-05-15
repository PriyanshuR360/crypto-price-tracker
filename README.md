# 🪙 Real-Time Crypto Price Tracker

A responsive React + Redux Toolkit app that simulates live crypto price updates using mocked WebSocket (setInterval).

## 🚀 Tech Stack
- React.js
- Redux Toolkit
- CSS Modules
- Mocked WebSocket with setInterval

## 📊 Features
- Responsive table layout
- Live updates every 2 seconds
- Redux state management (no local state)
- Color-coded % changes
- Simulated 7D mini chart
- Scrollable on mobile

## 🧠 Architecture
- All crypto data managed by Redux store
- Live updates triggered via `setInterval`
- UI re-renders with `useSelector`

## 📹 Demo Video
Click here to view the walkthrough - "https://www.loom.com/share/dfed383dee044822a0f4fc21a005f0c1?sid=c72d5e97-1a76-4c4e-a670-2461887c000f"

## 🔧 Setup Instructions
```bash
git clone https://github.com/PriyanshuR360/crypto-tracker.git
cd crypto-tracker
npm install
npm run dev
