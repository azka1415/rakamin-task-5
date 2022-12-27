import { useState } from "react";

type UseNumber = {
	addNum: () => void;
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function useNumber(): UseNumber {
	const [count, setCount] = useState(0);

	const addNum = () => {
		setCount(count + 1);
	};

	return { addNum, count, setCount };
}
