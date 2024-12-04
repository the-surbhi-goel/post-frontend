import { Routes, Route } from "react-router-dom";
import { CreatePostPage, HomePage, PageNotFound } from "../pages";
import PATH from "../constants/Path";

const AllRoutes = () => {
  return (
    (
        <div className="">
            <Routes>
                <Route path="/" element={<HomePage title="All Post" />} />
                <Route path={PATH.home} element={<HomePage title="All Post" />} />
                <Route path={PATH.createPost} element={<CreatePostPage title="Create Post" />} />
                <Route path="*" element={<PageNotFound title="Page Not Found" />} />
            </Routes>
        </div>
      )
  )
}

export default AllRoutes