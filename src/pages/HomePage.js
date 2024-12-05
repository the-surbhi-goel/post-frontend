import { useTitle } from "../hooks/useTitle";
import { PostList } from "../components";

const HomePage = () => {
  useTitle("Home");

  return <PostList />;
};

export default HomePage;
