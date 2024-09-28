// import { useState } from 'react'
import Projects from "./pages/Projects";
import About from "./pages/About";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
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
