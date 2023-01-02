import { Link } from 'react-router-dom'
import './css/home.css'
import ParticlesBackground from "./ParticlesBackgroundHome"

function Home() {
  
    return (
      <div className="App">
        <ParticlesBackground />
        <div className="Welcome">Welcome</div>

        <div className="linked">
          <table>
            <td>
            <Link to="/compress">Compress</Link></td>
            <td><Link to="/decompress" >Deompress</Link> </td>
          </table>
        </div>
        
        <div className="created">Created by ~ Rutvik Ranpariya  </div> 

      </div>
    )
  }
  
  export default Home
    