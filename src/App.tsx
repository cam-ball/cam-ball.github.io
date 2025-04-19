import Projects from "./pages/Projects";
import About from "./pages/About";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
import { createHashRouter, RouterProvider } from "react-router";

const router = createHashRouter([
  {
    path: "/",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/hobbies",
    element: <Hobbies />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <div className="h-full bg-slate">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
