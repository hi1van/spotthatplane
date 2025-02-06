"use strict";(self.webpackChunkspotthatplane=self.webpackChunkspotthatplane||[]).push([[316],{3316:e=>{function t(e){if("string"!==typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",i=0,l=-1,o=0,a=0;a<=e.length;++a){if(a<e.length)r=e.charCodeAt(a);else{if(47===r)break;r=47}if(47===r){if(l===a-1||1===o);else if(l!==a-1&&2===o){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var h=n.lastIndexOf("/");if(h!==n.length-1){-1===h?(n="",i=0):i=(n=n.slice(0,h)).length-1-n.lastIndexOf("/"),l=a,o=0;continue}}else if(2===n.length||1===n.length){n="",i=0,l=a,o=0;continue}t&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(l+1,a):n=e.slice(l+1,a),i=a-l-1;l=a,o=0}else 46===r&&-1!==o?++o:o=-1}return n}var n={resolve:function(){for(var e,n="",i=!1,l=arguments.length-1;l>=-1&&!i;l--){var o;l>=0?o=arguments[l]:(void 0===e&&(e=process.cwd()),o=e),t(o),0!==o.length&&(n=o+"/"+n,i=47===o.charCodeAt(0))}return n=r(n,!i),i?n.length>0?"/"+n:"/":n.length>0?n:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&i&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var i=arguments[r];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r)return"";if((e=n.resolve(e))===(r=n.resolve(r)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var l=e.length,o=l-i,a=1;a<r.length&&47===r.charCodeAt(a);++a);for(var h=r.length-a,f=o<h?o:h,c=-1,s=0;s<=f;++s){if(s===f){if(h>f){if(47===r.charCodeAt(a+s))return r.slice(a+s+1);if(0===s)return r.slice(a+s)}else o>f&&(47===e.charCodeAt(i+s)?c=s:0===s&&(c=0));break}var g=e.charCodeAt(i+s);if(g!==r.charCodeAt(a+s))break;47===g&&(c=s)}var u="";for(s=i+c+1;s<=l;++s)s!==l&&47!==e.charCodeAt(s)||(0===u.length?u+="..":u+="/..");return u.length>0?u+r.slice(a+c):(a+=c,47===r.charCodeAt(a)&&++a,r.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,i=-1,l=!0,o=e.length-1;o>=1;--o)if(47===(r=e.charCodeAt(o))){if(!l){i=o;break}}else l=!1;return-1===i?n?"/":".":n&&1===i?"//":e.slice(0,i)},basename:function(e,r){if(void 0!==r&&"string"!==typeof r)throw new TypeError('"ext" argument must be a string');t(e);var n,i=0,l=-1,o=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var a=r.length-1,h=-1;for(n=e.length-1;n>=0;--n){var f=e.charCodeAt(n);if(47===f){if(!o){i=n+1;break}}else-1===h&&(o=!1,h=n+1),a>=0&&(f===r.charCodeAt(a)?-1===--a&&(l=n):(a=-1,l=h))}return i===l?l=h:-1===l&&(l=e.length),e.slice(i,l)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!o){i=n+1;break}}else-1===l&&(o=!1,l=n+1);return-1===l?"":e.slice(i,l)},extname:function(e){t(e);for(var r=-1,n=0,i=-1,l=!0,o=0,a=e.length-1;a>=0;--a){var h=e.charCodeAt(a);if(47!==h)-1===i&&(l=!1,i=a+1),46===h?-1===r?r=a:1!==o&&(o=1):-1!==r&&(o=-1);else if(!l){n=a+1;break}}return-1===r||-1===i||0===o||1===o&&r===i-1&&r===n+1?"":e.slice(r,i)},format:function(e){if(null===e||"object"!==typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var r=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return r?r===t.root?r+n:r+e+n:n}("/",e)},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n,i=e.charCodeAt(0),l=47===i;l?(r.root="/",n=1):n=0;for(var o=-1,a=0,h=-1,f=!0,c=e.length-1,s=0;c>=n;--c)if(47!==(i=e.charCodeAt(c)))-1===h&&(f=!1,h=c+1),46===i?-1===o?o=c:1!==s&&(s=1):-1!==o&&(s=-1);else if(!f){a=c+1;break}return-1===o||-1===h||0===s||1===s&&o===h-1&&o===a+1?-1!==h&&(r.base=r.name=0===a&&l?e.slice(1,h):e.slice(a,h)):(0===a&&l?(r.name=e.slice(1,o),r.base=e.slice(1,h)):(r.name=e.slice(a,o),r.base=e.slice(a,h)),r.ext=e.slice(o,h)),a>0?r.dir=e.slice(0,a-1):l&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n}}]);
//# sourceMappingURL=316.53d00b8c.chunk.js.map