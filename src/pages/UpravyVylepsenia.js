import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../UpravyVylepsenia.css';

function UpravyVylepsenia() {
  const [users, setUsers] = useState([]); // All users data
  const [error, setError] = useState(null); // Error state
  const [filteredUsers, setFilteredUsers] = useState([]); // Users to display after filter and sort
  const [sortBy, setSortBy] = useState(""); // To track the column by which we're sorting

  useEffect(() => {
    // Fetch data from the PHP API
    axios.get('http://localhost/backend/fetch_data.php')
      .then((response) => {
        if (Array.isArray(response.data)) {
          setUsers(response.data); // Store the users
          setFilteredUsers(response.data); // Initialize filteredUsers with all users data
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
      axios.delete(`http://localhost/backend/delete_user.php?id=${id}`)
        .then(() => {
          // Update the filtered users and the users list after deletion
          const updatedUsers = users.filter(user => user.id !== id);
          setUsers(updatedUsers);
          setFilteredUsers(updatedUsers); // Reflect changes in filtered users
        })
        .catch((error) => console.error('Error deleting user:', error));
    }
  };
  const handleColumnClick = (columnName) => {
    setSortBy(columnName);
  
    // Triedenie bez ohľadu na veľkosť písmen a správne pre čísla
    const sorted = [...filteredUsers].sort((a, b) => {
      const valueA = a[columnName];
      const valueB = b[columnName];
  
      // Ak sú hodnoty čísla, porovnaj ich číselne
      if (!isNaN(valueA) && !isNaN(valueB)) {
        return valueA - valueB; // Triedenie čísel od najmenších
      }
  
      // Ak sú hodnoty texty, porovnaj ich abecedne bez ohľadu na veľkosť písmen
      return valueA.toString().localeCompare(valueB.toString(), undefined, { sensitivity: 'base' });
    });
  
    setFilteredUsers(sorted); // Uloženie zoradených dát
  };
  

  return (
    <div>
      <main className="upravy">
        <h1>User List</h1>
        
        {/* Display error message if there's an error */}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th onClick={() => handleColumnClick('id')}>ID</th>
              <th onClick={() => handleColumnClick('name')}>Name</th>
              <th onClick={() => handleColumnClick('birth_year')}>Birth Year</th>
              <th onClick={() => handleColumnClick('country')}>Country</th>
              <th onClick={() => handleColumnClick('email')}>Email</th>
              <th onClick={() => handleColumnClick('phone')}>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="7">No users available</td>
              </tr>
            ) : (
              filteredUsers.map(user => (
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
        </div>
      </main>
    </div>
  );
}

export default UpravyVylepsenia;
