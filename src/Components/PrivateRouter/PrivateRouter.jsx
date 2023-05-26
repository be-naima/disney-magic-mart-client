import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProviders/AuthProvider';
import Loading from '../Pages/Loading/Loading';



const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(user)
     {
        return children
     }

    if(location){
        Swal.fire({
            title: '',
            text: 'You have to login to view details',
            icon: 'info',
            confirmButtonText: 'Cool'
        })
       
              
                return <Navigate state={{from:location}} to='/login'  replace></Navigate>
           
    }
    
        
     
};

export default PrivateRouter;