import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <h2 className="my-4">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
