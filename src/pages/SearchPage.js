import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { PostList } from "../components";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  useTitle("Search " + searchTerm);

  return <PostList authorName={searchTerm} />;
};

export default SearchPage;
