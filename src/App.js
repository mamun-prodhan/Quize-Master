import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import TopicDetail from './components/TopicDetail/TopicDetail';
import NotFound from './components/NotFound/NotFound';


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
          loader: async({params}) =>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        },
        {
          path:'/quiz/:quizId',
          loader: async({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <TopicDetail></TopicDetail>
        }
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ])

  return (
    <div className="App container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;