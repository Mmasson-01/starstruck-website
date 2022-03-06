import React from "react"
import useCanvas from "../../hooks/useCanvas"

type Props = {
	draw: Function
	options: any
	className?: string
}

function resizeCanvasToDisplaySize(canvas: HTMLCanvasElement) {
	const { width, height } = canvas.getBoundingClientRect()

	if (canvas.width !== width || canvas.height !== height) {
		canvas.width = width
		canvas.height = height
		return true // here you can return some usefull information like delta width and delta height instead of just true
		// this information can be used in the next redraw...
	}

	return false
}

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

const _preDraw = (
	context: CanvasRenderingContext2D,
	canvas: HTMLCanvasElement
) => {
	context.save()
	resizeCanvas(canvas)
	const { width, height } = context.canvas
	context.clearRect(0, 0, width, height)
}

const _postDraw = (context: CanvasRenderingContext2D) => {
	context.restore()
}

const Canvas = (props: Props) => {
	const { draw, options, ...rest } = props
	const { context, postDraw = _postDraw, preDraw = _preDraw } = options
	const canvasRef = useCanvas(draw, { context, postDraw, preDraw })
	return <canvas className={`${props.className}`} ref={canvasRef} {...rest} />

}

export default Canvas
