//=======//
// Input //
//=======//
{

	const Keyboard = {}
	const Touches = []
	const Mouse = {
		position: [undefined, undefined],
	}
	
	const buttonMap = ["Left", "Middle", "Right", "Back", "Forward"]
	
	const filterEmpties = (a) => {
		let i = 0
		let j = 0
		while (i < a.length) {
			const v = a[i]
			if (v !== undefined) {
				if (i !== j) a[j] = v
				j++
			}
			i++
		}
		a.length = j
		return a
	}
	
	const install = (global) => {
		
		// Mouse
		global.Mouse = Mouse
		global.addEventListener("mousedown", e => {
			const buttonName = buttonMap[e.button]
			Mouse[buttonName] = true
		})
		
		global.addEventListener("mouseup", e => {
			const buttonName = buttonMap[e.button]
			Mouse[buttonName] = false
		})
		
		global.addEventListener("mousemove", e => {
			Mouse.position[0] = event.clientX
			Mouse.position[1] = event.clientY
		})
		
		// Keyboard
		global.Keyboard = Keyboard
		global.addEventListener("keydown", e => {
			Keyboard[e.key] = true
		})
		
		global.addEventListener("keyup", e => {
			Keyboard[e.key] = false
		})
		
		// Touches
		global.Touches = Touches
		global.addEventListener("touchstart", e => {
			for (const changedTouch of e.changedTouches) {
				const x = changedTouch.clientX
				const y = changedTouch.clientY
				const id = changedTouch.identifier
				if (Touches[id] === undefined) Touches[id] = [undefined, undefined]
				const touch = Touches[id]
				touch[0] = x
				touch[1] = y
			}
		})
		
		global.addEventListener("touchmove", e => {
			for (const changedTouch of e.changedTouches) {
				const x = changedTouch.clientX
				const y = changedTouch.clientY
				const id = changedTouch.identifier
				if (Touches[id] === undefined) Touches[id] = {position: [undefined, undefined]}
				const touch = Touches[id]
				touch.position[0] = x
				touch.position[1] = y
			}
		})
		
		global.addEventListener("touchend", e => {
			for (const changedTouch of e.changedTouches) {
				const id = changedTouch.identifier
				Touches[id] = undefined
			}
			filterEmpties(Touches)
		})
		
	}
	
	Habitat.Input = {install, Mouse, Keyboard, Touches}
	
}
