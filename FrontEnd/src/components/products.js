import React from 'react'

const Products = ({ products }) => {
  return (
    <div>
      <center><h1>Lista de Produtos</h1></center>
      {products.map((product) => (
        <div key={product.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{product.descricao}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{product.categorias.categoria}</h6>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Products