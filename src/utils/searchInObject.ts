export function searchInObject(obj: any, search: string) {
	const lowerSearchTerm = search.toLowerCase();

	for (let key in obj) {
		const value = obj[key];
		if (value.toString().toLowerCase().includes(lowerSearchTerm)) {
			return true;
		}
	}
	return false;
}