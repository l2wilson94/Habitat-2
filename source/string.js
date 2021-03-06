//========//
// String //
//========//
{
	
	const install = (global) => {
		
		Reflect.defineProperty(global.String.prototype, "divide", {
			value(n) {
				const regExp = RegExp(`[^]{1,${n}}`, "g")
				return this.match(regExp)
			},
			configurable: true,
			enumerable: false,
			writable: true,
		})
		
		Reflect.defineProperty(global.String.prototype, "toNumber", {
			value(base) {
				return parseInt(this, base)
			},
			configurable: true,
			enumerable: false,
			writable: true,
		})
		
		Habitat.String.installed = true
		
	}
	
	Habitat.String = {install}
	
}