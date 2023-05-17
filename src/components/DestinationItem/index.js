// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem
  return (
    <li className="card-container">
      <img src={imgUrl} className="destination-image" alt={name} />
      <p className="destination-name"> {name} </p>
    </li>
  )
}

export default DestinationItem
