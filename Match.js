// src/components/Match.js
import React from 'react';
import './Match.css';

const Match = () => {
  const matches = [
    {
      id: 1, ground: 'Melbourne Cricket Ground', time: '10:00 AM', date: 'Octuber 20 2024', team1: 'India', team2: 'Australia'
    },
    {
      id: 2, ground: 'Lords', time: '2:00 PM', date:'Octuber 25, 2024', team1: 'England', team2: 'Pakistan'
    },
    {
      id: 3, ground: 'Wankhede Stadium', time: '6:00 PM', date:'Octuber 30, 2024', team1: 'Mumbai Indians', team2: 'Chennai Super Kings'
    },
    {
      id: 4, ground: 'Eden Gardens', time: '8:00 PM', date:'November 10, 2024', team1: 'Kolkata Knight Riders', team2: 'Royal Chellengers Bangalore'
    },
   ];
  
   return(
    <div className="container mt-5">
      <h2 className="text-center animate_animated animate_fadeInDown">Upcoming Matches</h2>
      <div className="row mt-4">
        {matches.map((match) => (
          <div className="col-md-6 col-lg-4 mb-4" key={match.id}>
            <div className="card shadow-lg animate_animated animate_fadeInUp">
              <div className="card-body">
                <h5 classNmae="card-title">{match.team1} vs {match.team2}</h5>
                <p className="card-text"><strong>Ground:</strong>{match.ground}</p>
                <p classNmae="card-text"><strong>Date:</strong>{match.date}</p>
                <p className="card-text"><strong>Time:</strong>{match.time}</p>
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   );
};

export default Match;