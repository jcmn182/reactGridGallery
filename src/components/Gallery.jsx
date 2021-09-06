import {React,useEffect,useState} from 'react';
import './gallery.css';



function Gallery() {

    const [data, setData] = useState([]);
    const [model,setModel] = useState(false);
    const [zClass,setZclass] = useState('');
    useEffect(()=>{

        const fetchResponse =  async () => {

        const imgPerPage = 30;
        const q = '';
        const key = '23251442-4ff4426e8c1a10226f32a2186';
        const url = `https://pixabay.com/api/?key=${key}&q=${q}&per_page=${imgPerPage}`

        try{
        const request = await fetch(url);
        const result = await request.json(); 

        setData(result.hits);
        console.log(result.hits)
    }
    
    catch{
        console.log(Error);
    }

    }

    fetchResponse();

    },[])

    const imgZoom = (img) => {
        setZclass(img)
        setModel(true)
    }

  return (
    <>
        <div className={model? "model open" : "model"}>
            <p onClick={()=>setModel(false)}>x</p>
            <img src={zClass} alt=""/>
        </div>
        <h1>React Grid Gallery</h1>
        <div className="gallery">
            {data.map((item,index) => {
                    return (
                        <div className="pics" key={index} onClick={()=>imgZoom(item.largeImageURL)}>
                            <img src={item.largeImageURL} alt="" className="photos_styles"/>
                        </div>
                    )
                })
            }

        </div>
    </>
  );
}

export default Gallery;