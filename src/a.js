/**
 * Created by nidhitandon on 14/07/17.
 */

class App extends Component {
    static randomNumber = () => 1 + Math.floor(Math.random() * 9)

    constructor() {
        super()
        this.state = {
            randomNumOfStars: this.randomNumber(),
        }
    }

    render() {
        const {selectedNumbers, randomNumOfStars, answerIsCorrect, usedNumbers, doneStatus} = this.state
        return (
            <div>
                <Star numOfStars={randomNumOfStars}/>
            </div>
        )
    }
}

const Star=(props)=>{
    return(
        <div>
            {
                [...Array(props.numOfStars).keys()].map(x => <span className="glyphicon glyphicon-asterisk star"
                                                                   aria-hidden="true"></span>)
            }
        </div>

    )
}
