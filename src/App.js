import React from 'react';
import './scss/main.css';
import MainLayout from './layouts/MainLayout/MainLayout';
import NewsPage from './pages/NewsPage/NewsPage';

function App() {
  return (
    <MainLayout>
      <NewsPage />
    </MainLayout>
  );
}

export default App;
