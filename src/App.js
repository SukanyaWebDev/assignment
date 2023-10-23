import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Header from './components/Header'
import Layout from './components/Layout'
// import SeatPicker from "react-seat-picker";
import './App.css'



const imagesList = [
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  }, {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  }, {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    
  }, {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  }, {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  }, {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  }, {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Primium",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Standard",
  },
  {
    id: uuidv4(),
    imageUrl: "https://res.cloudinary.com/dxorhiaeo/image/upload/v1697970564/1683809_tkfl4h.png",
    isBooked: false,
    isClicked: false,
    seatType:"Premium",
  },
  

]
class App extends Component {
  state = {
    intialArray: imagesList,
    quantity: 1,
    selectType:"Standard"
  }

  onStatusChange = (id) => {
    const { intialArray } = this.state
    console.log(id)
    const newArray = intialArray.map(eachItem => {
      if (eachItem.id === id && eachItem.isBooked === false) {
        return { ...eachItem, isClicked: !eachItem.isClicked }
      }
      return { ...eachItem }



    })

    // console.log(newArray)
    // console.log(id)
    this.setState({ intialArray: newArray })

  }

  seatChange = (event)=>{
    this.setState({selectType:event.target.value})

  }

  changeValue = event => {
    const { quantity } = this.state
    this.setState({ quantity: parseInt(event.target.value) })
    // console.log(typeof (event.target.value))
  }

  onProceed = () => {
    const { intialArray } = this.state
    const array = intialArray.map(item => {
      if (item.isClicked === true) {
        return { ...item, isClicked: true, isBooked: true }
      }
      return { ...item }
    })
    this.setState({ intialArray: array })
    // console.log("hi")

  }

  render() {
    const { intialArray, quantity,selectType } = this.state
    console.log(quantity)
    let count = 0
    const x = intialArray.map(eachItem => {
      if (eachItem.isClicked === true) {
        count = count + 1
      }
    }
    )
    console.log(count)

    const displyArray = intialArray.filter(eachItem => (
      eachItem.seatType === selectType
    ))

    const a = quantity === count


    return (
      <div>
        <Header />
        <div>
          <select className='ticket-container' onChange = {this.seatChange} value = {selectType}>
            
            <option value= "Standard">Standard</option>
            <option value = "Primium">Primium</option>
          </select>
          <select id="su" className='quantity-container' onChange={this.changeValue} value={quantity}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          {/* 
<select onChange={this.changeValue} value={quantity}>
          {imagesList.map(each => (
            <option key={each.id} value={each.id}>
              {each.capitalDisplayText}
            </option>
          ))}
        </select> */}


        </div>
        <div className='bottom-container'>
          <div className='layout-container'>
            <ul>
              {displyArray.map(each => (
                <Layout each={each} key={each.id} onStatusChange={this.onStatusChange} />
              ))}

            </ul>
          </div>

          <div className="key-container">
            <h1 className='key-heading'>Key to seat Layout:</h1>

            <div className="con1">
              <div className="box1"></div>
              <p className='description'>Available</p>
            </div>
            
            <div className="con1">
              <div className="box2"></div>
              <p className='description'>Unavailable</p>
            </div>
            <div className="con1">
              <div className="box3"></div>
              <p className='description'>Your Selection</p>
            </div>
          </div>
        </div>

        <div className='btn-container' >
          {a ? (<button type="button" className='proceed-btn ' onClick={this.onProceed}>Proceed</button>) : (null)}

        </div>


      </div >
    )
  }
}

export default App