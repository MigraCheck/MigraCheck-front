import {createBrowserRouter} from 'react-router';
import Layout from '../layout/Layout';
import LandingPage from '../components/pages/LandingPage';
import AllPublications from '../components/pages/AllPublications';
import MyPublications from '../components/pages/MyPublications';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                index: true,
                Component: LandingPage
            },
            {
                path: '/AllPublications',
                Component: AllPublications
            },
            {
                path: '/Mypublications',
                Component: MyPublications
            }
        ]
    }

])

export default router;
