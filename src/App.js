import "./App.css";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// layout
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";
import CareerLayout from "./layout/CareerLayout";

//components
import Home from "./components/Home";
import About from "./components/About";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Careers from "./components/Careers";

// old way --- with previous versions of router
// function App() {
//   return (
//     <BrowserRouter>
//       <header>
//         <Navbar />
//       </header>
//       <main>
//         <Routes>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//         </Routes>
//       </main>
//     </BrowserRouter>
//   );
// }

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      {/*help route */}
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="careers" element={<CareerLayout />}>
        <Route index element={<Careers />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
