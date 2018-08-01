import React, { Component } from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'


class WeatherList extends Component {

    renderWeather(cityData){

        if(cityData == null) {
            //todo
            console.log("no city with that name exists.")
            return
        }

        const temps = cityData.list.map(weather => weather.main.temp)
        const pressures = cityData.list.map(weather => weather.main.pressure)
        const humidity = cityData.list.map(weather => weather.main.humidity)
        console.log(temps.length, pressures.length, humidity.length)

        return(
            <tr key={cityData.city.id}>
                <td><GoogleMap /></td>
                <td><Chart data={temps} color="orange" units="K"/></td>
                <td><Chart data={pressures} color="blue" units="hPa"/></td>
                <td><Chart data={humidity} color="green" units="%"/></td>
            </tr>
        )
    }

    render() {
        
        return(
            <table className="table table-hover">

                <thead>
                    <tr>
                        <th className="col-title">City (US)</th>
                        <th className="col-title">Temperature (K)</th>
                        <th className="col-title">Pressure (hPa)</th>
                        <th className="col-title">Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}


function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}
//A more efficient way ES6
// function mapStateToProps({weather}) {
//     return {weather}
// }


export default connect(mapStateToProps, null)(WeatherList)