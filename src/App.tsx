import { useEffect, useState } from "react";
import "./App.css";
import ProductDisplay from "./components/ProductDisplay";
import { Product } from "./types";
import Error from "./components/Error";
import Loading from "./components/Loading";

function App() {
	const [product, setProduct] = useState<Product>();
	const [loading, setLoading] = useState(false);
	const [currentProduct, setNextProduct] = useState<number>(1);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/${currentProduct}`)
			.then((res) => res.json())
			.catch(() => {
				setLoading(false);
				return setError(true);
			})
			.then((json) => {
				setLoading(false);
				return setProduct(json);
			});
	}, [currentProduct]);
	return (
		<>
			{product && product.category === "women's clothing" ? (
				<div className="bg-pattern-pink"></div>
			) : error ? (
				<div className="bg-pattern-error"></div>
			) : (
				<div className="bg-pattern-blue"></div>
			)}

			{loading && (
				<div className="home-loader">
					<Loading />
				</div>
			)}
			<div className="App">
				{product && (
					<ProductDisplay
						loading={loading}
						setNextProduct={setNextProduct}
						setLoading={setLoading}
						product={product}
						currentProduct={currentProduct}
						error={error}
						setError={setError}
					/>
				)}
				{error && (
					<Error
						setError={setError}
						setLoading={setLoading}
						setNextProduct={setNextProduct}
					/>
				)}
			</div>
		</>
	);
}

export default App;
