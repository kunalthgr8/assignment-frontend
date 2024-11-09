import data from "@/data/index.json";
import { SearchContext } from "@/pages/SearchPage";
import { searchInObject } from "@/utils/searchInObject";
import { useContext } from "react";
import Searchbar from "./Searchbar";
import UserCard from "./UserCard";

const SearchResults = () => {
  const query = useContext(SearchContext);
  console.log(data[0].first_name);
  const filteredData = data.filter((item) => searchInObject(item, query));

  return (
    <div className="flex flex-wrap justify-center gap-8 p-10 max-w-7xl">
      <div className="flex justify-center self-center w-full md:hidden ">
        <Searchbar />
      </div>
      {filteredData.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-y-4 h-96 mt-5 text-center">
          <img src="noresults.png" alt="No Result Found" />
        </div>
      ) : (
        filteredData.map((item, idx) => (
          <UserCard key={`${idx}-${item.first_name}`} user={item} />
        ))
      )}
    </div>
  );
};
export default SearchResults;
