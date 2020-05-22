import React from 'react'

class AddProduct extends React.Component {
  render(){
    return (
      <div className="col">
        <h2>Adicionar Produto</h2>
        <form>
          <div className="form-group">
            <label>Nome do produto:</label>
            <input className="form-control" />
          </div>
          <div className="form-group">
            <label>Categoria:</label>
            <input className="form-control" />
          </div>
          <button 
            type="submit" 
            className="btn btn-primary">Submit
          </button>
        </form>
      </div>
    )
  }
};

export default AddProduct