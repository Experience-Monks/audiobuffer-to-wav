import pkg from './package.json';

const moduleName = 'audioBufferToWav';

export default [
	// browser-friendly UMD build
	{
		input: 'index.js',
		output: {
			name: moduleName,
			file: pkg.browser,
			format: 'umd'
    }	
  },

	// CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// an array for the `output` option, where we can specify 
	// `file` and `format` for each target)
	{
		input: 'index.js',
		output: [
      {
        name: moduleName,
        file: pkg.main, 
        format: 'cjs'
      },
      {
        name: moduleName,
        file: pkg.module, 
        format: 'es' 
      }
		]
	}
];
