import { createBrowserRouter } from "react-router-dom";

import { Root, Main } from './routes';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: 'menu',
                element: <main>adadad</main>,
                children: [
                    {
                        path: ':id',
                        element: <main>nested</main>
                    },
                ]
            },
            {
                path: 'rewards',
                element: <main>rewards</main>
            },
            {
                path: 'gift',
                element: <main>gift</main>
            }
        ]
    }
]);

export default router;