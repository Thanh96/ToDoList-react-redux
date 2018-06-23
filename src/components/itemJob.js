import React, { Component } from 'react';

class ItemJob extends Component {
  updateState = () => {
    this.props.updateState(this.props.itemTask);
  };

  deleteJob = () => {
    this.props.deleteJob(this.props.itemTask);
  };

  updateJob = () => {
    this.props.updateJob(this.props.itemTask);
  };

  render() {
    let {stt, itemTask} = this.props;
    return (
        <tr>
          <th>{stt}</th>
          <td>{itemTask.name}</td>
          <td>
            <button onClick={this.updateState}
                    className={itemTask.status? 'btn-primary' : 'btn-danger'}>
              {itemTask.status? 'Đã xong': 'Chưa xong'}
            </button>
          </td>
          <td>
            <button type="button" onClick={this.updateJob}
                    className="btn btn-warning">Sửa
            </button> &nbsp;
            <button type="button"
                    onClick={this.deleteJob}
                    className="btn btn-danger">
              Xoá
            </button>
          </td>
        </tr>
    );
  }
}

export default ItemJob;
