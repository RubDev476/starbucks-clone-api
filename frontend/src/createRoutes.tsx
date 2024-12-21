import { createBrowserRouter } from "react-router-dom";

import { Root, Main, SubCategorie, MainMenu } from './routes';

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
                element: <MainMenu />,
                children: [
                    {
                        path: ':category/:subCategorie',
                        element: <SubCategorie />
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