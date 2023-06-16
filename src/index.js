import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import { Auth0Provider } from '@auth0/auth0-react';
import About from './pages/About';


<Auth0Provider
    domain="dev-xukqsjpirmxc0ra6.us.auth0.com"
    clientId="kkHRk2IXXM0CVLHniJeudvOOfuxeIoDb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="book" element={<BookList />} />
            <Route path="book" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </Auth0Provider>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-xukqsjpirmxc0ra6.us.auth0.com"
    clientId="kkHRk2IXXM0CVLHniJeudvOOfuxeIoDb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="book" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </Auth0Provider>
);

