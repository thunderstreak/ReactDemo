export default {
	path: 'register',
	getComponent(nextState, cb) {
		require.ensure([], (require) => {
			cb(null, require('./Register'))
		})
	}
}