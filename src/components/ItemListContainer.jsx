import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 text-center">
          <h2>BIENVENIDOS A LA TIENDA DE CERAMICAR</h2>
          <p>{greeting}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;