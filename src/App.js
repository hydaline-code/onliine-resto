
import './App.css';
import CountryList from './components/CountryList';
import Choice from './components/Choice';
import Header from './components/Headers';
import Restaurants from './components/Restaurants';
import Fooddetail from './components/Fooddetail';

function App() {
 
 return (
  <div className='App'>
    <section>
 <Header />
 </section>
 <div className='country-list'>
  <CountryList />
 </div>
 <div className='restaurantss'>
  <Choice />
  <section>
  <Restaurants />
    </section>

 </div>

 <div>
  <Fooddetail />
 </div>

 </div>
 )
}

export default App;
