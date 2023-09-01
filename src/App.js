import React, { Suspense, useEffect, useState } from 'react';
import './scss/main.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import NewsPage from './pages/NewsPage/NewsPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import PeoplePage from './pages/PeoplePage/PeoplePage';
import Prywatnie from './pages/Prywatnie/Prywatnie';
import SideBar from './components/organisms/SideBar/SideBar';
import Video from './components/atoms/Videos/Video';
import ContactBar from './components/molecules/ContactBar/ContactBar';
import Backdrop from './components/atoms/Backdrop/Backdrop';
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from './Firebase';

// import AuthContext from './context/AuthContext';

const DetailsPage = React.lazy(() => import('./pages/DetailsPage/DetailsPage'));
const NotFound = React.lazy(() => import('./pages/404/NotFound'));

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);

  //Read news from firebase...

  useEffect(() => {
    try {
      const q = query(collection(db, 'news'), orderBy('path'));
      const unsub = onSnapshot(q, (querySnapshot) => {
        let newsArr = [];
        querySnapshot.forEach((doc) => {
          newsArr.push({ ...doc.data(), id: doc.id });
        });
        setNews(newsArr);
      });
      return () => unsub();
    } catch (error) {
      throw new Error('Nie pobrano niusów z bazy');
    }
  }, []);

  return (
    <>
      <Suspense fallback={<p>Wczytywanie...</p>}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/news"></Redirect>
          </Route>
          <Route path="/news/:newsId">
            <div className="backgroundBack"></div>
            <Backdrop />
            <DetailsPage data={news} />
            <SideBar />
            <div className="wrapCont">
              <ContactBar />
            </div>
          </Route>
          <Route path="/news">
            <div className="backgroundBody"></div>
            <Video></Video>
            <NewsPage data={news} />
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
          <Route path="/prywatnie">
            <div className="backgroundBody"></div>
            <Video></Video>
            <Prywatnie />
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
    </>
  );
}

export default App;
