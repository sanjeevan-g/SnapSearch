
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';

import Banner from "./component/banner/Banner";

import ReacentSearch from "./component/recent-search/RecentSearch";
import Error from "./component/error-page/Error"
import SharedLayout from './layout/SharedLayout';
import Initial from './component/initialpage/InitialPage';
import Search from './component/search/SearchContainer';

function App() {
  const navigate = useNavigate();

  const [recentSearch, setRecentSearch] = useState(() => new Set(["Mountain","Trees","Ocean"]))

  function handelsubmit(query) {
    setRecentSearch((prevSet) => {
      return new Set([query, ...prevSet]);
    })
    navigate(`/${query}`)
  }

  return (
    <div className='container'>
      <Banner handelsubmit={handelsubmit} />
      {recentSearch.size > 0 && <ReacentSearch searchItem={recentSearch} />}
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Initial />} />
          <Route path=":inputquery" element={<Search />} />
          <Route path="*" element={<Error content={"page not found"}/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
