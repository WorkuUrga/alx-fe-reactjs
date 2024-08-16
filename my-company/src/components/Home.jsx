import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to Our Company</h1>
      <p style={styles.paragraph}>
        We are dedicated to delivering excellence in all our services.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    fontSize: '50px',
    color: '#333',
    marginBottom: '20px',
  },
  paragraph: {
    textAlign: 'center',
    color: '#555',
    fontSize: '18px',
    lineHeight: '1.6',
  },
};

export default Home;
