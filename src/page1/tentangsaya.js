import React from 'react';
import { extend } from 'jquery';
import Media from '../Components/Media'; 
class Tentangsaya extends React.Component{
    render(){
        return(
        <div className="container">   
            <div className=" container m-5">  
            <h3>Tentang Saya</h3><br></br>
                <Media image="saya.jpg">  
                    </Media>  
                    <h2>Ghufron Andriansyah</h2>
                    <p>Nama saya adalah Ghufron Andriansyah. Saya berusia 17 tahun. Saya berasal dari Kota Tuba dan juga 
                        lahir di Kota tersebut tepatny pada tanggal 29 November 2002. Saya memiliki 2 saudara laki laki yang selisih
                        umurnya cukup jauh dengan saya. Saya suka basket dari tahun 2015 hingga saati ini. Tidak ada yang saya favoritkan
                        dan juga tidak ada yang saya benci.
                    </p>
            </div>
        </div>   
        )
    }
}
export default Tentangsaya;