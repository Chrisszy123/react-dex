import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {connected, disconnect} from "../features/01_slice"

const Nav = () => {

  const dispatch = useDispatch()
  const loadBlockChainData = async () => {
    // load blockchain data here using ethers and RPC Provider
    dispatch(connected())
  }

  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <h2>Vertex Finance</h2>
      </div>
      <div className='btn connect-btn'>
        <button onClick={()=> loadBlockChainData()}>Connect Wallet</button>
      </div>
    </div>
  )
}

export default Nav