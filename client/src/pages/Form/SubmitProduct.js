import React from "react";
import { Redirect } from "react-router-dom";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

class SubmitProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      success: false,
      productName: "",
      description: "",
      price: "",
      amount: "",
      sellerID: "",
      category: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const productData = {
      productName: this.state.productName,
      description: this.state.description,
      price: this.state.price,
      amount: this.state.amount,
      sellerID: this.state.sellerID,
      category: this.state.category,
    };

    console.log(productData);

    fetch("/api/products", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productData)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
          console.log(res);
        }
        throw new Error("Product Validation");
      })
      .then(product => {
        this.setState({
          success: true
        });
      })
      .catch(err => {
        this.setState({
          error: true
        });
        console.log(err);
      });
  }

  render() {
    if (this.state.success) return <Redirect to="/" />;

    let errorMessage = null;
    if (this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error submiting this product."
        </div>
      );
    }

    return (
      <div className="col-10 col-md-8 col-lg-7">
        <h3>
          Please enter following information for submitting product to sell
        </h3>
        {errorMessage}
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-full-width"
            label="Product Name"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            type="text"
            required
            onChange={e => {
              this.setState({ productName: e.target.value });
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-full-width"
            label="Product Description"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            type="text"
            required
            rows="5"
            multiline
            onChange={e => {
              this.setState({ description: e.target.value });
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-full-width"
            label="Price"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            type="number"
            required
            onChange={e => {
              this.setState({ price: e.target.value });
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-full-width"
            label="Amount"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            type="number"
            required
            onChange={e => {
              this.setState({ amount: e.target.value });
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-full-width"
            label="sellerID"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            type="number"
            required
            onChange={e => {
              this.setState({ sellerID: e.target.value });
            }}
            variant="outlined"
          />
          <TextField
            id="outlined-full-width"
            label="category"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            type="text"
            required
            onChange={e => {
              this.setState({ category: e.target.value });
            }}
            variant="outlined"
          />
          <Button
            type="submit"
            fullWidth
            size="small"
            variant="contained"
            color="primary"
          >
            Submit Product
          </Button>
        </form>
      </div>
    );
  }
}

export default SubmitProduct;
