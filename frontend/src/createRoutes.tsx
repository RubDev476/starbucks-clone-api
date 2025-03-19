import { createBrowserRouter } from "react-router-dom";

import { Root, Main, SubCategorie, MainMenu, Rewards, Gift, Product } from './routes';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <div>Not Found</div>,
        children: [
            {
                path: '/',
                element: <Main />,
            },
            {
                path: 'menu',
                element: <MainMenu />,
                children: [
                    {
                        path: ':subCategorie',
                        element: <SubCategorie />
                    }
                ]
            },
            {
                path: 'menu/product/:id',
                element: <Product />
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