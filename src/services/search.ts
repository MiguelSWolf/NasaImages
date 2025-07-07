export async function searchImages(query = "jupiter", page = 1) {
	try {
		const response = await fetch(
			`https://images-api.nasa.gov/search?q=${query}`
		);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}
		const json = await response.json();
		return json;
	} catch (error) {
		console.error({ error });
	}
}
