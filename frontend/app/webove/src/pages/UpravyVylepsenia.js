import React, { useState, useEffect } from 'react';

import axios from 'axios';
import '../UpravyVylepsenia.css';

function UpravyVylepsenia() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); // Stav pre chyby

  useEffect(() => {
    // Fetch data from the PHP API
    axios.get('http://localhost/wt-zadanie/backend/fetch_data.php')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.error('Data from API is not an array:', response.data);
          setError('Unexpected data format');
        }
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setError('Error fetching users');
      });
  }, []);

  const deleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      axios.delete(`http://localhost/wt-zadanie/backend/delete_user.php?id=${id}`)
        .then(() => {
          // Remove the deleted user from the state
          setUsers(users.filter(user => user.id !== id));
        })
        .catch((error) => console.error('Error deleting user:', error));
    }
  };

  return (
    <div>
     
      <main className="upravy">
        <h1>User List</h1>
        
        {/* Zobraziť chybovú správu, ak existuje */}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Birth Year</th>
              <th>Country</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="7">No users available</td>
              </tr>
            ) : (
              users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.birth_year}</td>
                  <td>{user.country}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </main>
      
    </div>
  );
}

export default UpravyVylepsenia;
