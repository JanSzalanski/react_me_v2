import React, { Suspense } from 'react';
import './scss/main.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import NewsPage from './pages/NewsPage/NewsPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import PeoplePage from './pages/PeoplePage/PeoplePage';
import NftPage from './pages/NftPage/NftPage';
import SideBar from './components/organisms/SideBar/SideBar';
import Video from './components/atoms/Videos/Video';
import ContactBar from './components/molecules/ContactBar/ContactBar';
import Backdrop from './components/atoms/Backdrop/Backdrop';

const DetailsPage = React.lazy(() => import('./pages/DetailsPage/DetailsPage'));
const NotFound = React.lazy(() => import('./pages/404/NotFound'));

function App() {
  return (
    <Suspense fallback={<p>Wczytywanie...</p>}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/news"></Redirect>
        </Route>
        <Route path="/news/:newsId">
          <div className="backgroundBack"></div>
          <Backdrop />
          <DetailsPage />
          <SideBar />
          <div className="wrapCont">
            <ContactBar />
          </div>
        </Route>
        <Route path="/news">
          <div className="backgroundBody"></div>
          <Video></Video>
          <NewsPage />
          <SideBar />
          <div className="wrapCont">
            <ContactBar />
          </div>
        </Route>
        <Route path="/articles">
          <div className="backgroundBody"></div>
          <Video></Video>
          <ArticlePage />
          <SideBar />
          <div className="wrapCont">
            <ContactBar />
          </div>
        </Route>
        <Route path="/people">
          <div className="backgroundBody"></div>
          <Video></Video>
          <PeoplePage />
          <SideBar />
          <div className="wrapCont">
            <ContactBar />
          </div>
        </Route>
        <Route path="/nft">
          <div className="backgroundBody"></div>
          <Video></Video>
          <NftPage />
          <SideBar />
          <div className="wrapCont">
            <ContactBar />
          </div>
        </Route>
        <Route path="*">
          <div className="backgroundBody"></div>
          <Video></Video>
          <NotFound />
          <SideBar />
          <div className="wrapCont">
            <ContactBar />
          </div>
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
