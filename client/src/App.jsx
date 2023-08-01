import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home/Home.jsx";
import Chapter from "./pages/Chapter.jsx";
import Manga from "./pages/Manga.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import OngoingList from "./pages/OngoingList.jsx";
import ReadList from "./pages/ReadList.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Terms from "./pages/Terms.jsx";
import Privacy from "./pages/Privacy.jsx";
import DMCA from "./pages/DMCA.jsx";
import RecentlyUpdateList from "./pages/RecentlyUpdateList.jsx";
import PopularList from './pages/PopularList';
import RecommendedList from "./pages/RecommendedList.jsx";
import ComingSoonList from "./pages/ComingSoonList.jsx";
import NotFound from './Components/NotFound/NotFound'
import {Navigate} from 'react-router-dom';
import Layout from '../src/Components/Layout/Layout.jsx'

const App = () => {
  return (
      <Routes>
       <Route path="/" element={<Layout />}>
       <Route index element={<Home />} />
        <Route path="/manga/chapter/:id" element={<Manga />} />
        <Route path="manga/:id/chapter" element={<Chapter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ongoing" element={<OngoingList />} />
        <Route path="/read" element={<ReadList />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/dmca" element={<DMCA />} />
        <Route path="/recent" element={<RecentlyUpdateList />} />
        <Route path="/popular" element={<PopularList />} />
        <Route path="/recommended" element={<RecommendedList />} />
        <Route path="/comingsoon" element={<ComingSoonList />} />
        <Route path="/404" element={<NotFound />} />
        <Route path='*' element={<Navigate to="/404" replace />} />
       </Route>
      </Routes>
  );
};

export default App;
