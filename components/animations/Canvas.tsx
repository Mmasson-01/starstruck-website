import React from "react"
import useCanvas from "../../hooks/useCanvas"

type Props = {
	draw: Function
	options: any
}

const Canvas = (props: Props) => {
	const { draw, options, ...rest } = props
	const { context, ...moreConfig } = options
	const canvasRef = useCanvas(draw, { context })

	return <canvas ref={canvasRef} {...rest} />
}

export default Canvas
