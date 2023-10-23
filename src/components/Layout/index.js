import './index.css'
const Layout = (props) => {
    const { each, onStatusChange } = props
    const { id, imageUrl, isClicked ,isBooked} = each


    const classStyle = isClicked ? (isBooked?"grey":"green") : (isClicked?"green":"black");
    // const class1 = isBooked?"grey":"black";

    const onClickseat = () => {
        onStatusChange(id)
    }

    return (
        <li>
            <button type="button" className={`${classStyle} image-button`} onClick={onClickseat}></button>

        </li>


    )

}


export default Layout