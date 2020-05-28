import React from 'react'

class Products extends React.Component {
  constructor(props){
    super(props)
    this.deleteProduct = this.deleteProduct.bind(this)
    this.productCard = this.productCard.bind(this)
  }

  deleteProduct(id) {
    fetch('http://localhost:3001/produtos/'+ id, {
      method: 'DELETE'
    });
    console.log(id)
    window.location.reload(false);
  }

  productCard(product) {
    return (
      <div key={product.id} className="card mb-2 shadow-sm">
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h5 className="card-title">{product.descricao}</h5>
              <h6 className="card-subtitle mb-1 text-muted">{product.categorias.categoria}</h6>
            </div>
            <div className="col">
              <button 
                onClick={e => {e.preventDefault(); this.props.openEdit(product)}} 
                className="btn btn-default m-1" style={{"float": "right"}}>
                  <i className="fas fa-edit mr-1"></i>
                  Editar
              </button>
              <button 
                onClick={e => { e.preventDefault(); this.deleteProduct(product.id) } } 
                className="btn btn-danger m-1" style={{"float": "right"}}>
                  <i className="fas fa-trash mr-1"></i>
                  Apagar
              </button>
            </div>
          </div>
        </div>
      </div>
  )}

  render(){
    return (
      <div className="card m-3 p-3 shadow-lg border-0">
        <div className="row mb-2">
          <div className="col">
            <h2>Lista de Produtos</h2>
          </div>
          <div className="col">
            <h5>por categoria:</h5>
            <select className="form-control" name="searchByCategory" onChange={this.props.handleChange} required>
              <option value=''>Todas</option>
              {this.props.categories.map(category => (
                  <option key={category.id} value={category.id}>{category.categoria}</option>
              ))
              }
            </select>
          </div>
        </div>
        {this.props.searchByCategory 
        ? (this.props.products
          .filter((product) => product.categorias.id === parseInt(this.props.searchByCategory))
          .map(this.productCard))
        : (this.props.products.map(this.productCard))
        }
      </div>
    )
  }
};

export default Products