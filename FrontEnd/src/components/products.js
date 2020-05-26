import React from 'react'

class Products extends React.Component {
  constructor(props){
    super(props)
    this.deleteProduct = this.deleteProduct.bind(this)
  }

  deleteProduct(id) {
    fetch('http://localhost:3001/produtos/'+ id, {
      method: 'DELETE'
    });
    console.log(id)
    window.location.reload(false);
  }

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
              <button onClick={e => { e.preventDefault(); this.deleteProduct(product.id) } } className="btn btn-danger">Apagar</button>
              
            </div>
          </div>
        ))}
      </div>
    )
  }
};

export default Products