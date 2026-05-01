export const getProducts = async () => {
    try {
        const res = await fetch('https://suncart-store.vercel.app/products.json');

        if (!res.ok) {
            throw new Error(`Failed to fetch products: ${res.status}`);
        }

        const products = await res.json();
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return []; // fallback to avoid breaking UI
    }
};