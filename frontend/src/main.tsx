import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from "react-router-dom";

import router from './createRoutes';

import './styles/index.scss';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
