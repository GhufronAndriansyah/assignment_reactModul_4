import React from 'react';
import { extend } from 'jquery';
import Media from '../Components/Media';
class Karya extends React.Component{
    render(){
        return(
            <div className="container">  
            <div className="container m-5">    
                        <h3>Karya Saya</h3><br></br>
                <Media image="CV.png">  
                    </Media>  
                    <h2>CV Saya</h2>
                    <Media image="HeadPuzzle.png">  
                    </Media>  
                    <h2>Desain Lomba Saya</h2>
                    <Media image="Robot.png">  
                    </Media>  
                    <h2>Desain Copas Saya</h2>
                    </div>
        </div> 
        )
    }
}
export default Karya;