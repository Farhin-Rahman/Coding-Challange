import React, { useEffect } from 'react';
import Alert from './components/Alert';

function App() {
  useEffect(() => {
    // Use process.env.REACT_APP_API_TOKEN to access your API token
    const apiToken = process.env.REACT_APP_API_TOKEN;

    // You can now use the 'apiToken' variable in your API requests
    // Example:
    fetch('https://dev.biniyog.com.bd/some-api-endpoint', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data
      })
      .catch((error) => {
        // Handle errors
      });
  }, []);

  return (
    <div className="App">
      <Alert type="error" title="Error" description="An error occurred." />
      <Alert
        type="success"
        title="Success"
        description="Operation was successful."
      />
      {/* Add more alert instances as needed */}
      {/* Your app content */}
    </div>
  );
}

export default App;
