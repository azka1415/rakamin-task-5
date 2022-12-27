import { useMemo } from "react";
import PurpleCircle from "../assets/PurpleCircle.svg";
import WhiteCircle from "../assets/WhiteCircle.svg";
import BlueCircle from "../assets/BlueCircle.svg";
import { Product } from "../types";
import Loading from "./Loading";

interface Props {
	product: Product;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setNextProduct: React.Dispatch<React.SetStateAction<number>>;
	loading: boolean;
	currentProduct: number;
	error: boolean;
	setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProductDisplay({
	product,
	loading,
	currentProduct,
	setNextProduct,
	setLoading,
	error,
	setError,
}: Props) {
	const stars = [1, 2, 3, 4, 5];

	const newStars = useMemo(
		() => stars.splice(0, Math.floor(product.rating.rate)),
		[product.rating.rate]
	);
	const emptyStars = useMemo(
		() => stars.splice(0, 5 - Math.floor(product.rating.rate)),
		[product.rating.rate]
	);

	const handleClick = () => {
		console.log("clicked");
		setLoading(true);
		setNextProduct((prev) => prev + 1);
		console.log(product);
	};

	return (
		<>
			{loading && <Loading />}
			<div className="container">
				<div className="product-image">
					<img
						src={product.image}
						alt="Product Image"
						className="product-image"
					/>
				</div>
				<div className="product-body">
					<div className="product-header">
						<h1
							className={`${
								product.category === "women's clothing"
									? "text-color-purple"
									: "text-color-blue"
							}`}
						>
							{product.title}
						</h1>
						<div className="product-category">
							<span>{product.category}</span>
							<div className="product-rating">
								<span>{product.rating.rate}/5</span>
								{newStars.map((i) => (
									<img
										key={i}
										src={
											product.category === "women's clothing"
												? PurpleCircle
												: BlueCircle
										}
										alt={`${product.category} circle`}
									/>
								))}
								{emptyStars.map((i) => (
									<img
										key={i}
										src={WhiteCircle}
										alt="White Circle"
									/>
								))}
							</div>
						</div>
					</div>
					<div className="product-main">
						<p>{product.description}</p>
					</div>
					<div className="product-footer">
						<h2
							className={`${
								product.category === "women's clothing"
									? "text-color-purple"
									: "text-color-blue"
							}`}
						>
							${product.price}
						</h2>
						<div className="product-buttons">
							<div
								className={`buy-btn ${
									product.category === "women's clothing"
										? "buy-btn-purple"
										: "buy-btn-blue"
								}`}
							>
								Buy now
							</div>
							<div
								className={`next-btn ${
									product.category === "women's clothing"
										? "next-btn-purple"
										: "next-btn-blue"
								}`}
								onClick={handleClick}
							>
								Next product
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
