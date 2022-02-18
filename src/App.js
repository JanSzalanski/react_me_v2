import React from 'react';
import './scss/main.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import NewsPage from './pages/NewsPage/NewsPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import PeoplePage from './pages/PeoplePage/PeoplePage';
import NftPage from './pages/NftPage/NftPage';
import NotFound from './pages/404/NotFound';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import SideBar from './components/organisms/SideBar/SideBar';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/news"></Redirect>
      </Route>
      <Route path="/news/:newsId">
        <SideBar />
        <DetailsPage />
      </Route>
      <Route path="/news">
        <SideBar />
        <NewsPage />
      </Route>
      <Route path="/articles">
        <SideBar />
        <ArticlePage />
      </Route>
      <Route path="/people">
        <SideBar />
        <PeoplePage />
      </Route>
      <Route path="/nft">
        <SideBar />
        <NftPage />
      </Route>
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
