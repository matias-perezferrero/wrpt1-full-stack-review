module.exports = {
    getAllProducts: async (req, res) => {
        const db = req.app.get('db');
        const products = await db.products.get_all_products({ decompose: {
            pk: 'product_id',
            columns: ['product_id', 'name', 'description', 'price', 'category'],
            product_images: {
                pk: 'product_image_id',
                columns: { product_image_id: 'product_image_id', url: 'url' }
            }
        }} );

        res.status(200).send(products)
    },
    getSpecificProducts: async (req, res) => {
        const db = req.app.get('db');
        const { ids } = req.body;

        const products = await db.products.get_specific_products({ ids });

        res.status(200).send(products)
    },
    getProduct: async (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        const [ product ] = await db.products.get_product({ id });

        res.status(200).send(product);
    }
}