import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from './redux'

function ItemContainer(props) {
    return (
        <div>
            <h2>Items - {props.item}</h2>
            <button onClick={props.buyItem}> Buy Item </button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams

    return {
        item: itemState,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFuntion = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFuntion,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
