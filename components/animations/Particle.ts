class Particle {
	x: number
	y: number
	directionX: number
	directionY: number
	size: number
	color: string
	ctx: any
	constructor(
		x: number,
		y: number,
		directionX: number,
		directionY: number,
		size: number,
		color: string,
		ctx: any
	) {
		this.x = x
		this.y = y
		this.directionX = directionX
		this.directionY = directionY
		this.size = size
		this.color = color
		this.ctx = ctx
	}

	draw() {}
	update() {}
}

export default Particle
