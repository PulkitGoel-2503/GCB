import React from 'react';
import { useParams } from 'react-router-dom';
import './TeamDetails.css';

const teams = [
  { id: 1, name: 'Team A', description: 'Team A is known for its aggressive gameplay.', details: 'Detailed information about Team A.' },
  { id: 2, name: 'Team B', description: 'Team B has a balanced team composition.', details: 'Detailed information about Team B.' },
  { id: 3, name: 'Team C', description: 'Team C specializes in strategic plays.', details: 'Detailed information about Team C.' },
];

const TeamDetails = () => {
  const { id } = useParams();
  const team = teams.find((team) => team.id === parseInt(id));

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{team.name}</h2>
      <div className="card shadow-sm p-4">
        <h5>About the Team</h5>
        <p>{team.details}</p>
        <button className="btn btn-success mt-3">Send Request</button>
      </div>
    </div>
  );
};

export default TeamDetails;