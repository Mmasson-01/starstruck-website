const DISPLACEMENT_COUNT = 200
const THRESHOLD = 200
class Particle {
	x: number
	y: number
	originX: number
	originY: number
	r: number
	color: string
	multiplier: number
	renderCount: number = 0
	directionX: number
	directionY: number
	constructor(
		x: number,
		y: number,
		r: number,
		color: string,
		multiplier: number
	) {
		this.x = x
		this.y = y
		this.originX = x
		this.originY = y
		this.r = Math.floor(Math.random() * r)
		this.color = color
		this.multiplier = multiplier
		this.directionX = Math.random() < 0.5 ? -1 : 1
		this.directionY = Math.random() < 0.5 ? -1 : 1
	}

	draw(ctx: CanvasRenderingContext2D) {
		ctx.beginPath()
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
		ctx.shadowColor = "white"
		ctx.shadowBlur = 5
		ctx.closePath()
		ctx.fillStyle = this.color
		ctx.fill()
	}
	update() {
		const isYThreshold = Math.abs(this.y - this.originY) === THRESHOLD
		const isXThreshold = Math.abs(this.x - this.originX) === THRESHOLD
		if (this.renderCount === DISPLACEMENT_COUNT) {
			if (isXThreshold) {
				this.directionX = -this.directionX
			} else {
				this.directionX = Math.random() < 0.5 ? -1 : 1
			}
			if (isYThreshold) {
				this.directionY = -this.directionY
			} else {
				this.directionY = Math.random() < 0.5 ? -1 : 1
			}
			this.renderCount = 0
		}

		this.renderCount++
		this.x += this.directionX * this.multiplier
		this.y += this.directionY * this.multiplier
	}
}

export default Particle
