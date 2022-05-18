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
import Video from './components/atoms/Videos/Video';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/news"></Redirect>
      </Route>
      <Route path="/news/:newsId">
        <DetailsPage />
        <SideBar />
      </Route>
      <Route path="/news">
        <Video></Video>
        <NewsPage />
        <SideBar />
      </Route>
      <Route path="/articles">
        <Video></Video>
        <ArticlePage />
        <SideBar />
      </Route>
      <Route path="/people">
        <Video></Video>
        <PeoplePage />
        <SideBar />
      </Route>
      <Route path="/nft">
        <Video></Video>
        <NftPage />
        <SideBar />
      </Route>
      <Route path="*">
        <Video></Video>
        <NotFound />
        <SideBar />
      </Route>
    </Switch>
  );
}

export default App;
