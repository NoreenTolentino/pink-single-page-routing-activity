import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((u) => u.id === parseInt(id, 10));
        setUser(found || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div style={{ padding: '20px', fontFamily: 'sans-serif', color: '#c71585' }}>Loading...</div>;
  }

  if (!user) {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#fff0f5', minHeight: '90vh' }}>
        <Helmet>
          <title>exam-review</title>
        </Helmet>
        <h1 style={{ fontSize: '24px', fontWeight: 'normal', margin: 0, color: '#c71585' }}>Error</h1>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', display: 'flex', justifyContent: 'center', backgroundColor: '#fff0f5', minHeight: '80vh', fontFamily: 'sans-serif' }}>
      <Helmet>
        <title>{user.name} - Details</title>
      </Helmet>

      <div style={{ backgroundColor: '#ffe4e1', padding: '30px', borderRadius: '8px', width: '300px', height: 'fit-content' }}>
        <h2 style={{ color: '#c71585', marginTop: 0 }}>{user.name}</h2>
        <p style={{ color: '#333' }}><strong>ID:</strong> {user.id}</p>
        <p style={{ color: '#333' }}><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default User;