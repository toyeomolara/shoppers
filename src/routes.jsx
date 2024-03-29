import {createBrowserRouter} from 'react-router-dom';
import { Cart } from './modules/pages/Cart';
import { Shop } from './modules/pages/Shop';
import { Payment } from './modules/pages/Payment';

export const router = createBrowserRouter([

    {
        path:"/cart",
        element:<Cart/>
    },

    {
        path:"/shop",
        element:<Shop/>
    },
    {
        path:"/payment",
        element:<Payment/>
    },
   
])