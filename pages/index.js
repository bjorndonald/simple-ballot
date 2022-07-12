import { ethers } from 'ethers'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import web3 from 'web3'
import { ballotAddress } from '../info'
import Ballot from '../artifacts/contracts/Ballot.sol/Ballot.json'
import { useData } from '../contexts/DataContext'
import CandidateList from '../components/CandidateList'

export default function Home () {
  const { vote, contract, signedContract, loading, candidates } = useData()

  if (loading && !candidates?.length) return <h1>Loading ...</h1>
  return (
    <div id='ballot'>
      <h1>Candidates</h1>
      <p style={{ textAlign: 'center' }}>
        Click on the candidate you wish to vote for
      </p>
      {candidates.length ? (
        <CandidateList />
      ) : (
        <p style={{ textAlign: 'center' }}>No candidates right now.</p>
      )}
    </div>
  )
}
