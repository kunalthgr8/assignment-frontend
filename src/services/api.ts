import axios from 'axios';

// const API_BASE_URL = 'http://127.0.0.1:8000/api';

interface User {
    id: number;
    first_name: string;
    last_name: string;
    city: string;
    contact_number: string;
}

export const searchUsers = async (query: string): Promise<User[]> => {
    try {
        const response = await axios.get<{ results: User[] }>(`${import.meta.env.API_BASE_URL}/search/`, { params: { query } });
        console.log("Search results:", response);
        return response.data.results;
    } catch (error) {
        console.error("Error fetching search results:", error);
        return [];
    }
};
