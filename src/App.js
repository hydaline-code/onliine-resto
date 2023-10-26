
import './App.css';
import Header from './components/Header';
import CountryList from './components/CountryList';

function App() {
 return (
  <div>
    <section>
 <Header />
 </section>
 <div className='country-list'>
  <CountryList />
 </div>
 </div>
 )
}

export default App;
