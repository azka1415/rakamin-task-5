interface Props {
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setNextProduct: React.Dispatch<React.SetStateAction<number>>;
	setError: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Error({ setError, setLoading, setNextProduct }: Props) {
	const handleClick = () => {
		setError(false);
		setLoading(true);
		setNextProduct(1);
	};
	return (
		<>
			<div className="error-container">
				<div className="error"></div>
				<p>This product is unavailable to show</p>
				<div
					className="next-btn error-btn"
					onClick={handleClick}
				>
					Next Product
				</div>
			</div>
		</>
	);
}
