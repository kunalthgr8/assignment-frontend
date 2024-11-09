import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "@/pages/SearchPage";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { validateString } from "@/utils/validateString";
import { searchUsers } from "@/services/api";

interface User {
	first_name: string;
	last_name: string;
	city: string;
	contact_number: string;
}

const Searchbar: React.FC = () => {
	const [value, setValue] = useState<string>("");
	const [results, setResults] = useState<User[]>([]);
	const query = useContext(SearchContext);
	const navigate = useNavigate();

	useEffect(() => {
		setValue(query);
	}, [query]);

	const handleSearch = async () => {
		console.log("Searching for", value);
		if (validateString(value)) {
			try {
				const searchResults = await searchUsers(value);
				setResults(searchResults);
				console.log("Fetched results:", searchResults);
				navigate(`/search?q=${encodeURIComponent(value)}`);
			} catch (error) {
				console.error("Error fetching results:", error);
				toast.error("Could not fetch search results. Please try again.");
			}
		} else {
			toast.error("Please enter a valid search query");
		}
	};

	return (
		<div
			className={`relative w-80 md:w-[500px] h-max rounded-md ${
				location.pathname === "/" ? "shadow-md" : "shadow-sm"
			}`}
		>
			<Search className="size-4 text-neutral-400 absolute top-[50%] -translate-y-1/2 left-3" />
			<Input
				placeholder="Search"
				className="pl-9 placeholder:text-neutral-3400"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						handleSearch();
					}
				}}
			/>
			<Button
				className="absolute h-full top-0 right-0 rounded-l-none"
				onClick={handleSearch}
			>
				Search
			</Button>

			{/* Render search results */}
			{/* {results.length > 0 && (
				<div className="search-results absolute bg-white shadow-lg rounded-md mt-2 w-full z-10">
					{results.map((user, index) => (
						<div key={index} className="user-card p-2 border-b border-gray-200">
							<p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
							<p><strong>City:</strong> {user.city}</p>
							<p><strong>Contact:</strong> {user.contact_number}</p>
						</div>
					))}
				</div>
			)} */}
		</div>
	);
};

export default Searchbar;
