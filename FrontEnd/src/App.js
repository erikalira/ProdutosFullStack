import React from 'react';
import Products from './components/products';

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      products: []
    }
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
      <Products products={this.state.products} />
    );
  }
  
}

export default App;
