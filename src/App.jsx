import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import JobListings from "./components/JobListings";
import Notfound from "./pages/Notfound";
import JobPage from "./pages/JobPage";
import AddJob from "./pages/AddJob";
import DeleteJob from "./pages/DeleteJob";
import EditJob from "./pages/EditJob";

const App = () => {
  document.title = "Diamond jobs";

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/jobsPage/:id" element={<JobPage />} />
        <Route path="/jobs/delete/:id" element={<DeleteJob />} />
        <Route path="/jobs/edit/:id" element={<EditJob />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
