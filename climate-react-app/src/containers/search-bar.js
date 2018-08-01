import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'

class SearchBar extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }
    
    onInputChange(event){
        console.log(event.target.value)
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit(event){
        event.preventDefault()
        // We need to go and fetch weather data
        this.props.fetchWeather(this.state.term)
        this.setState({term:''})
    }
    
    render(){
        return (
            <div className="block">
                <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
                    <input 
                        id="searchBar" 
                        className="form-control" 
                        type="text" 
                        placeholder="Search for a city"
                        value={this.state.term}
                        onChange={this.onInputChange.bind(this)}/>
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-primary mb-2">
                            Submit
                        </button>
                    </span>  
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)