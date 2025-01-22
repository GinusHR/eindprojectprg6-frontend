import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Create from "./pages/Create.jsx";
import Transformers from "./pages/Transformer.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/create',
                element: <Create/>
            },
            {
                path: '/transformers/:id',
                element: <Transformers/>
            },


        ]
    }
]);
function App() {

    return <RouterProvider router={router}/>;
}

export default App
