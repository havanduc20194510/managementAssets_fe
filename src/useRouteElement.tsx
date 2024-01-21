import { useRoutes } from 'react-router-dom'
import Login from './pages/Login/Login'
import RegisterLayout from './layouts/RegisterLayout'
import Register from './pages/Register'
import DashBoard from './layouts/DashBoard/DoashBoard'
import Hardware from './components/Admin/ProductList/Hardware'
import Software from './components/Admin/ProductList/Software'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      )
    },
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
      path: '/admin/dashboard',
      element: (
        <DashBoard>
          <Hardware />
        </DashBoard>
      )
    },
    {
      path: '/hardware',
      element: (
        <DashBoard>
          <Hardware />
        </DashBoard>
      )
    },
    {
      path: '/software',
      element: (
        <DashBoard>
          <Software />
        </DashBoard>
      )
    }
  ])
  return routeElements
}
