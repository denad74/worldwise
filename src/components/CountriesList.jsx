
/* eslint-disable react/prop-types */
import { useCities } from '../context/CitiesContext'
import styles from './CountriesList.module.css'
import CountryItem from './CountryItem'
import Message from './Message'
import Spinner from './Spinner'

const CountriesList = () => {

  const {cities, isLoading} = useCities()
   const countries = cities.reduce((arr, city) => {
   if(!arr.map(el=>el.country).includes(city.country))
   return [...arr, {country: city.country, emoji: city.emoji}];
    else return arr
   },[])
    if(isLoading) return <Spinner/>

    if(!cities.length) return <Message message="Add your first city by clicking on a city on the map"/>

  return (
    <ul className={styles.CityList}>
        {countries.map((country)=>  <CountryItem key={country.country} country={country}/> )}
    </ul>
  )
}

export default CountriesList