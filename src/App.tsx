import React from 'react';
import PasswordSection from './components/PasswordSection';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="info">
        <h1>Генератор случайных паролей</h1>
        <p>Создавайте надежные пароли для защиты своих учетных записей.</p>
      </div>
      <PasswordSection />
    </div>
  );
};

export default App;
