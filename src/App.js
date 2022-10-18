import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quizzes from './components/Quizzes/Quizzes';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>
        },
        {
          path:'/statistics',
          element: <Statistics></Statistics>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quizzes',
          loader: async () =>{
            return fetch('https://openapi.programming-hero.com/api/quiz/1')
          } ,
          element: <Quizzes></Quizzes>
        }
      ]
    }
  ])

  return (
    <div className="App container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;