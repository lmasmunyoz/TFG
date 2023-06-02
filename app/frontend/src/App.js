import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import RegistrationFormPage from './pages/RegistrationFormPage';
import WelcomePage from './pages/WelcomePage';
import DetailPage from './pages/DetailPage';
import UserState from "./context/user/UserState";
import CategoryPage from './pages/CategoryPage';
import Footer from './components/Footer';
import Crud from './pages/Crud'
import CreateArticle from './components/CreateArticle';
import EditArticles from './components/EditArticles';

function App() {

  return (
    <div className="page-grid">
      <UserState>
        <BrowserRouter>
          <Routes>
            <Route element={<LoginPage />} path="/login" />
            <Route element={<RegistrationFormPage />} path="/registration" />
            <Route element={<WelcomePage />} path="/welcome" />
            <Route element={<DetailPage />} path="/furniture/:idFurniture" />
            <Route element={<Crud />} path="/crud" />
            <Route element={<CreateArticle />} path="/create" />
            <Route element={<EditArticles />} path="/edit" />
            <Route element={<CategoryPage />} path="/category/:idCategory" />
            <Route element={<ErrorPage />} path="/error/:code" />
            <Route element={<RegistrationFormPage />} path="/" />
          </Routes>
        </BrowserRouter>
        <Footer/>
      </UserState>
    </div>
  );
}

export default App;
