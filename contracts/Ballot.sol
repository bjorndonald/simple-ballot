// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
@title Ballot
@dev This is the contract for a particular ballot

["0x616c696365000000000000000000000000000000000000000000000000000000","0x626f620000000000000000000000000000000000000000000000000000000000"]
  0x616c696365000000000000000000000000000000000000000000000000000000
  0x6179616465000000000000000000000000000000000000000000000000000000
  0x616c696365
**/

contract Ballot {
    address private efcc;

    struct Voter {
        address delegate;
        uint256 weight;
        bool voted;
        uint256 vote;
        address addr;
        bytes32 name;
    }

    struct Proposal {
        uint256 voteCount;
        bytes32 name;
    }

    event CandidateAdded(bytes32 name);

    event VoterAdded(bytes32 name);
    event DelegateDone();
    event VoteDone();

    mapping(address => Voter) public voters;
    Proposal[] public proposals;
    Voter[] public voterList;

    constructor() {
        efcc = msg.sender;
        voters[efcc].weight = 1;
    }

    function addCandidate(bytes32 name) external {
        proposals.push(Proposal({voteCount: 0, name: name}));
        emit CandidateAdded(name);
    }

    function getCandidates() external view returns (Proposal[] memory) {
        return proposals;
    }

    function getOwner() external view returns (address) {
        return efcc;
    }

    function getVote(address voter) external view returns (Voter memory) {
        return voters[voter];
    }

    function getVoters() external view returns (Voter[] memory) {
        return voterList;
    }

    function giveRightToVote(address voter, bytes32 name) external {
        if (voters[voter].weight == 0) {
            require(msg.sender == efcc, "Only efcc can give the right to vote");
            require(!voters[voter].voted, "This user has already voted");
            voters[voter].weight = 1;
            voters[voter].name = name;
            voterList.push(
                Voter({
                    addr: voter,
                    vote: 256,
                    voted: false,
                    weight: 1,
                    name: name,
                    delegate: address(0)
                })
            );
            voters[voter].voted = false;
            emit VoterAdded(name);
        }
    }

    function delegate(address to) external {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted, "You have already voted.");
        require(msg.sender != to, "Self-delegation is not allowed.");

        while (voters[to].delegate != address(0)) {
            to = voters[to].delegate;
            require(to != msg.sender, "Loop is not allowed.");
        }

        Voter storage _delegate = voters[to];
        require(
            _delegate.weight >= 1,
            "Cannot delegate to address that cannot vote"
        );
        sender.voted = true;
        sender.delegate = to;
        if (_delegate.voted) {
            proposals[_delegate.vote].voteCount += sender.weight;
        } else {
            _delegate.weight += sender.weight;
        }
        emit DelegateDone();
    }

    function vote(uint256 proposal) external {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted, "Voter has already voted.");
        require(sender.weight >= 1, "Voter has no right to vote");
        proposals[proposal].voteCount += sender.weight;
        sender.voted = true;
        sender.vote = proposal;
        emit VoteDone();
    }

    function winningProposal() public view returns (uint256 winningProposalId) {
        uint256 winningVoteCount = 0;
        for (uint256 i = 0; i < proposals.length; i++) {
            if (proposals[i].voteCount > winningVoteCount) {
                winningVoteCount = proposals[i].voteCount;
                winningProposalId = i;
            }
        }
    }

    function winnerName() external view returns (bytes32 name) {
        name = proposals[winningProposal()].name;
    }
}
