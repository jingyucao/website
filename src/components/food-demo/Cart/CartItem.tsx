import classes from './CartItem.module.css';
import {cartItemType} from "./Cart";

const CartItem = (props: cartItemType) => {

    const price = `€ ${props.price.toFixed(2)}`

    return (<li>
        <div className={classes['cart-item']}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.summary}>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button>-</button>
                <button>+</button>
            </div>
        </div>

    </li>)
}

export default CartItem;
