import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from "../action";

class ItemJob extends Component {

  render() {
    let {stt, itemTask} = this.props;
    return (
        <tr>
          <th>{stt}</th>
          <td>{itemTask.name}</td>
          <td>
            <button type="button"
                    onClick={ () => this.props.changeStatus(itemTask.id)}
                    className={itemTask.status? 'btn-primary' : 'btn-danger'}>
              {itemTask.status? 'Đã xong': 'Chưa xong'}
            </button>
          </td>
          <td>
            <button type="button" onClick={this.props.openForm}
                    className="btn btn-warning">Sửa
            </button> &nbsp;
            <button type="button"
                    className="btn btn-danger">
              Xoá
            </button>
          </td>
        </tr>
    );
  }
}

let mapStateToProps = () => {
  return {

  };
};

let mapDispatchToProps = (dispatch, props) => {
  return {
    openForm: () => {
      dispatch(action.openForm());
    },
    changeStatus: (id) => {
      dispatch(action.updateStatus(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemJob);
