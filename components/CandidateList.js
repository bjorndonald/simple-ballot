import React from 'react'
import { useEffect, useState } from 'react'
import { ballotAddress } from '../info'
import Ballot from '../artifacts/contracts/Ballot.sol/Ballot.json'
import { ethers } from 'ethers'
import web3 from 'web3'
import { useData } from '../contexts/DataContext'
import { formatBigNumber, formatBytes32ToString } from '../utilities/functions'

function CandidateList (props) {
  const {
    vote,
    owner,
    account,
    loadCandidates,
    candidates,
    setLoading,
    signedContract,
    getVote
  } = useData()

  async function makeVote (proposal) {
    if (String(owner).toLowerCase() === account) return
    if (!signedContract) return
    if (vote?.voted) {
      alert('Already voted')
    } else {
      await signedContract.vote(proposal)

      signedContract.on('VoteDone', (from, to, value, event) => {
        getVote()
        loadCandidates()
      })
    }
  }

  return (
    <ul className='list-group candidate-list'>
      {candidates?.map((candidate, index) => (
        <li
          key={index}
          onClick={() => {
            makeVote(index)
          }}
          className={
            formatBigNumber(vote?.vote) === index && vote?.voted
              ? 'list-group-item active d-flex justify-content-between align-items-center'
              : 'list-group-item  d-flex justify-content-between align-items-center'
          }
          style={{
            cursor: 'pointer'
          }}
        >
          {formatBytes32ToString(candidate.name)}
          <span className='badge badge-primary badge-pill'>
            {formatBigNumber(candidate.voteCount)}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default CandidateList
