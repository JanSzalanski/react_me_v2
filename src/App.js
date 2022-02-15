import React from 'react';
import './scss/main.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import NewsPage from './pages/NewsPage/NewsPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import PeoplePage from './pages/PeoplePage/PeoplePage';
import NftPage from './pages/NftPage/NftPage';
import NotFound from './pages/404/NotFound';
import DetailsPage from './pages/DetailsPage/DetailsPage';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/news"></Redirect>
      </Route>
      <Route path="/news/:newsId" component>
        <MainLayout pageType="news">
          <DetailsPage />
        </MainLayout>
      </Route>
      <Route path="/news">
        <MainLayout pageType="news">
          <NewsPage />
        </MainLayout>
      </Route>
      <Route path="/articles">
        <MainLayout pageType="article">
          <ArticlePage />
        </MainLayout>
      </Route>
      <Route path="/people">
        <MainLayout pageType="people">
          <PeoplePage />
        </MainLayout>
      </Route>
      <Route path="/nft">
        <MainLayout pageType="nft">
          <NftPage />
        </MainLayout>
      </Route>
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
