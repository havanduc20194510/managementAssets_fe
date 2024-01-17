import useRouteElement from './useRouteElement'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElemts = useRouteElement()
  return (
    <div>
      {routeElemts}
      <ToastContainer />
    </div>
  )
}

export default App
