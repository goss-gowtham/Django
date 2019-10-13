import React, { Component } from "react";
    import {
      Button,
      Modal,
      ModalHeader,
      ModalBody,
      ModalFooter,
      Form,
      FormGroup,
      Input,
      Label
    } from "reactstrap";

    export default class CustomModal extends Component {
      constructor(props) {
        super(props);
        this.state = {
          activeItem: this.props.activeItem
        };
      }
      handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "checkbox") {
          value = e.target.checked;
        }
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
      };
      render() {
        const { toggle, onSave } = this.props;
        return (
          <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}> School Details </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="title">Name</Label>
                  <Input
                    type="text"
                    name="school_name"
                    value={this.state.activeItem.school_name}
                    onChange={this.handleChange}
                    placeholder="Enter School Name"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="code">Code</Label>
                  <Input
                    type="text"
                    name="school_code"
                    value={this.state.activeItem.school_code}
                    onChange={this.handleChange}
                    placeholder="Enter School Code"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    type="text"
                    name="address"
                    value={this.state.activeItem.address}
                    onChange={this.handleChange}
                    placeholder="Enter School Address"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="started_date">Started Date</Label>
                  <Input
                    type="date"
                    name="started_date"
                    value={this.state.activeItem.started_date}
                    onChange={this.handleChange}
                    placeholder="Enter School Started Date"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="number_of_students">Students Count</Label>
                  <Input
                    type="number"
                    name="number_of_students"
                    value={this.state.activeItem.number_of_students}
                    onChange={this.handleChange}
                    placeholder="Enter number of students"
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                Save
              </Button>
            </ModalFooter>
          </Modal>
        );
      }
    }
