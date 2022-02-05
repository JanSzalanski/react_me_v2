import React from 'react';
import './scss/main.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import NewsPage from './pages/NewsPage/NewsPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import PeoplePage from './pages/PeoplePage/PeoplePage';
import NftPage from './pages/NftPage/NftPage';
import NotFound from './pages/404/NotFound';

function App() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/news"></Redirect>
        </Route>
        <Route path="/news" component={NewsPage} />
        <Route path="/articles" component={ArticlePage} />
        <Route path="/people" component={PeoplePage} />
        <Route path="/nft" component={NftPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

export default App;
