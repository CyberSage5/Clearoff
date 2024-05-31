import { Suspense, lazy } from 'react';
import {Listings,Container,Hero, DashboardContainer} from './component/index';
import {Routes, Route} from 'react-router-dom';
import LoadingAnim from './component/loadingAnim';
const Login = lazy(() => import('./component/auth/Login'));
const Signup = lazy(() => import('./component/auth/Signup'));

// import { useState, useEffect } from 'react';
import './index.css'
function App() {
  // let navigate = useNavigate()

  // const token = sessionStorage.getItem('token');

  

  return (
    <>
        <Suspense fallback={<LoadingAnim/>}>
      <Routes>
       <Route path={'/'} element={<Suspense fallback={<LoadingAnim/>}><Container /></Suspense>}>
        <Route index element={<Suspense fallback={<LoadingAnim/>}><Hero /></Suspense>}/>
        <Route path={'signup'} element={<Suspense fallback={<LoadingAnim/>}> <Signup /> </Suspense>} />
        <Route path={'login'} element={ <Suspense fallback={<LoadingAnim/>}><Login/></Suspense>} />

        <Route path={'dashboard'} element={<Suspense fallback={<LoadingAnim/>}><DashboardContainer /></Suspense>}>
        <Route index element={<Listings/>}/>
        </Route>
        
       </Route>
        
        {/* {token ? <Route path={'home'} element={ <Home token={token}/>} />:""} */}

      </Routes>
        </Suspense>
    </>
  )
}

export default App

