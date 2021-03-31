SELECT products.*, product_images.*
FROM products LEFT JOIN product_images
ON products.product_id = product_images.product_id