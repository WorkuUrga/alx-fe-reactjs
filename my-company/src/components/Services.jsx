import React from 'react';

function Services() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our Services</h1>
      <ul style={styles.list}>
        <li style={styles.listItem}>Technology Consulting</li>
        <li style={styles.listItem}>Market Analysis</li>
        <li style={styles.listItem}>Product Development</li>
      </ul>
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
    fontSize: '40px',
    color: '#333',
    marginBottom: '30px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    textAlign: 'center',
  },
  listItem: {
    fontSize: '20px',
    color: '#555',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
  },
};

export default Services;
