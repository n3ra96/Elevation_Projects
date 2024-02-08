import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState , useEffect } from 'react';
import Navbar from './components/Navbar';
import Opretaions from './components/Opretaions';
import Transactions from './components/Transactions';
import Breakdown from './components/Breakdown';



function App() {

  let [Data,setData] = useState([])
  let [Balance,setBalance] = useState([])

  

  const fetchUserData = () => {
    fetch("http://localhost:3200/Transactions")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data)
      })
  }

  

  useEffect(() => {
    fetchUserData()
  }, [Balance])


  const fetchBalanceData = () => {
    fetch("http://localhost:3200/Balance")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setBalance(data[0].amount)
      })
  }


  useEffect(() => {
    fetchBalanceData()
  }, [Data])

  
  console.log("hello")
  
  return (
    <Router>

      <div className="App">
        <Navbar Balance={Balance}/>
      </div>

      <Routes>

        <Route path="/Opretaions" element={<Opretaions setBalance={setBalance} Balance={Balance}/>} />
        <Route path="/" element={<Transactions Data={Data} fetchUserData={fetchUserData}/>} />
        <Route path="/Breakdown" element={<Breakdown />} />
        
      </Routes>

    </Router>
  );
}

export default App;
