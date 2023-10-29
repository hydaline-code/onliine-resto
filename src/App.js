import './App.css';
import CountryList from './components/CountryList';
import Choice from './components/Choice';
import Header from './components/Headers';
import Restaurants from './components/Restaurants';
import Fooddetail from './components/Fooddetail';
import Aboutpage from './components/Aboutpage';

function App() {
  return (
    <div className="App">
      <section>
        <Header />
      </section>
      <section className="country-list">
        <CountryList />
      </section>
      <section className="restaurantss">
        <Choice />
        <div>
          <Restaurants />
        </div>
      </section>

      <section>
        <Fooddetail />
      </section>

      <section>
        <Aboutpage />
      </section>

      <footer>
        <hr />
        <p>All right reserved @Afroeats 2023</p>
      </footer>

    </div>
  );
}

export default App;
