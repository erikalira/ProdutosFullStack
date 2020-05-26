import React from 'react';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      products: [],
      categories: [],
      editing: false,
      id: null,
      product: '',
      category: ''
    }
    this.editRow = this.editRow.bind(this)
    this.closeEdit = this.closeEdit.bind(this)
    this.addUser = this.addUser.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addUser(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        descricao: this.state.product,
        id_categoria: this.state.category
      })
    };

    fetch('http://localhost:3001/produtos/', requestOptions)
        .then(response => response.json());
    window.location.reload(false);
  }

  editRow(event) {
    event.preventDefault()
    this.setState({
      editing: true
    })
  }

  closeEdit(event) {
    event.preventDefault()
    this.setState({
      editing: false,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component re-rendered.')
  }

  componentDidMount() {
    fetch('http://localhost:3001/produtos')
    .then(res => res.json())
    .then((data) => {
      console.table(data.products);
      this.setState({ products: data.products })
    })
    .catch(console.log)

    fetch('http://localhost:3001/categorias')
    .then(res => res.json())
    .then((data) => {
      console.table(data.categorias);
      this.setState({ categories: data.categorias })
    })
    .catch(console.log)
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {this.state.editing ?
              <EditProduct closeEdit={this.closeEdit} /> 
              : <AddProduct categories={this.state.categories} handleChange={this.handleChange} addUser={this.addUser} />
            }
          </div>
          
          <Products products={this.state.products} editRow={this.editRow} />
        </div>
      </div>
    );
  }
  
}

export default App;
