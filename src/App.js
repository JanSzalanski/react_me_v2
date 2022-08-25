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

const DUMMY_NEWS = [
  {
    path: 'a1',
    date: new Date(2022, 1, 2),
    title: 'Pierwszy news',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestiasearum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderitvoluptatibus minus totam eos accusamus dolores adipisci!',
  },
  {
    path: 'a2',
    date: new Date(2022, 11, 10),
    title: 'Drugi news',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit',
  },
  {
    path: 'a3',
    date: new Date(2022, 9, 2),
    title: 'Trzeci news',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias earum accusamus iste! Corrupti ut ea sint modi magnam !',
  },
  {
    path: 'a4',
    date: new Date(2022, 4, 10),
    title: 'Czwarty news',
    content: 'To jest troche treści po polsku',
  },
  {
    path: 'a5',
    date: new Date(2022, 4, 10),
    title: 'Piąty news',
    content: 'Coś wyjątkowego sobie sprezentowałem',
  },
  {
    path: 'a6',
    date: new Date(2022, 10, 1),
    title: 'Szósty news',
    content: 'A terz kolejny prezent',
  },
  {
    path: 'a7',
    date: new Date(2022, 8, 10),
    title: 'Siódmy news',
    content: 'Ale z tym zabawy jedno sie zyskuje cos innego traci w tym react',
  },
];

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
          <DetailsPage data={DUMMY_NEWS} />
          <SideBar />
          <div className="wrapCont">
            <ContactBar />
          </div>
        </Route>
        <Route path="/news">
          <div className="backgroundBody"></div>
          <Video></Video>
          <NewsPage data={DUMMY_NEWS} />
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
