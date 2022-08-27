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
    date: new Date(2022, 7, 27),
    title: 'Pierwszy news',
    short:
      'Witaj na metawersowym wariancie mojej strony domowej! Witryna ta będzie rozwijana przeze mnie do pełnoprawnego projektu Web. 3.0!',
    content:
      'Stało się... Jesteś na metawersowym wariancie mojej strony domowej. Witrynę postaram się rozwinąć do pełnoprawnego projektu Web. 3.0. Będzie ona agregować technologie klasyczne, jak i te ze świata blockchain. Jeśli umiejętności mi na to pozwolą, dodam także obsługę gogli VR. Jeszcze zanim uda mi się to wszystko wdrożyć, tak strona już teraz korzysta z tej samej technologii co pewnie dobrze Ci znany Netflix! ',
  },
  {
    path: 'a2',
    date: new Date(2022, 7, 27),
    title: 'Wersja beta - smutna żaba :(',
    short:
      'PS pozostałe "newsy" to na razie tzw. "dummy data" czyli takie tymczasowe dane do operowania treścią — strona ta to jeszcze tak naprawdę wersja beta.',
    content: '',
  },
  {
    path: 'a3',
    date: new Date(2022, 7, 27),
    title: 'To wymaga czasu...',
    short:
      'Różne rzeczy będą się pojawiać i zmieniać na bieżącą, o czym dowiecie się właśnie z kolejnych rekordów.',
    content: '',
  },
  {
    path: 'a4',
    date: new Date(2022, 0, 1),
    title: 'Czwarty news',
    short:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempore neque recusandae omnis at perspiciatis odit possimus quod asperiores id nesciunt quae, consequatur ipsa veniam esse eveniet iusto corrupti et?',
  },
  {
    path: 'a5',
    date: new Date(2022, 0, 1),
    title: 'Piąty news',
    short:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias earum accusamus iste!',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit. Deserunt tempore neque recusandae omnis at perspiciatis odit possimus quod asperiores id nesciunt quae, consequatur ipsa veniam esse eveniet iusto corrupti et?',
  },
  {
    path: 'a6',
    date: new Date(2022, 0, 1),
    title: 'Szósty news',
    short:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias earum accusamus iste!',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit. Deserunt tempore neque recusandae omnis at perspiciatis odit possimus quod asperiores id nesciunt quae, consequatur ipsa veniam esse eveniet iusto corrupti et?',
  },
  {
    path: 'a7',
    date: new Date(2022, 0, 1),
    title: 'Siódmy news',
    short:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias earum accusamus iste!',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus veritatis molestias earum accusamus iste! Corrupti ut ea sint modi magnam atque, dolorum reprehenderit. Deserunt tempore neque recusandae omnis at perspiciatis odit possimus quod asperiores id nesciunt quae, consequatur ipsa veniam esse eveniet iusto corrupti et?',
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
