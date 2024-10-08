
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spin } from 'antd';
import useFetch  from '../../../hooks/useFetch';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, loading] = useFetch(`/product/single-product/${id}`);


  if (loading) return <Spin size="large" />;

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <>
      <h1>{product.product_name}</h1>
      <p>{product.description}</p>
      <p>Original Price: ${product.original_price}</p>
      <p>Sale Price: ${product.sale_price}</p>
      <p>Category: {product.category}</p>
      <p>In Stock: {product.number_in_stock}</p>
      <img src={product.product_images[0]} alt={product.product_name} style={{ width: 200, height: 200, objectFit: 'contain' }} />
      </>
    </div>
  );
};

export default SingleProduct;
