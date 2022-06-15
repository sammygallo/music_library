import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ArtistView() {
    const justAlbums = artistData.filter(entry => entry.collectionType === 'Album')

    const { id } = useParams()
    const [ artistData, setArtistData ] = useState([])

    useEffect(() => {
        const API_URL = 'http://localhost:4000/album/${id}'
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
        }
        fetchData()
    }, [id])
}

export default ArtistView