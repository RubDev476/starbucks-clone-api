import { Outlet } from "react-router-dom";

import { Header, Footer } from "../components/layouts";

export default function Root() {
    return(
        <>
            <Header />

            <Outlet />

            <Footer />
        </>
    )
}
