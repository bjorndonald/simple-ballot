import React, { createContext, useContext, useEffect, useState } from 'react'

const DataContext = createContext({})

const DataProvider = ({ children }) => {
  const [owner, setOwner] = useState()
  const [vote, setVote] = useState()
  const [account, setAccount] = useState()
  const [signer, setSigner] = useState()
  const [provider, setProvider] = useState()
  const [contract, setContract] = useState()
  const [voters, setVoters] = useState([])
  const [candidates, setCandidates] = useState([])
  const [loading, setLoading] = useState(true)
  const [signedContract, setSignedContract] = useState()

  async function loadCandidates () {
    if (!contract) return
    setLoading(true)
    const data = await contract.getCandidates()
    setCandidates(data)
    console.log(data)
    setLoading(false)
  }

  async function loadVoters () {
    if (!contract) return

    const data = await contract.getVoters()
    console.log('voters', data)
    setVoters(data)
  }

  async function getVote () {
    if (!contract) return
    if (String(owner).toLowerCase() !== account) {
      const v = await contract.getVote(accounts[0])
      setVote(v)
    }
  }

  return (
    <DataContext.Provider
      value={{
        account,
        owner,
        vote,
        signer,
        provider,
        contract,
        candidates,
        loading,
        voters,
        signedContract,
        getVote,
        loadVoters,
        loadCandidates,
        setVote,
        setOwner,
        setAccount,
        setLoading,
        setSigner,
        setContract,
        setProvider,
        setCandidates,
        setSignedContract
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext)

export default DataProvider
