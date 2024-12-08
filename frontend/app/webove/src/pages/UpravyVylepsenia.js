import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
import '../UpravyVylepsenia.css';

function UpravyVylepsenia() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the PHP API
    axios.get('http://localhost/wt-zadanie/backend/fetch_data.php')
  .then((response) => setUsers(response.data))
  .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const deleteUser = (id) => {
    axios.delete(`http://localhost/wt-zadanie/backend/delete_user.php?id=${id}`)
      .then(() => {
        // Remove the deleted user from the state
        setUsers(users.filter(user => user.id !== id));
      })
      .catch((error) => console.error('Error deleting user:', error));
  };

  return (
    <div>
      <main class="upravy">
        <h1>User List</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Birth Year</th>
              <th>Country</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Actions</th> {/* Add Actions column */}
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.birth_year}</td>
                <td>{user.country}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.status}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>Delete</button> {/* Delete button */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default UpravyVylepsenia;
