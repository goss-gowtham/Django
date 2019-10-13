import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      activeItem: {
        school_name: "",
        school_code: "",
        address: "",
        started_date: "",
        number_of_students: ""
      },
      schoolList: []
    };
  }
  componentDidMount() {
        this.refreshList();
  }
  refreshList = () => {
    console.log(axios.get("/api/school/"));
    axios
      .get("/api/school/")
      .then(res => this.setState({ schoolList: res.data.objects }))
      .catch(err => console.log(err));
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  handleSubmit = item => {
    this.toggle();
    if (item.id) {
          axios
            .put(`/api/school/${item.id}/`, item)
            .then(res => this.refreshList());
          return;
        }
        axios
          .post("/api/school/", item)
          .then(res => this.refreshList());
      };
  handleDelete = item => {
    axios.delete(`/api/school/${item.id}`)
        .then(res => this.refreshList());
    };
  createItem = () => {
    const item = {school_name: "", school_code: "", address: "", started_date: "", number_of_students: "" };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  renderItems = () => {
    const newItems = this.state.schoolList;
    return newItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span
          className={`mr-2`}
          title={item.school_code}
        >
          {item.school_name} ({item.school_code})
        </span>
        <span
          className={`mr-2`}
          title="School Address"
        >
          {item.address}
        </span>
        <span
          className={`mr-2`}
          title="Started Date"
        >
          {item.started_date}
        </span>
        <span
          className={`mr-2`}
          title="Number of Students"
        >
          {item.number_of_students}
        </span>
        <span>
          <button
            onClick={() => this.editItem(item)}
            className="btn btn-secondary mr-2"
          >
            Edit
          </button>
          <button
            onClick={() => this.handleDelete(item)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </span>
      </li>
    ));
  };
  render() {
    return (
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Greenmile - Schools</h1>
        <div className="row">
          <div className="col-md-9 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="text-right">
                <button onClick={this.createItem} className="btn btn-primary">
                  Add School
                </button>
              </div>
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}
export default App;
