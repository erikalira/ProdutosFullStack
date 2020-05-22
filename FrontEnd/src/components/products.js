import React from 'react'

class Products extends React.Component {
  render(){
    return (
      <div className="col">
        <h2>Lista de Produtos</h2>
        {this.props.products.map((product) => (
          <div key={product.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{product.descricao}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{product.categorias.categoria}</h6>
              <button 
                onClick={this.props.editRow} 
                className="btn btn-default margin: 1rem">
                  Editar
              </button>
              <button className="btn btn-default">Apagar</button>
            </div>
          </div>
        ))}
      </div>
    )
  }
};

export default Products