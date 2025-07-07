import React from 'react';
import './App.css';
import FoundationsList from 'components/fundation_list';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mountain-meadow-50 via-white to-mountain-meadow-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-mountain-meadow-200">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-center text-mountain-meadow-800">
            🐾 Patitas sin fronteras
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-mountain-meadow-200 mb-8">
            <p className="text-lg text-center text-mountain-meadow-700 leading-relaxed">
              Bienvenidos a todos los amantes de los animales. Aquí podrás encontrar
              información sobre fundaciones que ayudan a animales en situación de calle y sobre
              cómo puedes donar a las mismas para ayudar a los animales que más lo necesitan.
            </p>
          </div>
          
          <FoundationsList />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-mountain-meadow-800 text-white text-center py-6 mt-12">
        <p className="text-mountain-meadow-100">
          💚 Hecho con amor para ayudar a los animales
        </p>
      </footer>
    </div>
  );
}
export default App;
