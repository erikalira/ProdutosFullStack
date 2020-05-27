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
      <div className="card mr-4 mt-3 mb-3 p-3 shadow-lg border-0">
        <h2>Lista de Produtos</h2>
        {this.props.products.map((product) => (
          <div key={product.id} className="card mb-2 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{product.descricao}</h5>
              <h6 className="card-subtitle mb-1 text-muted">{product.categorias.categoria}</h6>
              <button 
                onClick={e => {e.preventDefault(); this.props.openEdit(product)}} 
                className="btn btn-default m-1">
                  <i class="fas fa-edit mr-1"></i>
                  Editar
              </button>
              <button 
                onClick={e => { e.preventDefault(); this.deleteProduct(product.id) } } 
                className="btn btn-danger m-1">
                  <i class="fas fa-trash mr-1"></i>
                  Apagar
              </button>
              
            </div>
          </div>
        ))}
      </div>
    )
  }
};

export default Products