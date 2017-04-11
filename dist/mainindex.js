/*! this is build by cpt */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/user/Desktop/myself/webpack-study/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var deletedIds = [];

var document = window.document;

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.12.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type( obj ) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {

			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
		} catch ( e ) {

			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( !support.ownFirst ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {

			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {

				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[ j ] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// init accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt( 0 ) === "<" &&
				selector.charAt( selector.length - 1 ) === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {

						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[ 2 ] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof root.ready !== "undefined" ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter( function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[ 0 ], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.uniqueSort( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = true;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {

	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener ||
		window.event.type === "load" ||
		document.readyState === "complete" ) {

		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE6-10
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );

		// If IE event model is used
		} else {

			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch ( e ) {}

			if ( top && top.doScroll ) {
				( function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {

							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll( "left" );
						} catch ( e ) {
							return window.setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				} )();
			}
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownFirst = i === "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery( function() {

	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {

		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== "undefined" ) {

		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {

			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
} );


( function() {
	var div = document.createElement( "div" );

	// Support: IE<9
	support.deleteExpando = true;
	try {
		delete div.test;
	} catch ( e ) {
		support.deleteExpando = false;
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();
var acceptData = function( elem ) {
	var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
};




var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
		data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {

		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {

		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split( " " );
					}
				}
			} else {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[ i ] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, undefined
	} else {
		cache[ id ] = undefined;
	}
}

jQuery.extend( {
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,

		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				jQuery.data( this, key );
			} );
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each( function() {
				jQuery.data( this, key, value );
			} ) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each( function() {
			jQuery.removeData( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object,
	// or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );


( function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {

			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== "undefined" ) {

			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

} )();
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn(
					elems[ i ],
					key,
					raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[ 0 ], key ) : emptyGet;
};
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );

var rleadingWhitespace = ( /^\s+/ );

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
		"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
		"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}


( function() {
	var div = document.createElement( "div" ),
		fragment = document.createDocumentFragment(),
		input = document.createElement( "input" );

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );

	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input = document.createElement( "input" );
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
	support.noCloneEvent = !!div.addEventListener;

	// Support: IE<9
	// Since attributes and properties are the same in IE,
	// cleanData must set properties to undefined rather than use removeAttribute
	div[ jQuery.expando ] = 1;
	support.attributes = !div.getAttribute( jQuery.expando );
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {
	option: [ 1, "<select multiple='multiple'>", "</select>" ],
	legend: [ 1, "<fieldset>", "</fieldset>" ],
	area: [ 1, "<map>", "</map>" ],

	// Support: IE8
	param: [ 1, "<object>", "</object>" ],
	thead: [ 1, "<table>", "</table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
	// unless wrapped in a div with non-breaking characters in front of it.
	_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
};

// Support: IE8-IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
				undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context;
			( elem = elems[ i ] ) != null;
			i++
		) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; ( elem = elems[ i ] ) != null; i++ ) {
		jQuery._data(
			elem,
			"globalEval",
			!refElements || jQuery._data( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/,
	rtbody = /<tbody/i;

function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

function buildFragment( elems, context, scripts, selection, ignored ) {
	var j, elem, contains,
		tmp, tag, tbody, wrap,
		l = elems.length,

		// Ensure a safe fragment
		safe = createSafeFragment( context ),

		nodes = [],
		i = 0;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || safe.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;

				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Manually add leading whitespace removed by IE
				if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
					nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
				}

				// Remove IE's autoinserted <tbody> from table fragments
				if ( !support.tbody ) {

					// String was a <table>, *may* have spurious <tbody>
					elem = tag === "table" && !rtbody.test( elem ) ?
						tmp.firstChild :

						// String was a bare <thead> or <tfoot>
						wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
							tmp :
							0;

					j = elem && elem.childNodes.length;
					while ( j-- ) {
						if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
							!tbody.childNodes.length ) {

							elem.removeChild( tbody );
						}
					}
				}

				jQuery.merge( nodes, tmp.childNodes );

				// Fix #12392 for WebKit and IE > 9
				tmp.textContent = "";

				// Fix #12392 for oldIE
				while ( tmp.firstChild ) {
					tmp.removeChild( tmp.firstChild );
				}

				// Remember the top-level container for proper cleanup
				tmp = safe.lastChild;
			}
		}
	}

	// Fix #11356: Clear elements from fragment
	if ( tmp ) {
		safe.removeChild( tmp );
	}

	// Reset defaultChecked for any radios and checkboxes
	// about to be appended to the DOM in IE 6/7 (#8060)
	if ( !support.appendChecked ) {
		jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
	}

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}

			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( safe.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	tmp = null;

	return safe;
}


( function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
	for ( i in { submit: true, change: true, focusin: true } ) {
		eventName = "on" + i;

		if ( !( support[ i ] = eventName in window ) ) {

			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" &&
					( !e || jQuery.event.triggered !== e.type ) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};

			// Add elem as a property of the handle fn to prevent a memory leak
			// with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
				jQuery._data( cur, "handle" );

			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if (
				( !special._default ||
				 special._default.apply( eventPath.pop(), data ) === false
				) && acceptData( elem )
			) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {

						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Safari 6-8+
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
			"pageX pageY screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ?
					original.toElement :
					fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {

						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	// Piggyback on a donor event to simulate a different one
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true

				// Previously, `originalEvent: {}` was set here, so stopPropagation call
				// would not be triggered on donor event, since in our own
				// jQuery.event.stopPropagation function we had a check for existence of
				// originalEvent.stopPropagation method, so, consequently it would be a noop.
				//
				// Guard for simulated events was moved to jQuery.event.stopPropagation function
				// since `originalEvent` should point to the original event for the
				// constancy with other events and for more focused logic
			}
		);

		jQuery.event.trigger( e, null, elem );

		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event,
			// to properly expose it to GC
			if ( typeof elem[ name ] === "undefined" ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( !e || this.isSimulated ) {
			return;
		}

		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

// IE submit delegation
if ( !support.submit ) {

	jQuery.event.special.submit = {
		setup: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

						// Support: IE <=8
						// We use jQuery.prop instead of elem.form
						// to allow fixing the IE8 delegated submit issue (gh-2332)
						// by 3rd party polyfills/workarounds.
						jQuery.prop( elem, "form" ) :
						undefined;

				if ( form && !jQuery._data( form, "submit" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submitBubble = true;
					} );
					jQuery._data( form, "submit", true );
				}
			} );

			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {

			// If form was submitted by the user, bubble the event up the tree
			if ( event._submitBubble ) {
				delete event._submitBubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event );
				}
			}
		},

		teardown: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.change ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {

				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._justChanged = true;
						}
					} );
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._justChanged && !event.isTrigger ) {
							this._justChanged = false;
						}

						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event );
					} );
				}
				return false;
			}

			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event );
						}
					} );
					jQuery._data( elem, "change", true );
				}
			} );
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger ||
				( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	} );
}

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	},

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}
	return elem;
}

function cloneCopyEvent( src, dest ) {
	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var first, node, hasScripts,
		scripts, doc, fragment,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!jQuery._data( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval(
								( node.text || node.textContent || node.innerHTML || "" )
									.replace( rcleanScript, "" )
							);
						}
					}
				}
			}

			// Fix #11809: Avoid leaking memory
			fragment = first = null;
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		elems = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = elems[ i ] ) != null; i++ ) {

		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
			!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
				( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[ i ] ) {
					fixCloneNodeIssues( node, destElements[ i ] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
					cloneCopyEvent( node, destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems, /* internal */ forceAcceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			attributes = support.attributes,
			special = jQuery.event.special;

		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			if ( forceAcceptData || acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// Support: IE<9
						// IE does not allow us to delete expando properties from nodes
						// IE creates expando attributes along with the property
						// IE does not have a removeAttribute function on Document nodes
						if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
							elem.removeAttribute( internalKey );

						// Webkit & Blink performance suffers when deleting properties
						// from DOM nodes, so set to undefined instead
						// https://code.google.com/p/chromium/issues/detail?id=378607
						} else {
							elem[ internalKey ] = undefined;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append(
					( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
				);
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {

			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {

						// Remove element nodes and prevent memory leaks
						elem = this[ i ] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	div.style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = div.style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!div.style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container = document.createElement( "div" );
	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	div.innerHTML = "";
	container.appendChild( div );

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
		div.style.WebkitBoxSizing === "";

	jQuery.extend( support, {
		reliableHiddenOffsets: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {

			// We're checking for pixelPositionVal here instead of boxSizingReliableVal
			// since that compresses better and they're computed together anyway.
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		reliableMarginRight: function() {

			// Support: Android 2.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		},

		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		}
	} );

	function computeStyleTests() {
		var contents, divStyle,
			documentElement = document.documentElement;

		// Setup
		documentElement.appendChild( container );

		div.style.cssText =

			// Support: Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
		pixelMarginRightVal = reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			divStyle = window.getComputedStyle( div );
			pixelPositionVal = ( divStyle || {} ).top !== "1%";
			reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
			boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";

			// Support: Android 2.3 only
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

			div.removeChild( contents );
		}

		// Support: IE6-8
		// First check that getClientRects works as expected
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.style.display = "none";
		reliableHiddenOffsetsVal = div.getClientRects().length === 0;
		if ( reliableHiddenOffsetsVal ) {
			div.style.display = "";
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			div.childNodes[ 0 ].style.borderCollapse = "separate";
			contents = div.getElementsByTagName( "td" );
			contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			if ( reliableHiddenOffsetsVal ) {
				contents[ 0 ].style.display = "";
				contents[ 1 ].style.display = "none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			}
		}

		// Teardown
		documentElement.removeChild( container );
	}

} )();


var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value"
			// instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values,
			// but width seems to be reliably pixels
			// this is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are
		// proportional to the parent element instead
		// and we can't measure the parent instead because it
		// might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/i,

	// swappable if display is none or starts with table except
	// "table", "table-cell", or "table-caption"
	// see here for display values:
	// https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] =
					jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {

		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight
			// (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch ( e ) {}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
} );

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {

			// IE uses filters for opacity
			return ropacity.test( ( computed && elem.currentStyle ?
				elem.currentStyle.filter :
				elem.style.filter ) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist -
			// attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule
				// or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return (
				parseFloat( curCSS( elem, "marginLeft" ) ) ||

				// Support: IE<=11+
				// Running getBoundingClientRect on a disconnected node in IE throws an error
				// Support: IE8 only
				// getClientRects() errors on disconnected elems
				( jQuery.contains( elem.ownerDocument, elem ) ?
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} ) :
					0
				)
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var a,
		input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Support: Windows Web Apps (WWA)
	// `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "checkbox" );
	div.appendChild( input );

	a = div.getElementsByTagName( "a" )[ 0 ];

	// First batch of tests.
	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class.
	// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute( "style" ) );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute( "href" ) === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement( "form" ).enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
} )();


var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if (
					hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// handle most common string cases
					ret.replace( rreturn, "" ) :

					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled :
								option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {

					// Setting the type on a radio button after the value resets the value in IE8-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;

					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		} else {

			// Support: IE<9
			// Use defaultChecked and defaultSelected for oldIE
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} else {
		attrHandle[ name ] = function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
	}
} );

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {

				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {

				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {

			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					( ret = elem.ownerDocument.createAttribute( name ) )
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each( [ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	} );
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {

			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case sensitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each( function() {

			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch ( e ) {}
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each( [ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	} );
}

// Support: Safari, IE9+
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return jQuery.attr( elem, "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// store className if set
					jQuery._data( this, "__className__", className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				jQuery.attr( this, "class",
					className || value === false ?
					"" :
					jQuery._data( this, "__className__" ) || ""
				);
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




// Return jQuery for attributes-only inclusion


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );


var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {

	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {

		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	} ) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new window.DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch ( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,

	// IE leaves an \r character at EOL
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var

			// Cross-domain detection vars
			parts,

			// Loop variable
			i,

			// URL without anti-cache param
			cacheURL,

			// Response headers as string
			responseHeadersString,

			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,

			// Response headers
			responseHeaders,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" )
			.replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


function getDisplay( elem ) {
	return elem.style && elem.style.display || jQuery.css( elem, "display" );
}

function filterHidden( elem ) {

	// Disconnected elements are considered hidden
	if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
		return true;
	}
	while ( elem && elem.nodeType === 1 ) {
		if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
			return true;
		}
		elem = elem.parentNode;
	}
	return false;
}

jQuery.expr.filters.hidden = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return support.reliableHiddenOffsets() ?
		( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
			!elem.getClientRects().length ) :
			filterHidden( elem );
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

	// Support: IE6-IE8
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		if ( this.isLocal ) {
			return createActiveXHR();
		}

		// Support: IE 9-11
		// IE seems to error on cross-domain PATCH requests when ActiveX XHR
		// is used. In IE 9+ always use the native XHR.
		// Note: this condition won't catch Edge as it doesn't define
		// document.documentMode but it also doesn't support ActiveX so it won't
		// reach this code.
		if ( document.documentMode > 8 ) {
			return createStandardXHR();
		}

		// Support: IE<9
		// oldIE XHR does not support non-RFC2616 methods (#13240)
		// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
		// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
		// Although this check for six methods instead of eight
		// since IE also does not support "trace" and "connect"
		return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
			createStandardXHR() || createActiveXHR();
	} :

	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	} );
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport( function( options ) {

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {

						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch ( e ) {

									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;

								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					// Do send the request
					// `xhr.send` may raise an exception, but it will be
					// handled in jQuery.ajax (so no try/catch here)
					if ( !options.async ) {

						// If we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {

						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						window.setTimeout( callback );
					} else {

						// Register the callback, but delay it in case `xhr.send` throws
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	} );
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch ( e ) {}
}




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};





/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left
		// is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== "undefined" ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? ( prop in win ) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
	function( defaultExtra, funcName ) {

		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only,
					// but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function bgEvent() {
  this.positionY = 0;
  this.ele = $('.wrap');
  this.timer = 50;
  this.init();
}
bgEvent.prototype = {
  init: function init() {

    this.positionY += 5;
    //console.log(this.positionY)
    this.ele.css('background-Position', '0px ' + this.positionY + 'px');
  },
  setInter: function setInter() {
    var that = this;
    this.destory();
    that.time = setInterval(function () {
      that.init();
    }, that.timer);
  },
  destory: function destory() {
    clearInterval(this.time);
  }
};
var bg = new bgEvent();
module.exports = bg;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function built() {
  this.timer = null;
  this.speed = null;
  this.obj = null;
  this.scale = 0;
}
var plain1_die1 = __webpack_require__(7);
var plain1_die2 = __webpack_require__(8);
var plain1_die3 = __webpack_require__(9);
var plain2_die1 = __webpack_require__(10);
var plain2_die2 = __webpack_require__(11);
var plain2_die3 = __webpack_require__(12);
var plain2_die4 = __webpack_require__(13);
var plain3_die1 = __webpack_require__(14);
var plain3_die2 = __webpack_require__(15);
var plain3_die3 = __webpack_require__(16);
var plain3_die4 = __webpack_require__(17);
var plain3_die5 = __webpack_require__(18);
var plain3_die6 = __webpack_require__(19);

built.prototype = {

  width: 6,
  height: 16,
  init: function init(obj, speed, enemyPlanes) {
    this.obj = obj;
    this.enemyPlanes = enemyPlanes || {};
    this.speed = speed || 300;
    this.destoryAll();
    this.settime();
  },
  settime: function settime() {
    var that = this;
    that.timer = setInterval(function () {
      that.appendDom();
      //that.impact();
      //that.destory();
    }, that.speed);
    that.impactTime = setInterval(function () {
      that.impact();
    }, 10);
  },
  appendDom: function appendDom() {
    var that = this;
    var left = that.obj.left + that.obj.width / 2 - that.width / 2,
        bottom = that.obj.bottom + that.obj.height,
        bottom2 = $('body').height() + that.height;
    id = that.randomNum();
    that.obj.built[id] = '<div class="built" data-id="' + id + '"></div>';
    $(that.obj.built[id]).appendTo($('body')).css({ "left": left, "bottom": bottom }).animate({ "bottom": $('body').height() + that.height }, 2000, 'linear', function (e) {
      [].forEach.call($('.built'), function (item) {
        if (parseInt($(item).css('bottom')) >= bottom2) {
          $(item).remove(); //如果超出页面则去除
          delete that.obj.built[$(item).data('id')]; //并删除随机id;
        }
      });
    });
  },
  destory: function destory(id) {
    //当子弹到头机会销毁
    var that = this;
    $(that.obj.built[id]).stop().remove(); //匹配相对应的id;使其停止动画；并销毁；
    delete that.obj.built[id];
  },
  destoryAll: function destoryAll() {
    clearInterval(this.timer);
    $('.built').remove();
  },
  randomNum: function randomNum() {
    var that = this;
    var n = Math.random().toString(36).substr(2);
    if (!!that.obj.built[n]) {
      that.randomNum();
    } else {
      return n;
    }
  },
  impact: function impact() {
    //目前只写竖向的
    var that = this;
    [].forEach.call($('.built'), function (item) {
      [].forEach.call($('.dj'), function (dj) {
        var minLeft = parseInt($(dj).css('left')) - $(item).width();
        var maxLeft = parseInt($(dj).css('left')) + $(dj).width();
        //console.log("竖向"+(parseInt($(item).css('bottom')) + $('item').height() +parseInt($(dj).css('top'))+ $(dj).height() >=$('body').height()));

        if (parseInt($(item).css('bottom')) + $('item').height() + parseInt($(dj).css('top')) + $(dj).height() >= $('body').height() && parseInt($(item).css('left')) >= minLeft && parseInt($(item).css('left')) <= maxLeft) {

          $(item).remove();
          //delete that.obj.built[$(item).data('id')]
          var hp = $(dj).data('hp');
          var enemyId = $(dj).data("id");
          that.enemyPlanes.enemy[enemyId].hp--;
          switch (hp) {
            case 1:
              if (that.enemyPlanes.enemy[enemyId].hp == 0) {
                $(dj).css('background-image', 'url(' + plain1_die1 + ')');
              } else {
                $(dj).css('background-image', 'url(' + plain1_die2 + ')');
              }
              break;
            case 2:
              if (that.enemyPlanes.enemy[enemyId].hp == 1) {
                $(dj).css('background-image', 'url(' + plain2_die1 + ')');
                //$(dj).css('background-image','url(../img/plain2_die2.png)');
              } else if (that.enemyPlanes.enemy[enemyId].hp == 0) {
                $(dj).css('background-image', 'url(' + plain2_die2 + ')');
                //  $(dj).css('background-image','url(../img/plain2_die4.png)');
              } else {
                $(dj).css('background-image', 'url(' + plain2_die3 + ')');
              }
              break;
            case 3:
              if (that.enemyPlanes.enemy[enemyId].hp == 2) {
                $(dj).css('background-image', 'url(' + plain3_die1 + ')');
              } else if (that.enemyPlanes.enemy[enemyId].hp == 1) {
                $(dj).css('background-image', 'url(' + plain3_die2 + ')');
                //$(dj).css('background-image','url('+plain3_die4+')');
              } else if (that.enemyPlanes.enemy[enemyId].hp == 0) {
                $(dj).css('background-image', 'url(' + plain3_die3 + ')');
                //$(dj).css('background-image','url('+plain3_die6+')');
              } else {
                $(dj).css('background-image', 'url(' + plain3_die5 + ')');
              }
              break;
            default:

          }
          if (that.enemyPlanes.enemy[enemyId].hp <= -1) {
            $(dj).remove();
          }
          that.scale++;
          $('.scale').html(that.scale);
        }
      });
    });
  }

};
var bullt = new built();
module.exports = bullt;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function enemyPlanes() {
  this.timer = null;
  this.obj = {};
  this.speed = null;
  this.enemy = {};
}
enemyPlanes.prototype = {
  limitLeft: $('.wrap').offset().left, //敌机出现的左边界限制
  limitRight: $('.wrap').width() + $('.wrap').offset().left, //敌机出现的右边界限制
  minWidth: 59,
  minHeight: 36,
  middleHeight: 92,
  maxHeight: 256,
  middleWidth: 70,
  maxWidth: 165,
  init: function init(s) {
    this.s = s || 1000;
    this.destoryAll();
    this.settime();
  },
  settime: function settime() {
    var that = this;
    that.timer = setInterval(function () {
      that.appendDom();
    }, that.s);
  },
  appendDom: function appendDom() {
    var n = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 3, 1, 2, 2, 2, 1, 2, 2];
    var that = this,
        distanceX,
        distanceY,
        id = this.randomNum(),
        hp = n[parseInt(Math.random() * 20)]; //敌机血量；
    var left = parseInt(Math.random() * (that.limitRight - that.limitLeft) + that.limitLeft);
    switch (hp) {
      case 1:
        distanceX = that.minWidth;
        distanceY = that.minHeight;
        break;
      case 2:
        distanceX = that.middleWidth;
        distanceY = that.middleHeight;
        break;
      case 3:
        distanceX = that.maxWidth;
        distanceY = that.maxHeight;
        break;
    }
    if (left > $('.wrap').width() + $('.wrap').offset().left - distanceX) {
      left = $('.wrap').width() + $('.wrap').offset().left - distanceX;
    }
    this.enemy[id] = {};
    this.enemy[id].dom = '<div class="enemyplanes dj enemy' + hp + '" data-id="' + id + '" data-hp="' + hp++ + '"></div>';
    this.enemy[id].hp = hp;
    $(this.enemy[id].dom).appendTo($('body')).css({ "left": left, "top": -distanceY }).animate({ "top": $('.wrap').height() + distanceY }, 5000, 'linear', function () {
      [].forEach.call($('.dj'), function (item) {
        if (parseInt($(item).css('top')) >= $('.wrap').height() + distanceY) {
          $(item).remove();
          delete that.enemy[$(item).data('id')];
        }
      });
    });
  },
  destory: function destory() {},
  destorySpecail: function destorySpecail() {//这个方法是特殊炸弹效果；

  },
  destoryAll: function destoryAll() {
    $('.enemyplanes').remove();
    clearInterval(this.timer);
  },
  randomNum: function randomNum() {
    var that = this;
    var n = Math.random().toString(36).substr(2);
    if (!!that.enemy[n]) {
      that.randomNum();
    } else {
      return n;
    }
  }
};
var dj = new enemyPlanes();
module.exports = dj;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var plane = {
  frequency: null,
  ele: $('.float'),
  width: null,
  height: null,
  clientX: $('body').width() / 2, //鼠标的距离坐标Y；
  clientY: $('body').height() - $('.float').height() / 2, //鼠标的坐标X
  left: null, //飞机的左定位
  bottom: null, //飞机的又定位；
  built: {},
  init: function init(cb, frequency) {
    this.cb = cb;
    this.resizeWidth();

    this.width = this.ele.width();
    this.height = this.ele.height();
    this.planePosition();
    this.move();
  },
  resizeWidth: function resizeWidth() {
    if ($('body').width() <= 600) {
      $('.wrap').css('width', '100%');
    }
    //$('.float').remove();
  },
  planePosition: function planePosition() {
    //左边距；
    this.left = this.clientX - this.width / 2;
    this.left = this.left <= $('.wrap').offset().left ? $('.wrap').offset().left : this.left;
    this.left = this.left >= $('.wrap').width() + $('.wrap').offset().left - $('.float').width() ? $('.wrap').width() + $('.wrap').offset().left - $('.float').width() : this.left;
    //下边界；
    this.bottom = $('body').height() - this.clientY - this.height / 2;
    this.bottom = this.bottom <= 0 ? 0 : this.bottom;
    this.bottom = this.bottom > $('body').height() - this.height * 2 ? this.bottom > $('body').height() - this.height * 2 : this.bottom;

    this.ele.css({ "left": this.left, "bottom": this.bottom });
  },
  move: function move() {
    var that = this;
    $('body').off('mousedown').on('mousemove', function (e) {
      var e = e || window.event;
      that.clientY = e.clientY;
      that.clientX = e.clientX;
      that.planePosition();
    });
    $('body').on('touchstart touchmove', function (e) {
      var e = e.originalEvent;
      that.clientX = e.targetTouches[0].clientX;
      that.clientY = e.targetTouches[0].clientY;
      that.planePosition();
    });
    $('body').on('touchend', function (e) {
      var e = e.originalEvent;
      that.clientX = e.changedTouches[0].clientX;
      that.clientY = e.changedTouches[0].clientY;
      that.planePosition();
    });
  },
  gameover: function gameover() {
    alert('gameover');
  }

};
module.exports = plane;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {
(function () {
	__webpack_require__(5);
	var bg = __webpack_require__(1);
	var plane = __webpack_require__(4);
	var built = __webpack_require__(2);
	var enemyPlanes = __webpack_require__(3);

	bg.setInter(); //整体背景；
	plane.init();
	built.init(plane, 200, enemyPlanes);
	enemyPlanes.init();

	$(window).resize(function () {
		bg.setInter(); //整体背景；
		plane.init();
		built.init(plane, 100, enemyPlanes);
		enemyPlanes.init();
	});
})();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAAkCAYAAAA3pUL9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAzdSURBVHja3Jl5mBXllcZ/VXWXXu7SfW9DX4Fe6AWIcQyLIFERHI0IjiaIRMUxYjBOyOiMikYnzyxgQA1mnCQPGZ0IJDoSxUEciRM3Fgk9KhChmyaPrSy92uvduu+9Vbeqbn01f3R1g8JMbEDNM+d5vn9q+b7zfnW+97znlGTbNkMmSRKfgQUAA8gOLQNMBAYAFSgCkhs3bpTywuG8fCEy8+fPzwBeYKrz/O6RLnoirmF8ZwrW6/VWf/fOO5dVVIyfoGVSdk9fXzSVSsUP1tc3v7dvXxkwDdCBKJAtKiqqVlV1os/n0xWXS6RSqfxgMGiGiouRZFmxbdvUVNXIqKoZ7esrsm1bB74zUsCnAus608+2YOHCb7c2tyz+4P33qd+/H13XyeVy6Lo+/IyiKLZlWRJAMpkEIB6Pu4fuZzXN7fV6kWUZWZa9xaEQ6XR6yGGvM87Yzhis2+U+v623jVtvW0pNbS1dnZ2omQyartNy7BjRaJQF110nVVRWcqjxEAcb6vmoo4NAIMjkqVPYt2cPS5Yu5Yor52JZFl7P4B40NBxk4zNPi0ONjX1CiDBQCGQ+b7BeQAY0gER/Mnf0yBH6+nqYOOlLlFVUck4kgmEY7HjzTX698VkSiQQ333IL9fUNhEJhEvE4fX29FIfD+Hw+KiorCQaDAFiWRU93N0gS8UQiLYQoBf4G+ANw6PMGexmwzFl4ffORI+8kE4kZ//XyVqm6tpZCXyEBvx+3283QqZFlmbrdu9EyGULhMO/9fh8Arc3NyIpCS3Mz1TW1xPr6qKvbze5du6zWlhZhGIYAXga2AEfONApPh6CmAOuAc4AuYFUwGPxOKpX6iiRJlEYioqqqSqmqrqa1tZ3du3byvbvu4ujRowhLUFhYwJbNmwGoqq7GMAyhZjKWLMvWwMCAYhiGW5blbiHEm8BWYC9gng02Pp0ve8Bx4q8cwNX9/f2LgUuB+V2dnXM7P/pIqdu9G7fbbXo8HkVRFBnbZuKkSfx33XFS7enuzpqmGTMMw+8cjcPAK0KIrUDr2c6Bp0tQ/wpMcMbbQNLZgK22bT8JXAskTNM8BtLE5mPNvo62DvyBAIcOHhyexLIsyzCMDLAZeBVoBtKAz+EG/bMEKwO2M4ZsIjDGCSUbEA4r/sARCjoQPOH5PcBkRzCMtaycJxaLIisSXZ2dwykpFApRHArJ7e3tEZ/Pd9kF06dL3d3d/p6uropYLDbD5XLFgsXF72azWUNNp12maRY4jGwD/c4wAb9zfR2wfyRn1utMIAAF+IEsyzcJIYrcbo8qSaSFEEYulzMckEPKKOc4YTnvTXfYWpYkyV8yapRUU1NDLBbnww+aBg/+1KlUVFayfds2UgMD5Ofnk83q2LY4dYpze3KmabhOyN2WbdsIIRTnUhRYMgT405xZ4QyArwLLhBCUlpbytblXFQSDQbeqqhlNU9V0KmPqpu7JZrOoqXS6LxbVeru7NcuyNNu2I7lcrkqSJFuWZRGLRpWKigri8djwQmPHlXHOmDH4CgvJpDPIsjwM9Mvn/Rk33nwzPl8hHo+XQCCI1+txZdJp0qqKS1GQZUUZFCcxNjz1VP/hDz8oATYCfwm892nCODe0kcACgEvnzOG6hYsIl5Sg61m3o2WLABRZRpJlJElCkiSRM3PdlmUaqVS68J8fW2OrGVU2DF0CiWg0ykB//3AqGl9VhWVZxONxhLCwLAtFUbhk1qWsWLUKl+vT00lNbW1w2e1Lj0Wj0SrgX4BvAS2c4ox+jLFPSC/X5ufn6/c98CDTpl9AWXkZkUgEv9+P15uHJElYQpDL5TBNE8MwZGGLMVndqGxtbR2Vl5+v9PcnJSEE4ZLw4E7mBvcyEAgQDAZ4a8d2dF0nEAhQO3Ei48rKuPnWb40IKEAkEmHl6tUvOQxeA9SOhI0jQKHidvcoilKaSqUQQqAoCsK2Ka8oQ1NV4vEEmqaRSCT48IMmon1R+vuT6LpOKBQiGY+jqiqxaJRcLkdpaSnevDyy2SyxWIy+3l6mTruA1pZm2tvaKBtXTrS3l7reKG6vG6/Xi6IomGaOgN9PZVXV/7YR2U3PPZcFCpzUuG8komI08E/AghkzZybnzptXdOHMr7Jz+zZaW1r423uXYwub+voD7Ny+jWNHj6LrOrYNHq+HsrIyUqkU+/bswTBNPG43tm3jDwRwezwgBKFwGI/HywXTp7Px359BVVVGl5ZiGgYDAwNMnDSJyvHj6enp4Q+NjZw/ZQoP/XA1hb7CT2JoXfPIw2/95uWXFzh5+k6gdSSiohf4OyB/77vvXiVLshmJnOP+oKmJkpJR/PaVV4iURtiwYR0NBw4QCoXw+wNk9SyJeJzGhgYURSEvLw+XENi2jWmaRPv6hje1q6uLgoIC2tpayWYHS91kIoFhGMMhn4jFaXr/fYQQXHTRxScDtdl58w2LXmpra1vt5Oe7/i8x8sfkog9YA3xj3LhxuUU3LnZNmDiBR1evYsntt1MSLmHzpk3semvnKSf3eDzkcjkKCgvRVBXLsoZqYPx+P/5AgEQiQTKROE4isjwcqkPA715+HwsXLfq443D49iW3PtvU1HSvk+dvAbafiVxMAysApaOj45p33q7L2bZwTZk6jcmTp6C4FJYsXYrL5WLH9m3Yto3L5cKbl4eezQ47a+g6xcXFGIaBDfj8fiKlpciKQldn5/BGD71/ItB5V1/NgoXXneTYmkcf2dnU1HSPA/ShE4GeaSEQAFYB14dLSuz7H3xQuviSWaxauYLa2lounnUpjQcP0t7exls7dmDoOuPKy+nr6aG9vR1FUSgoKMASgqymOSJhsG4dCuFwOMw1CxZw8MABDjY0MHbcOBYsvJ6r5s0/KXxf2rKl6/E1Pwo4ymkD8PdnsxAYAP4RMGLR6OIn1q4ViXhcLigopLKqis0vbMJX6OeO7y5j1uzZPL1+PR0dHSSTSfLy8vjyeedx5PBh0uk0QggkSSInxMfyXqHPTzAQoKu7m1mzZ3P38vsIhUInOfLsM0/rTz355CjH9+eBlZ82RckjSGdJZ+INrS0t8tqf/cwuryinoKCAeDxO7aQJ1B/Yz6hRo7l7+XLmzPnzwdYKcM3Xv0FVTQ2FPt/wrrsVhUU33MhFl1yCJEl0d3Xy9IYNzJgxg+X3f/+UQNc/9YvEL554wiOEcAH/CfzDSMo/mZFZygnn1WomI361fr314qYXmHHhTNwuN6tXrqSvrxdFUZg1ZzbVNTVIwLFjR+lP9KPI8jAJaZpGJpPh/MmTB790LsfSO+7gvgceJFhU9HFZl8vxo4cf7vzV+vXFtm1LTkF//0jbNCMFiyP8f27b9j2pVCq5ffs22lpbqK8/wFemTCEei/HCpk1omobb7cESAjWdpsBXgKqqgxTv8+HxeNjzztt0tLcjyzJFxcVc/rUrB7+8OH7eVFVl9Q8f6n5l68tjnEu/Bh44nX7U6YAdss1CiHtlWY49t3Ejdb/7HX9x7ddpa21j2xtvOMBssG26e3r4sKkJy7KQZZlsNsvMiy6iqDhEe1sbsixjGgZZbZCsLDGYokzT5PHH1mS2vf56xFlzoyN2Bk7H4TMBKwPbhBDflyTJbG9rY/eut0gmE3zp3HN5b99eEvE4kiTR2NCArutcceVcLrv8chRFYdlf38n1i66n66OPUBQFTdM41DhY2LtcLlKpFI89+qjx+quvDlHxLx2gp91hPJNW6lAp+Kpt23dKkvToC88/Xzx9xgwuvHAmL255EU3TyOVyJJNJyisq+OYNNzBm7Fh6l9zGuLIyRpWWsruujrpduwbFRn6+80UNfvLjH+feeP01j1OcPO5UM+IL7Rs79hvbtnVJkv5t39693ngigSLLhMPh4ab4bUtvZ8KkSYNn1u8fBOfxsPD6Rex7910ymQw5w8A0Ddb+9Ke88fprQ749Aqw9G07KnD17w7btb0uSNHD08GFUVaV6wgQASiMRKsePJx6Pn/TS5ClTmDV7DuGSEkpGjeaX69blnO6jBtzzCaCTgXP/FMAC7LRte7EkSUfjsRidHR1IkoRpGGx/883hQuBExrWFTXlFOfOvvhrFJQ9sefHFPqfFcjew6YS5rwB+C9znKKcvLIxPtP22ba8E1h9qbHQDjC0v55s33URxcfFxaSofl6Ztra0AxuoVK/Zk0mnD6V4e+MS8807Q6+afCliAbcD3gMeAojy32/a4PZKmaRi6TiAw2IzUDZ3f79lLeiCVPHL0yL7urq5uh4i6TxU1QD7whNPo+1z+CIzEZjsSc8I5Y8ZkI5FInqZpjC4tRde0/tb2dlNNpw0hxGvpdLod+A8gfjYW/kz+z34Km+YonktOcU9zCoz9Tv5sO1uLflFgh5oA04DiUChU3N/fn7Esy3R+VjV+Fgv+UbD/3+1/BgDawQ+sIH6RXwAAAABJRU5ErkJggg=="

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/57a67e15.plain3_die1.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/7307cd5c.plain3_die2.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/958c9de7.plain3_die3.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/02e89f8b.plain3_die4.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/img/1c1553ec.plain3_die5.png";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })
/******/ ]);