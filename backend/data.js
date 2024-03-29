import bcrypt from "bcryptjs"
const data = {
    user:[
        {
            name: 'Joy',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Jhon',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],

    products: [
        { 
            //_id: '1',
            name: 'Nike Slim shirts',
            slug: 'nike-slim-shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            countStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            descriptions: 'high quality shirts',
        },
        { 
            //_id: '2',
            name: 'Adidas Fit shirts',
            slug: 'adidas-fit-shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 250,
            countStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            descriptions: 'high quality product',
        },
        { 
            //_id: '3',
            name: 'Nike Slim Pants',
            slug: 'nike-slim-pants',
            category: 'Pants',
            image: '/images/p3.jpg',
            price: 25,
            countStock:0,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            descriptions: 'high quality products',
        },
        { 
            //_id: '4',
            name: 'Adidas Fit Pants',
            slug: 'Adidas-Fit-pants',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 65,
            countStock: 5,
            brand: 'Puma',
            rating: 4.5,
            numReviews: 10,
            descriptions: 'high quality products',
        },
    ],
};
export default data;