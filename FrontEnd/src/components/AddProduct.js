import React from 'react'

class AddProduct extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      id: null,
      product: '',
      category: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.addUser = this.addUser.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addUser(event) {
    event.preventDefault();
    alert('A product was submitted: ' + this.state.product + this.state.category);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        descricao: this.state.product,
        id_categoria: 2
      })
    };
    fetch('http://localhost:3001/produtos/', requestOptions)
        .then(response => response.json())
        .then(data => {
          this.setState({ id: data.products.id }) 
          console.log(data.products)
        });
    window.location.reload(true);
  }

  render(){
    return (
      <div className="col">
        <h2>Adicionar Produto</h2>
        <form onSubmit={this.addUser}>
          <div className="form-group">
            <label>Nome do produto:</label>
              <input className="form-control" type='text' name="product" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label>Categoria:</label>
              <input className="form-control" type='text' name="category" onChange={this.handleChange} />
          </div>
          <button 
            type="submit"
            className="btn btn-primary">Adicionar
          </button>
        </form>
      </div>
    )
  }
};

export default AddProduct