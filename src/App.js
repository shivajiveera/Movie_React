
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import Movie from './components/Movie';
import Actor from './components/Actor';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/search/:movie",
      element: <SearchResults />,
    },
    {
      path: "/movie/:movieId",
      element: <Movie />,
    },
    {
      path: "/actor/:actorId",
      element: <Actor />,
    },
  ]);

  return (
    <div className="App">
      <>
        <RouterProvider router={router} />
      </>
    </div>
  );
}

export default App;
