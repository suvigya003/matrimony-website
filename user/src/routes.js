import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Blog from './pages/Blog';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import Products from './pages/Products';
import DashboardApp from './pages/DashboardApp';
// import aboutYou from './pages/aboutYou/AboutYou';
import AboutYou from './pages/AboutYou';
import PremiumPackage from './pages/PremiumPackage';



// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'blog', element: <Blog /> },
        { path: 'aboutYou', element: <AboutYou /> },
        { path: 'premiumPackage', element: <PremiumPackage /> },
        // { path: 'enquiryFM', element: <EnquiryFM /> },
        // { path: 'enquirySP', element: <EnquirySP /> },
        // { path: 'enquiryWP', element: <EnquiryWP /> },
        // { path: 'enquiryFC', element: <EnquiryFC /> },
        // { path: 'enquirySC', element: <EnquirySC /> },
        // { path: 'snagListFM', element: <SnagListFM /> },
        // { path: 'snagListSP', element: <SnagListSP /> },
        // { path: 'snagListWP', element: <SnagListWP /> },
        // { path: 'snagListFC', element: <SnagListFC /> },
        // { path: 'snagListCC', element: <SnagListCC /> },
        // { path: 'myOrders', element: <MyOrders /> },
        // { path: 'master', element: <Master /> },
        // { path: 'orderClose', element: <OrderClose /> },
        // { path: 'workPartner', element: <WorkPartner /> },
        // { path: 'surveyPartner', element: <SurveyPartner /> },
      ],
    },
    {
      path: 'login',
      // element: <aboutYou />,
      // element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/app" /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
}
