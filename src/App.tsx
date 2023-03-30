import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import HomePage from './pages/home';
import AboutMePage from './pages/aboutme';
import GalleryPage from './pages/gallery';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/aboutme" component={AboutMePage} />
          <Route path="/gallery" component={GalleryPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

