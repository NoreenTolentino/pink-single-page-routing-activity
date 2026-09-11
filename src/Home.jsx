import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff0f5', minHeight: '90vh' }}>
      <Helmet><title>exam-review</title></Helmet>
      
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '8px', width: '250px', borderRadius: '5px', border: '2px solid #ff69b4' }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '15px' }}>
        {filteredUsers.map((user) => (
          <Link to={`/user/${user.id}`} key={user.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ backgroundColor: '#ffe4e1', borderRadius: '8px', padding: '15px', border: '1px solid #ffb6c1' }}>
              <h3 style={{ color: '#c71585', margin: '0 0 10px 0' }}>{user.name}</h3>
              <p style={{ margin: 0 }}>Contact @ {user.email}</p>
              <p style={{ color: '#8b008b', fontWeight: 'bold', marginTop: '10px' }}>User #{user.id}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;