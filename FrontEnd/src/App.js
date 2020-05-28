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
      category: null,
      searchByCategory: ''
    }
    this.openEdit = this.openEdit.bind(this)
    this.closeEdit = this.closeEdit.bind(this)
    this.editProduct = this.editProduct.bind(this)
    this.addProduct = this.addProduct.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    //console.log([event.target.name, event.target.value])
  }

  editProduct(event){
    event.preventDefault();
    console.log([this.state.product,this.state.category])
    fetch('http://localhost:3001/produtos/'+ this.state.id, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'PUT',
      body: JSON.stringify({
        descricao: this.state.product,
        id_categoria: this.state.category
      })
    })
    window.location.reload(false);
  }

  addProduct(event) {
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

  openEdit(product) {
    this.setState({
      editing: true,
      id: product.id,
      product: product.descricao,
      category: product.categorias.id
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
      //console.table(data.products);
      this.setState({ products: data.products })
    })
    .catch(console.log)

    fetch('http://localhost:3001/categorias')
    .then(res => res.json())
    .then((data) => {
      //console.table(data.categorias);
      this.setState({ categories: data.categorias })
    })
    .catch(console.log)
  }

  render(){
    return (
      <div>
        <nav className="navbar-expand navbar-white bg-white shadow-sm">
          <h1 className="pb-2 text-center"  style={{fontFamily: 'Montserrat', fontSize: 45}}>Gerenciar Produtos</h1>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              {this.state.editing ?
                <EditProduct product={this.state.product} editProduct={this.editProduct}  closeEdit={this.closeEdit} categories={this.state.categories} handleChange={this.handleChange} /> 
                : <AddProduct categories={this.state.categories} handleChange={this.handleChange} addProduct={this.addProduct} />
              }
            </div>
            <div className="col">
              <Products handleChange={this.handleChange} searchByCategory={this.state.searchByCategory} categories={this.state.categories} products={this.state.products} openEdit={this.openEdit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
