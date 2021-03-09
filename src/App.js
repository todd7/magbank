import './App.scss';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CreditCard from './components/CreditCard';
import CardList from './components/CardList';

import posts from './mock/post';

const App = () => (
    <div className="App">
      <Navbar />

      <Hero />

      <CreditCard />

      <CardList posts={posts} />
    </div>
);


export default App;
