import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag (1).svg'
import '../cart-icon/cart-icon.styles.scss'
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import CartItem from '../cart-item/cart-item';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';


const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon) 
