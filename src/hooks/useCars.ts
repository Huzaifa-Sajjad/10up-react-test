import {useState} from 'react'
import {ICarLiting} from '../types/Listing'

const useCars = (carListingsData:ICarLiting[]) => {
  const [carListings, setCarListings] = useState(carListingsData);
  const [loading, setLoading] = useState(false);

  const filterCarListingsByBodyType = (bodyType:string) => {
    setLoading(true);
    const filteredCarListings = carListingsData.filter((carListing) => carListing.bodyType === bodyType)
    setCarListings(filteredCarListings);
    setLoading(false);
  }

  return {carListings, loading, filterCarListingsByBodyType}
}

export default useCars
