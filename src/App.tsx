import useRouteElement from './useRouteElement'

function App() {
  const routeElemts = useRouteElement()
  return <div>{routeElemts}</div>
}

export default App
