import '../styles/globals.css'
import Link from 'next/link'
import './../styles/app.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ballotAddress } from '../info'
import Ballot from '../artifacts/contracts/Ballot.sol/Ballot.json'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import DataProvider, { useData } from '../contexts/DataContext'
import { formatBigNumber } from '../utilities/functions'

function Data (props) {
  const {
    setAccount,
    setOwner,
    setVote,
    setContract,
    signedContract,
    setSignedContract,
    loadCandidates,
    loadVoters
  } = useData()
  useEffect(() => {
    init()

    return () => {}
  }, [])

  useEffect(() => {
    loadCandidates()
    loadVoters()

    return () => {}
  }, [signedContract])

  async function init () {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
    // Prompt user for account connections
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    var ballotContract = new ethers.Contract(
      ballotAddress,
      Ballot.abi,
      provider
    )
    setContract(ballotContract)
    ballotContract = new ethers.Contract(ballotAddress, Ballot.abi, signer)
    setSignedContract(ballotContract)
  }

  return props.children
}

function Nav (props) {
  const { setAccount, setOwner, setVote, owner, account, address } = useData()
  useEffect(() => {
    getOwner()
    window.ethereum.on('accountsChanged', function (accounts) {
      getOwner()
    })
    return () => {}
  }, [])

  const getOwner = async () => {
    const { ethereum } = window
    console.log('owner')
    if (!ethereum) {
      alert('Please install Metamask')
    }
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      setAccount(accounts[0])
      console.log(accounts[0])
      const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
      // Prompt user for account connections
      await provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()
      var ballotContract = new ethers.Contract(
        ballotAddress,
        Ballot.abi,
        provider
      )
      const o = await ballotContract.getOwner()
      setOwner(o)
      ballotContract = new ethers.Contract(ballotAddress, Ballot.abi, signer)
      if (String(owner).toLowerCase() !== account) {
        const v = await ballotContract.getVote(accounts[0])
        setVote(v)
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <ul className='navbar-nav'>
      <li className='nav-item active'>
        <Link href='/'>
          <a className='nav-link'>Home</a>
        </Link>
      </li>

      {String(owner).toLowerCase() === account ? (
        <>
          <li className='nav-item'>
            <Link href='/add-candidate'>
              <a className='nav-link'>Add new candidate</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/add-voter'>
              <a className='nav-link'>Add new voter</a>
            </Link>
          </li>
        </>
      ) : (
        <li className='nav-item'>
          <Link href='/delegate'>
            <a className='nav-link'>Delegate</a>
          </Link>
        </li>
      )}
    </ul>
  )
}

function MyApp ({ Component, pageProps }) {
  const [owner, setOwner] = useState()
  const [vote, setVote] = useState()
  const [account, setAccount] = useState()

  return (
    <>
      <DataProvider>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='collapse navbar-collapse justify-content-md-center'
            id='navbarNav'
          >
            <a className='navbar-brand' href='#'>
              Ballot
            </a>
            <Nav />
          </div>
        </nav>
        <Data>
          <Component {...pageProps} />
        </Data>
      </DataProvider>
    </>
  )
}

export default MyApp
