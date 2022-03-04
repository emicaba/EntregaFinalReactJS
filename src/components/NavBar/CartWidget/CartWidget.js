import * as React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from '../../Cart/CartContext';

const CartWidget = () => {

  const test = React.useContext(CartContext)
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={test.cartList.length} color="secondary" anchorOrigin={{
    vertical: 'top',
    horizontal: 'right',
  }}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartWidget