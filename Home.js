// src/components/Home.js
import React from 'react';
import './Home.css';

    const Home = () => {
  
    const upcomingMatches = [
      { team1: 'India', team2: 'Australia', date: 'October 20, 2024', venue: 'Melbourne' },
      { team1: 'England', team2: 'Pakistan', date: 'October 25, 2024', venue: 'Lords' },
      { team1: 'South Africa', team2: 'New Zealand', date: 'November 5, 2024', venue: 'Johannesburg' },
      { team1: 'West Indies', team2: 'Sri Lanka', date: 'November 10, 2024', venue: 'Bridgetown' }
    ];
  return (
    <div className="home-page text-center">
      <h1 className="animate_animated animate_fadeInDown">Welcome to the Cricket League</h1>
      <p className="lead animate_animated animate_fadeInUp">Explore the excitement of cricket matches, teams, and more.</p>
      <button className="btn btn-primary btn-lg animate_animated animate_bounce">Join the Action</button>

      {/*New section: Upcoming Matches*/}
      <div className="row mt-5">
        <h2 className="mb-4 animate_animated animate_fadeinUp">Upcoming International Matches</h2>
        {upcomingMatches.map((match, index) => (
          <div className="col-md-6 col-lg-4 mb-4 animate_animated animate_fadeInUp" key={index}>
            <div className="card-shadow-lg match-card">
              <div className="card-body">
                <h5 className="card-title">{match.team1} vs {match.team2}</h5>
                <p className="card-text"><strong>Date:</strong>{match.date}</p>
                <p className="card-text"><strong>Venue:</strong>{match.venue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/*Footer Section*/}
      <footer classNmae="footer mt-5">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>We are dedicatet to bringing you the latest updates on international cricket matches, player stats, and much more!</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.instagram.com" target="_blank" rel="noopner noreferrer">Instagram</a></li>
              <li><a href="https://www.facebook.com" target="_blank" rel="noopner noreferrer">Facebook</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contant Us</h5>
            <ul className="list-unstyled">
              <li>Phone: +9045532503</li>
              <li>Email: pulkitgoel2503@gmail.com</li>
              <li>WhatsApp: +9045532503</li>
            </ul>
          </div>
        </div>
        <div classNmae="text-center mt-3">
          <p>&copy; 2024 Cricket League. All right reserved.</p>
        </div>
      </footer>
        </div>
    

  );


  
  };






   

export default Home;