import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import "./App.css";
import ProductCard from "./components/ProductCard";
import { fetchProduct } from "./redux/productCard/productCardActions";

function App() {
  const dispatch = useDispatch();
  const { product, status, error } = useSelector((state) => state.product);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProduct());
    }
  }, [dispatch, status]);

  if (status === "loading") {
    return (
      <div>
        {" "}
        <BeatLoader
          color="#36d7b7"
        />
      </div>
    );
  }

  if (status === "failed") {
    return <div className="error" style={{color:"white",width:"fit-content", marginInline:"auto", height:"100vh"}}>Error: {error}</div>;
  }

  return (
    <div>
      <section className="section featured-tours" id="featured">
        {/* title  */}
        <div className="title-wrapper">
          <h2 className="title">
            Health <span className="subtitle">360</span>
          </h2>
        </div>
        <div className="cards">
          {product &&
            product.map((data) => {
              return <ProductCard product={data} key={data.id} />;
            })}
        </div>
      </section>
    </div>
  );
}

export default App;
