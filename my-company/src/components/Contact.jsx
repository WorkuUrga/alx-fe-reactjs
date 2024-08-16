import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h1 style={styles.header}>Contact Us</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={styles.textarea}
                />
                <button type="submit" style={styles.button}>Send Message</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f9',
        padding: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '400px',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
        marginBottom: '20px',
        textAlign: 'center',
        color: '#333',
    },
    input: {
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '16px',
    },
    textarea: {
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '16px',
        resize: 'vertical', // Allows resizing only vertically
    },
    button: {
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    }
};

export default Contact;
