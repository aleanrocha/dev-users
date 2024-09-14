import { Navigate, createBrowserRouter } from 'react-router-dom'

import Layouts from '../layouts'
import Home from '../screens/Home'
import Users from '../screens/Users'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Navigate to={'/home'} />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'lista-de-usuarios',
        element: <Users />
      }
    ]
  },
])

export default router