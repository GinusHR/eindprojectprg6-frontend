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
                path: '/',
                element: <Create/>
            },
            {
                path: '/:id',
                element: <Transformers/>
            },

            {
                path: '/:id',
            }
        ]
    }
]);
function App() {

    return <RouterProvider router={router}/>;
}

export default App
