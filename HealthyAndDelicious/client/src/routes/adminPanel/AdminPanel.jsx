import { useState } from 'react';
import './AdminPanel.scss';
import Search from '../../components/search/Search'; 

function AdminPanel() {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  const handleDelete = (userId) => {
    console.log(`Delete user with ID: ${userId}`);
  };

  const handleEdit = (userId) => {
    console.log(`Edit user with ID: ${userId}`);
  };

  const handleViewDetails = (userId) => {
    console.log(`View details of user with ID: ${userId}`);
  };

  const handleAddUser = () => {
    console.log('Add new user');
  };

  const users = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', created: '2023-01-01', image: '/noavatar.png' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', phone: '987-654-3210', created: '2023-02-01', image: '/noavatar.png' },
    // Add more users as needed
  ];

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='adminPanel'>
      <h1 className='adminTitle'>Admin Panel</h1>
      <div className='headerRow'>
        <Search handleNavClose={() => {}} />
        <button className='addButton' onClick={handleAddUser}>Add New User</button>
      </div>
      <table className='userTable'>
        <thead>
          <tr>
            <th className='tableHeader'>ID</th>
            <th className='tableHeader'>First Name</th>
            <th className='tableHeader'>Last Name</th>
            <th className='tableHeader'>Email</th>
            <th className='tableHeader'>Phone</th>
            <th className='tableHeader'>Created</th>
            <th className='tableHeader'>Image</th>
            <th className='tableHeader'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map(user => (
            <tr key={user.id} className='userRow'>
              <td className='tableCell'>{user.id}</td>
              <td className='tableCell'>{user.firstName}</td>
              <td className='tableCell'>{user.lastName}</td>
              <td className='tableCell'>{user.email}</td>
              <td className='tableCell'>{user.phone}</td>
              <td className='tableCell'>{user.created}</td>
              <td className='tableCell'>
                <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className='userImage' />
              </td>
              <td className='tableCell'>
                <button className='actionButton editButton' onClick={() => handleEdit(user.id)}>Edit</button>
                <button className='actionButton deleteButton' onClick={() => handleDelete(user.id)}>Delete</button>
                <button className='actionButton detailsButton' onClick={() => handleViewDetails(user.id)}>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination'>
        {pageNumbers.map(number => (
          <button key={number} onClick={() => paginate(number)} className='pageButton'>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
