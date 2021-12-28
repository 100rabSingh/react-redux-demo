import React from 'react'
import { buyDonut } from './redux'
import { connect } from 'react-redux'

function DonutContainer(props) {
    return (
        <div>
            <h2>Number of Donuts - {props.numOfDonuts}</h2>
            <button onClick={props.buyDonut}> Buy Donut </button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfDonuts: state.donut.numOfDonuts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyDonut: () => dispatch(buyDonut()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonutContainer)
