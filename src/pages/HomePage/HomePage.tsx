import Leader from 'src/components/Leaders'
import ProductList from 'src/components/User/ProductList'
import Thumbnail from 'src/components/User/Thumbnail'


export default function HomePage() {
  return (
    <div className='mt-[200px]'>
      <Thumbnail />
      <ProductList topic='Top new Hardware' productType='hardware' />
      <ProductList topic='Top new Software' productType='software' />
      <Leader />
    </div>
  )
}
