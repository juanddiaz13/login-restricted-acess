import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import './Product.scss';

export const Products = () => {
  const url = '/api/products';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    console.log("entra a fetchProducts()")
    const resp = await fetch(url, {
      method: 'GET',
      headers: {
          'access-token': localStorage.getItem('token')
      }
  });
    const data = await resp.json();

    const productsFromBE = data.products.map((resp) => {
      return {
        id: resp.id,
        title: resp.id,
        url: resp.thumbnail,
        price: `${resp.price} ${resp.currency_id}`,
      };
    });
    setProducts(productsFromBE);
  };
  return (
    <>
      <div className='products'>
        <h1>Products</h1>
        <p>¡Sorpresa! No lista los productos, pero sí está enviando el access-token en el fetch y el link Productos se activa cuando existe un token válido</p>
        <div className='products-card-container'>
          {products.map((elm, index) => (
            <Card
              key={elm.id}
              title={elm.title}
              url={elm.url}
              description={elm.price}
            ></Card>
          ))}
        </div>
      </div>
    </>
  );
};
