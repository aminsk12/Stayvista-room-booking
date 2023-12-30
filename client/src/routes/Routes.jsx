import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetail from '../pages/RoomDetails/RoomDetail'
import PrivetRoutes from './PrivetRoutes'
import {  getRoom } from '../api/rooms'
import Dasboard from '../layouts/Dasboard/Dasboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,

      },
      {
        path: '/room/:id',
        element: <PrivetRoutes>
          <RoomDetail />
        </PrivetRoutes>,
        loader: ({params})=> getRoom(params.id)
      }
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path:'/dasboard',
    element: <Dasboard/>,
    children: [{
      
    }]
  }
])
