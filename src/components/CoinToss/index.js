// Write your code here
import {Component} from 'react'
import './index.css'

const HEADS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: HEADS_IMG_URL, headsCount: 0, tailsCount: 0}

  onTossClick = () => {
    const {headsCount, tailsCount} = this.state
    const randomNum = Math.floor(Math.random() * 2)
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount
    let tossImage = ''

    if (randomNum === 0) {
      latestHeadsCount += 1
      tossImage = HEADS_IMG_URL
    } else {
      latestTailsCount += 1
      tossImage = TAILS_IMG_URL
    }

    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const total = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={tossResultImage} alt="toss result" className="tossImage" />
          <button type="button" className="button" onClick={this.onTossClick}>
            Toss Coin
          </button>
          <div className="total">
            <p>Total: {total}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
