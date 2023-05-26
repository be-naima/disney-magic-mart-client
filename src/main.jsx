
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Components/Routes/Routes.jsx';
import AuthProvider from '../src/Components/AuthProviders/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <AuthProvider>
   
   <RouterProvider router={router} />
   </AuthProvider>
  
)
