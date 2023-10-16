import { FormComponent } from './components/FormComp/FormComponent';
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { FormProvider } from './Context/Context';
// import { YourInfo } from './components/Steps/YourInfo/YourInfo';
import './App.css'


const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <FormComponent /> },
  ])

  return routes
}

function App() {
  return (
    <FormProvider>
      <BrowserRouter>
        <AppRoutes />
        {/* <YourInfo /> */}
        {/* <NextStep /> */}
      </BrowserRouter>
    </FormProvider>
  )
}

export default App
