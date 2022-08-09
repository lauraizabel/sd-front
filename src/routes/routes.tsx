import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

import Home from "../pages/home/home";
import Note from "../pages/note/note";

const paths = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/note",
    component: Note,
  },
];

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        {paths.map((path) => (
          <Route
            key={path.path}
            path={path.path}
            element={<path.component />}
          />
        ))}
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
