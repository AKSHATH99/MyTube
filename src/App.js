import { Provider } from 'react-redux';
import './App.css';
import Maincontainer from './components/Maincontainer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';
import store from './store';
import Watch from './components/Watch';
import Sidebar from './components/Sidebar';
import Settings from './components/Settings';
import APIcontext from './APIcontext'


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<Maincontainer/>
      },
      {
        path:"watch",
        element:<Watch/>
      },
      {
        path:"settings",
        element:<Settings/>
      }
    ]
  },
 
])

function App() {
  return (
    <APIcontext.Provider value={{ Channelname: 'Marvel Studios', SubscriberCount: '1M' }}>
    <Provider store={store}>
    <div >
      {/* <h1 className='bg-pink-400'>NAMASTE REACT</h1> */}
      <Header/>
      <Sidebar/>
      <RouterProvider router={appRouter}>
      </RouterProvider>
    </div>
    </Provider>
    </APIcontext.Provider>
  );
}

export default App;
