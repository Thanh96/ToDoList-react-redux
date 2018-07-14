import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from '../action/index';

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false
    };
  }

  clear() {
    this.setState({
      id: "",
      name: "",
      status: false
    });
  }

  componentWillMount() {
    if(this.props.itemSelect) {
      this.setState({
        id: this.props.itemSelect.id,
        name: this.props.itemSelect.name,
        status: this.props.itemSelect.status,
      })
    } else {
      this.clear();
    }
  }

  componentWillReceiveProps(newProps) {
    if(newProps && newProps.itemSelect) {
      this.setState({
        id: newProps.itemSelect.id,
        name: newProps.itemSelect.name,
        status: newProps.itemSelect.status
      })
    } else {
      this.clear();
    }
  }

  changeForm = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  itemId = () => {
    return Math.floor((1 + Math.random())* 0x1000).toString().substring(3)
  };

  generateId = () => {
    return this.itemId() + '-' + this.itemId() + '-' + this.itemId() + '-' + this.itemId();
  };

  submitForm = (e) => {
    e.preventDefault();
    let newJob = this.state;
    newJob.status = newJob.status === 'true'? true: false;
    if (this.props.itemSelect) {
      this.props.onUpdateTask(newJob);
    } else {
      newJob.id = this.generateId();
      this.props.onAddTask(newJob);
    }
    this.props.onCloseForm();
  };

  render() {
    return (
        <div className="addNew">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                {this.props.itemSelect? 'Cập Nhập Công Việc' : 'Thêm Công Việc'}
                <span onClick={this.props.onCloseForm}>X</span>
              </div>
              <div className="card-text">
                <form onSubmit={this.submitForm}>
                  <div className="form-group">
                    <label >Tên:</label>
                    <input type="type"
                           className="form-control"
                           name="name"
                           id="exampleInputEmail1"
                           value={this.state.name}
                           onChange={this.changeForm}
                           placeholder="Nhập tên công việc"/>
                  </div>
                  <div className="form-group">
                    <label>Trạng Thái:</label>
                    <select className="form-control"
                            name="status"
                            onChange={this.changeForm}
                            value={this.state.status}>
                      <option value={true}>Đã xong</option>
                      <option value={false}>Chưa xong</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    {this.props.itemSelect? "Update" : "Add"}
                  </button> &nbsp;
                  <button type="reset" className="btn btn-default">Làm mới</button>
                </form>
              </div>
              {/*card-text*/}
            </div>
            {/*card-body*/}
          </div>
          {/*card*/}
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemSelect: state.itemSelect
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask: (task) => {
      dispatch(action.addTask(task));
    },
    onCloseForm: () => {
      dispatch(action.closeForm());
    },
    onUpdateTask: (task) => {
      dispatch(action.updateTask(task));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNew);
