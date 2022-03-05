import { useEffect, useRef } from "react"

const useCanvas = (draw: Function, options: any = {}) => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	// rewrite the resize canvas function to take into account the device pixel ratio.
	const resizeCanvas = (canvas: HTMLCanvasElement) => {
		const { width, height } = canvas.getBoundingClientRect()
		if (canvas.width !== width || canvas.height !== height) {
			const { devicePixelRatio: ratio = 1 } = window
			const context = canvas.getContext("2d")
			canvas.width = width * ratio
			canvas.height = height * ratio
			context?.scale(ratio, ratio)

			return true
		}
		return false
	}

	useEffect(() => {
		const canvas = canvasRef.current
		const context = canvas.getContext(options.context || "2d")

		let frameCount = 0
		let animationFrameId: number

		const render = () => {
			frameCount++
			draw(context, frameCount)
			animationFrameId = window.requestAnimationFrame(render)
		}

		render()

		return () => {
			window.cancelAnimationFrame(animationFrameId)
		}
	}, [draw])

	return canvasRef
}

export default useCanvas
