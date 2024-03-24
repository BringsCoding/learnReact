import { useEffect, useState } from "react";
import "./style.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=20&${count === 0 ? 0 : count * 20}`);
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading data ! Please Wait</div>;
  }
  return (
    <div className="loade-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => (
              <div className="product" key={index}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}> Loade More Products</button>
      </div>
    </div>
  );
}