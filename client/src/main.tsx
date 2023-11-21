import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
//import 'polyfill.io/v3/polyfill.min.js?features=default';

ReactDOM.createRoot(document.getElementById('root')!).render(

    <RouterProvider router={router} />
)