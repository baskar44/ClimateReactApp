import _ from 'lodash'
import React from 'react'
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'


function average(data) {
    return _.round(_.sum(data)/data.length)
}


export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={120} data={props.data}>
                <SparklinesLine color={props.color} />  
                <SparklinesReferenceLine type="mean" color={props.color}/>
            </Sparklines>
            <div>
                <strong>{average(props.data)} {props.units}</strong>
            </div>
        </div>
    )
} 