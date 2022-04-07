import Navbar from './Navbar'
import Carousel from './Carousel'
import("./Frontpage.css")
const FrontPage = () => {
    return (
        <div className= "FrontPage">
            <Navbar />
            <div className = "center">
                <input type="text" className="bar"/>
                <ul style={{display:"flex",
            justifyContent:"space-evenly"}}>
                <li>Languages: </li>
                <li> हिंदी</li>
                <li> বাংলা </li>
                <li>اردو </li>
                <li>ਪੰਜਾਬੀ </li>
                <li> मराठी </li>
                <li> తెలుగు </li>
                <li> ગુજરાતી</li>
            </ul>
            </div>
            <Carousel />
        </div>
    )
}

export default FrontPage