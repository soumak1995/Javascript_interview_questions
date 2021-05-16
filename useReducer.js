//useState using useReducer
function useState(initialValue) {
    let [state, dispatch] = useReducer((state, action) => {
      return action
    }, initialValue)
    
    return [state, dispatch]
  }
  //mport React, {Component} from "react"
import {withToggler} from "./HOCs/withToggler"
class Favorite extends Component {
    state = {
        isFavorited: false
    }
    
    toggleFavorite = () => {
        this.setState(prevState => {
            return {
                isFavorited: !prevState.isFavorited
            }
        })
    }
    
    render() {
        return (
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span 
                        onClick={this.toggleFavorite}
                    >
                        {this.state.isFavorited ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
        ) 
    }
}

export default Favorite