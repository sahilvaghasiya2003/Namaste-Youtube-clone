import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Demo from "./components/Demo";


const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<MainContainer/>
    },
    {
      path:"/watch",
      element:<WatchPage/>
    },
    
    {
      path:"/demo",
      element:<Demo/>
    },
  ]
}])

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <h1 className='bg-red-50 font-bold text-3xl' >Namaste React</h1> */}

      <Head />
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
