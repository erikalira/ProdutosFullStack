import React from 'react'

class EditProduct extends React.Component {
    render(){
        return (
        <div className="col">
            <h2>Editar Produto</h2>
            <form>
            <div className="form-group">
                <label>Nome do produto:</label>
                <input className="form-control" />
            </div>
            <div className="form-group">
                <label>Categoria:</label>
                <input className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Editar</button>
            <button onClick={this.props.closeEdit}  className="btn btn-danger">Cancelar</button>
            </form>
        </div>
        )
    }
};

export default EditProduct