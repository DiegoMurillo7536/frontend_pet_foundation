import React from 'react';
import './App.css';
import FoundationsList from 'components/fundation_list';
function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center">
        Patitas sin fronteras
      </h1>
      <p className="mt-4 text-center">
        Bienvenidos a todos los amantes de los animales. Aquí podrás encontrar
        información sobre fundaciones que ayudan a animales en situación de calle y sobre
        como puedes donar a las mismas para ayudar a los animales que más lo necesitan.
      </p>
      <FoundationsList />
    </div>
  );
}
export default App;
