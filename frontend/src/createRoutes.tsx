import { createBrowserRouter } from "react-router-dom";

import { Root, Main, SubCategorie, MainMenu, Rewards, Gift } from './routes';

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
                element: <Rewards />
            },
            {
                path: 'gift',
                element: <Gift />
            }
        ]
    }
]);

export default router;