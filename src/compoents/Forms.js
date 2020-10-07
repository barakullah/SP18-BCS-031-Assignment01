import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
//import forms from './';
let i = 0;
let updated_id = 0;

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        name: "",
        age: "",
        city: "Lahore",
        gender: "",
        id: 0,
      },
      addRow: [],
    };
  }
  // disableButton = () => {
  //   return true;
  // };

  handlevalues = (event) => {
    this.setState({
      formValues: { name: "", gender: "", age: "", city: "" },
    });
  };

  handleSubmit = (event) => {
    i = i + 1;
    this.setState({ formValues: { ...this.state.formValues, id: i } });
    this.setState({
      addRow: [...this.state.addRow, this.state.formValues],
    });
    console.log("rows :", this.state.addRow);
  };

  handleUpdateTable = (id) => {
    this.setState({ disableButton: true });
    console.log("clicked row id is:", id);
    console.log("clicked row data is:", this.state.addRow[id]);
    this.setState({
      formValues: {
        ...this.state.formValues,
        name: this.state.addRow[id].name,
        age: this.state.addRow[id].age,
        city: this.state.addRow[id].city,
        gender: this.state.addRow[id].gender,
      },
    });
    updated_id = id;
  };

  handleUpdateForm = () => {
    console.log("updated id is :", updated_id);
    this.state.addRow[updated_id].name = this.state.formValues.name;
    this.state.addRow[updated_id].age = this.state.formValues.age;
    this.state.addRow[updated_id].city = this.state.formValues.city;
    this.state.addRow[updated_id].gender = this.state.formValues.gender;
    this.state.addRow[updated_id].id = updated_id;

    this.setState({
      addRow: [...this.state.addRow],
    });
    console.log("updated row is :", this.state.addRow);
    this.setState({ disableButton: false });
  };
  handleremoveTable = (deleted_id) => {
    this.state.addRow.splice(deleted_id, 1);
    this.setState({
      addRow: [...this.state.addRow],
    });
    console.log("remaining rows:", this.state.addRow);
  };

  render() {
    return (
      <div>
        <div id="head">
          <h3>Add/Update Person Form</h3>
        </div>

        <div id="form">
          <form>
            <label for="name" id="namee">
              Name :{" "}
            </label>
            <input
              id="name"
              type="text"
              value={this.state.formValues.name}
              onChange={(e) =>
                this.setState({
                  formValues: {
                    ...this.state.formValues,
                    name: e.target.value,
                  },
                })
              }
            />
            <br />{" "}
            <label for="gender" id="gender">
              Gender :{" "}
            </label>
            <input
              type="radio"
              name="gender"
              value="male"
              id="radm"
              checked={this.state.formValues.gender === "male"}
              onChange={(e) =>
                this.setState({
                  formValues: {
                    ...this.state.formValues,
                    gender: e.target.value,
                  },
                })
              }
            />
            <label id="ml">Male</label>
            <input
              type="radio"
              name="gender"
              value="female"
              id="radf"
              checked={this.state.formValues.gender === "female"}
              onChange={(e) =>
                this.setState({
                  formValues: {
                    ...this.state.formValues,
                    gender: e.target.value,
                  },
                })
              }
            />
            <label id="fm">Female </label>
            <br />
            <label for="age" id="age">
              Age :{" "}
            </label>
            <input
              id="agee"
              type="text"
              value={this.state.formValues.age}
              onChange={(e) =>
                this.setState({
                  formValues: {
                    ...this.state.formValues,
                    age: e.target.value,
                  },
                })
              }
            />
            <br />
            <br />
            <label for="city" id="city">
              {" "}
              City :{" "}
            </label>
            <select
              id="cityy"
              name="city"
              value={this.state.formValues.city}
              onChange={(e) =>
                this.setState({
                  formValues: {
                    ...this.state.formValues,
                    city: e.target.value,
                  },
                })
              }
            >
              <option value="Lahore">Lahore</option>
              <option value="Sahiwal">Sahiwal</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Abbotabad">Abbotabad</option>
            </select>
            <br />
            <br />
            <button
              id="reset"
              type="button"
              value="reset"
              disabled={this.state.disableButton}
              onClick={this.handlevalues}
            >
              reset
            </button>
            <button
              id="add"
              type="button"
              value="add"
              disabled={this.state.disableButton}
              onClick={this.handleSubmit}
            >
              add
            </button>
            <button
              id="update"
              type="button"
              value="update"
              disabled={!this.state.disableButton}
              onClick={this.handleUpdateForm}
            >
              update
            </button>
          </form>
        </div>
        <div id="table">
          <div id="tbl">
            <h3>List of persons</h3>
          </div>
          <table id="tableHEAD">
            <thead id="header">
              <tr>
                <td>
                  Name <hr />
                </td>
                <td>
                  age
                  <hr />
                </td>
                <td>
                  gender
                  <hr />
                </td>
                <td>
                  city
                  <hr />
                </td>
                <td>
                  action
                  <hr />
                </td>
              </tr>
            </thead>
            <tbody>
              {this.state.addRow.map(({ id, name, age, gender, city }) => (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{age}</td>
                  <td>{gender}</td>
                  <td>{city}</td>
                  <td>
                    <button onClick={() => this.handleUpdateTable(id)}>
                      update
                    </button>

                    <button onClick={() => this.handleremoveTable(id)}>
                      remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Forms;

// import React, { Component } from "react";
// //import logo from "./logo.svg";
// //import "./App.css";
// //import forms from './';
// let i = 0;
// let updated_id = 0;

// class Forms extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formValues: {
//         name: "",
//         age: "",
//         city: "Lahore",
//         gender: "",
//         id: 0,
//       },
//       addRow: [],
//     };
//   }

//   handlevalues = (event) => {
//     this.setState({
//       formValues: { name: "", gender: "", age: "", city: "" },
//     });
//   };

//   handleSubmit = (event) => {
//     i = i + 1;
//     this.setState({ formValues: { ...this.state.formValues, id: i } });
//     this.setState({
//       addRow: [...this.state.addRow, this.state.formValues],
//     });
//     console.log("rows :", this.state.addRow);
//   };

//   handleUpdateTable = (id) => {
//     console.log("clicked row id is:", id);
//     console.log("clicked row data is:", this.state.addRow[id]);
//     this.setState({
//       formValues: {
//         ...this.state.formValues,
//         name: this.state.addRow[id].name,
//         age: this.state.addRow[id].age,
//         city: this.state.addRow[id].city,
//         gender: this.state.addRow[id].gender,
//       },
//     });
//     updated_id = id;
//   };

//   handleUpdateForm = () => {
//     console.log("updated id is :", updated_id);
//     this.state.addRow[updated_id].name = this.state.formValues.name;
//     this.state.addRow[updated_id].age = this.state.formValues.age;
//     this.state.addRow[updated_id].city = this.state.formValues.city;
//     this.state.addRow[updated_id].gender = this.state.formValues.gender;
//     this.state.addRow[updated_id].id = updated_id;

//     this.setState({
//       addRow: [...this.state.addRow],
//     });
//     console.log("updated row is :", this.state.addRow);
//   };
//   handleremoveTable = (deleted_id) => {
//     console.log("id to be deleted:", deleted_id);
//     this.state.addRow.splice(deleted_id, 1);
//     this.setState({
//       addRow: [...this.state.addRow],
//     });
//     console.log("remaining rows:", this.state.addRow);
//   };

//   render() {
//     return (
//       <div>
//         <form>
//           <label for="name">Name : </label>
//           <input
//             type="text"
//             value={this.state.formValues.name}
//             onChange={(e) =>
//               this.setState({
//                 formValues: { ...this.state.formValues, name: e.target.value },
//               })
//             }
//           />
//           <br />
//           <label for="gender">Gender : </label>
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             checked={this.state.formValues.gender === "male"}
//             onChange={(e) =>
//               this.setState({
//                 formValues: {
//                   ...this.state.formValues,
//                   gender: e.target.value,
//                 },
//               })
//             }
//           />
//           <label>Male</label>
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             checked={this.state.formValues.gender === "female"}
//           />
//           <button type="button" onClick={this.handleUpdateForm}>
//             update
//           </button>
//         </form>

//         <h3>List of persons</h3>
//         <table class="table table-striped">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>age</th>
//               <th>gender</th>
//               <th>city</th>
//               <th>action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.addRow.map(({ id, name, age, gender, city }) => (
//               <tr key={id}>
//                 <td>{name}</td>
//                 <td>{age}</td>
//                 <td>{gender}</td>
//                 <td>{city}</td>
//                 <td>
//                   <button onClick={() => this.handleUpdateTable(id)}>
//                     update
//                   </button>
//                   /
//                   <button onClick={() => this.handleremoveTable(id)}>
//                     remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }
// export default Forms;
