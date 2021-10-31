import React, {Component} from "react";
import './ProductCard.css';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className={'product'}>
        <img src={this.props.img} alt=""/>
        <h3 className={'product__title'}>{this.props.name}</h3>
        <p className="product__price">{this.props.price}</p>
      </div>
    )
  }
}

export default ProductCard;