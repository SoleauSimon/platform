import { useEffect, useRef, useState } from "react";

/**
 * Return value of the useCountdownTimer hook
 */
interface UseCountdownTimerReturn {
	/** Current countdown value in seconds */
	countdown: number;
	/** Timer activation state */
	isActive: boolean;
	/** Function to start the timer */
	start: () => void;
}

/**
 * Custom hook to manage a countdown timer
 *
 * @param timer - Initial timer duration in seconds (default: 0)
 * @param onEnd - Callback called when timer ends (default: empty function)
 * @returns Object containing timer state and control functions
 *
 * @example
 * ```tsx
 * const { countdown, isActive, start } = useCountdownTimer(30, () => {
 *   console.log('Timer finished!');
 * });
 * ```
 */
const useCountdownTimer = (
	timer: number = 0,
	onEnd: () => void = () => {},
): UseCountdownTimerReturn => {
	const [countdown, setCountdown] = useState<number>(timer);
	const [isActive, setIsActive] = useState<boolean>(false);
	const hasCalledOnEnd = useRef<boolean>(false);

	useEffect(() => {
		if (!isActive || countdown <= 0) return; // early exit

		const interval = setInterval(() => {
			setCountdown((prev) => {
				if (prev <= 1) {
					clearInterval(interval);
					setIsActive(false);
					if (!hasCalledOnEnd.current) {
						hasCalledOnEnd.current = true;
						console.log("Timer ended, calling onEnd");
						onEnd();
					}
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(interval);
	}, [isActive, onEnd]);

	// Reset hasCalledOnEnd when timer is restarted
	useEffect(() => {
		if (isActive) {
			hasCalledOnEnd.current = false;
		}
	}, [isActive]);

	return { countdown, isActive, start: () => setIsActive(true) };
};

export default useCountdownTimer;
