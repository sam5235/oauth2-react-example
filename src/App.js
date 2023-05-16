import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const clientId = '2GrvEDOIeHjFRriHgatb1Ph15eEKzhTt';
const redirectUri = 'http://localhost:3000/';

function App() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.hash.substr(1));
    const token = urlParams.get('access_token');
    if (token) {
      setAccessToken(token);
      window.location.hash = '';
    }
  }, []);

  const handleLogin = () => {
    window.location.href = `https://dev-w8002zle54tn5ksb.us.auth0.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&prompt=login`;
  };

  const handleLogout = () => {
    setAccessToken('');
  };

  return (
    <div className="App">
      {!accessToken ? (
        <div className="App-header">
          <h1>OAuth2 Example</h1>
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div className="App-header">
          <img src={logo} className='App-logo' alt="logo" />
          <h1>Authorization Successful!</h1>
          <h4>Group Memebers</h4>
          <ul>
            <li>Samiya Hamid</li>
            <li>Yordanos Teku</li>
            <li>Nathnael Abayneh</li>
          </ul>
          <p style={{fontSize: 15}}>Access Token: {accessToken}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )
      }
    </div >
  );
}

export default App;
