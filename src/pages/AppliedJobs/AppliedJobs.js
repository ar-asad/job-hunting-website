import React, { useEffect, useState } from 'react';
import AppledJobsAll from './AppledJobsAll';
import { getShoppingCart } from '../../utilities/fakedb';

const AppliedJobs = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('/feature.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id of the addedProduct
        for (const id in storedCart) {
            // step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                // step 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
            // console.log('added Product', addedProduct)
        }
        // step 5: set the cart
        setCart(savedCart);
    }, [products])
    console.log(cart)


    return (
        <div className='my-20'>
            <h2 className='text-4xl font-bold mb-32 text-center'>Applied Jobs</h2>
            {
                cart.map(sc => <AppledJobsAll key={sc.id} sc={sc}></AppledJobsAll>)
            }
        </div>
    );
};

export default AppliedJobs;