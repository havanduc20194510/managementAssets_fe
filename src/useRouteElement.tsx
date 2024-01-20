import { useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login/Login'
import RegisterLayout from './layouts/RegisterLayout'
import Register from './pages/Register'
import DashBoard from './layouts/DashBoard'
import Hardware from './pages/ProductList/Hardware'
import Software from './pages/ProductList/Software'

export default function useRouteElement() {
  const routeElements = useRoutes([
    // {
    //   path: '/',
    //   element: <ProductList />
    // },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    },
    {
      path: '/',
      element: <DashBoard />
    },
    {
      path: '/hardware',
      element: <Hardware />
    },
    {
      path: '/software',
      element: <Software />
    }
  ])
  return routeElements
}
