import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
//define the Header component.render the header element with the navigation bar.
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between">
        <Link to="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md" activeClassName="bg-gray-900">Home</Link>
        <Link to="/about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md" activeClassName="bg-gray-900"> About </Link>
        <Link to="/contact" className="text-white hover:text-gray-300 px-3 py-2 rounded-md" activeClassName="bg-gray-900">Contact</Link>
      </nav>
    </header>
  );
};

const Home = () => {
  return <h1>This  is sommalife Home</h1>;
};

const About = () => {
  return <h1>About our company</h1>;
};
const Contact = () => {
  return <h1>Contact us or go farming</h1>;
};

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};
//export the App component as the default export.
export default App;
