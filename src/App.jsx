import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Houses from './pages/Houses'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    element: <Layout/>,
    children:[
      {path:'admin/houses', element:<Houses/>}
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
