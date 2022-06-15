import { useContext } from 'react'
import { DataContext } from './src/context/DataContext'
import GalleryItem from './src/GalleryItem'

function Gallery(props) {
    const data = useContext(DataContext)

    const display = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index}/>
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery