import React from 'react';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      products: [],
      editing: false
    }
    this.editRow = this.editRow.bind(this)
    this.closeEdit = this.closeEdit.bind(this)
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
      //console.table(data.products);
      this.setState({ products: data.products })
    })
    .catch(console.log)
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            {this.state.editing ?
              <EditProduct closeEdit={this.closeEdit} /> : <AddProduct />
            }
          </div>
          
          <Products products={this.state.products} editRow={this.editRow} />
        </div>
      </div>
    );
  }
  
}

export default App;
