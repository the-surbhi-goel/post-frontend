import { Routes, Route } from "react-router-dom";
import { CreatePostPage, HomePage, PageNotFound } from "../pages";
import PATH from "../constants/Path";
import ProtectedRoutes from "./ProtectedRoutes";
import SearchPage from "../pages/SearchPage";

const AllRoutes = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage title="All Post" />} />
        <Route path={PATH.home} element={<HomePage title="All Post" />} />
        <Route path={PATH.search} element={<SearchPage />} />
        <Route
          path={PATH.createPost}
          element={
            <ProtectedRoutes>
              <CreatePostPage title="Create Post" />{" "}
            </ProtectedRoutes>
          }
        />
        <Route path="*" element={<PageNotFound title="Page Not Found" />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
