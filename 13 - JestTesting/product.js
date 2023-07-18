export default {
    getCategories(jsonData) { 
        const data = JSON.parse(jsonData);
        const categories = {};

        data.forEach((product) => 
            (categories[product.category.id] = product.category),
        );

        return Object.values(categories).sort((a,b) => parseInt(a.position, 10) - parseInt(b.position, 10))
                .map((category) => category.name);
    }
}