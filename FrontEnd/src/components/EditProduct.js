import React from 'react'

class EditProduct extends React.Component {
    render(){
        return (
            <div className="card m-3 p-3 shadow-lg border-0">
                <h2>Editar Produto</h2>
                <form onSubmit={this.props.editProduct}>
                <div className="form-group">
                    <label>Nome do produto:</label>
                    <input className="form-control" type='text' name="product" value={this.props.product} onChange={this.props.handleChange} required />
                </div>
                <div className="form-group">
                    <label>Categoria:</label>
                    <select className="form-control" name="category" id="categoria" onChange={this.props.handleChange} required>
                        <option defaultValue></option>
                    {this.props.categories.map((category) => (
                        <option key={category.id} value={category.id}>{category.categoria}</option>
                    ))
                    }
                    </select>
                </div>
                <button type="submit" className="btn btn-primary m-1">Editar</button>
                <button 
                    onClick={this.props.closeEdit}  
                    className="btn btn-danger m-1">
                        Cancelar
                </button>
                </form>
            </div>
        )
    }
};

export default EditProduct