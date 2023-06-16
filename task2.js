import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between">
        <Link to="/" className="text-white hover:text-gray-300">Home </Link>
        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
        <Link to="/contact" className="text-white hover:text-gray-300">Contact </Link>
      </nav>
    </header>
  );
};

const Home = ({ formData }) => {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Submitted Form Data:</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Message: {formData.message}</p>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError('Please fill out all fields');
    } else {
      // Clear form error on successful submission
      setFormError('');

      // Perform any additional logic (e.g., API calls) with the form data here

      // Reset form fields
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <div>
      <h1>Contact Page</h1>
      {formError && <p className="text-red-500">{formError}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <Home formData={formData} />} />
          <Route path="/about" component={About} />
          <Route
            path="/contact"
            render={() => (
              <Contact
                formData={formData}
                setFormData={setFormData}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
