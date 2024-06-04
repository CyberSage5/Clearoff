import { Suspense, lazy } from 'react';
import {Listings,Container,Hero, DashboardContainer} from './component/index';
import {Routes, Route} from 'react-router-dom';
import LoadingAnim from './component/loadingAnim';
import PrivateRoute from './component/auth/PrivateRoute'
import AuthProvider from './component/auth/AuthContext';
const Login = lazy(() => import('./component/auth/Login'));
const Signup = lazy(() => import('./component/auth/Signup'));

// import { useState, useEffect } from 'react';
import "./index.css";
function App() {
  // let navigate = useNavigate()

  // const token = sessionStorage.getItem('token');

  return (
    <>
        <Suspense fallback={<LoadingAnim/>}>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<Suspense fallback={<LoadingAnim />}><Container /></Suspense>}>
            <Route index element={<Suspense fallback={<LoadingAnim />}><Hero /></Suspense>} />
            <Route path="signup" element={<Suspense fallback={<LoadingAnim />}><Signup /></Suspense>} />
            <Route path="login" element={<Suspense fallback={<LoadingAnim />}><Login /></Suspense>} />
            <Route path="dashboard" element={<Suspense fallback={<LoadingAnim />}>
              <PrivateRoute element={<DashboardContainer />} />
            </Suspense>}>
              <Route index element={<Suspense fallback={<LoadingAnim />}><Listings /></Suspense>} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
        </Suspense>

    </>
  );
}

export default App;
