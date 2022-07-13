import { useEffect, useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux'
// import { ethers } from "ethers";
import './App.css';
import Nav from "./components/Nav"
import Charts  from "./components/Charts"
import DepositWithdraw from "./components/DepositWithdraw"
import OrderBook from "./components/OrderBook"
import Trade from "./components/Trade"
import TransactionHistory from "./components/TransactionHistory"
import OpenOrders  from "./components/OpenOrders"

// blockchain imports
import {connected, disconnect} from "./features/01_slice"

function App() {
  // load blockchain data as the app loads
  useEffect(()=> {
    // add functions that should run once the app component mounts
    loadBlockChainData()
  }, [])

  const {connection} = useSelector( (store) => store.web3)

  const dispatch = useDispatch()

  const loadBlockChainData = async (data) => {
    dispatch(connected())
  }
  return (
    <div className="App">
      <div className='Nav'>
        <Nav />
      </div>
      <div className='main'>
        <div className='section deposit'> 
          <div className='deposit-withdraw'>
            <DepositWithdraw />
          </div>
          <div className='trade'>
            <Trade />
          </div>
        </div>
        <div className='section full-section'> 
          <OrderBook />
        </div>
        <div className='section charts'>
          <div className='chart'>
            <Charts />
          </div>
          <div className='open-order'>
            <OpenOrders />
          </div>
        </div>
        <div className='section full-section'>
          <TransactionHistory />
         </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return{

  }
}
export default connect(mapStateToProps)(App) ;
