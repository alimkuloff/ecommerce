import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch"

const Home = () => {
  const [data, loading] = useFetch('/product/most-popular');
  console.log(data);
  return (
    <div>
      <h1>Popular Products</h1>
      <div className="max-w-[1200px] py-20 mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 ">
        {data?.map((product) => (
          <div className="shadow-product-shadow rounded-md" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img className="w-45 h-45 object-contain bg-gray-300 rounded-t-md" title={product.product_name} src={product.product_images[0]} alt={product.product_name} />
            </Link>
            <div className="p-5">
              <p className="font-medium text-slate-800">{product.product_name}</p>
              <p className="line-clamp-2 text-xs text-gray-500 ">{product.description}</p>
              <div className="mt-3 flex justify-between items-center">
                <p>${product.sale_price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home

