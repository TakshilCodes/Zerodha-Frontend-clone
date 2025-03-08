import Pricelanding from './pricelanding'
import Pricingsection from './pricingtable'
import ChargesSection from './chargesSection'
import ChargesSection2 from './chargesSection2'

const Price = () => {
  return (
    <div className='mt-50'>
        <Pricelanding/>
        <Pricingsection/>
        <ChargesSection/>
        <ChargesSection2/>
    </div>
  )
}

export default Price