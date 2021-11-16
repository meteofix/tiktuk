import React from 'react';
import {routes} from "../utils/routes";
import { Route, Routes} from "react-router-dom";


const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, Element}) =>
                <Route key={path} path={path} element={Element} exact/>
            )}
        </Routes>
    );
};

export default AppRouter;