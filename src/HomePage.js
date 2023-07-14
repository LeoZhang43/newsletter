import { useProductsContext } from "./products_context"
import Product from "./Product"

const HomePage = () => {
    const{
        news_loading,
        news_error,
        news,
    } = useProductsContext()
    if(news_loading){
        return(
            <h1>Loading</h1>
        )
    }
    if(news_error){
        return(
            <h1>Error</h1>
        )
    }
    return(
        <div>
            {news.map((product) => {
                return <Product key = {product.id}{...product} />
            })}
        </div>
    )
}

export default HomePage