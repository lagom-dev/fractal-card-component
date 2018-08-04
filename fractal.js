'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Dev Valtech');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));
fractal.web.set('static.mount', 'dev-valtech');

fractal.components.set('default.preview', '@preview');

const hbs = require('@frctl/handlebars')({
    helpers: {
        uppercase: function(str) {
            return str.toUpperCase();
        },
        moduloIf: function(index_count,mod,block) {
            if (parseInt(index_count)%(mod)=== 0) {
                if (index_count===0) {
                    return null;
                } else {
                    return block.fn(this);
                }
            }
        },
       concat : function(){
            var arg = Array.prototype.slice.call(arguments,0);
            arg.pop();
            return arg.join('');
          }
    }
    /* other configuration options here */
});

fractal.components.engine(hbs); /* set as the default template engine for components */
fractal.docs.engine(hbs); /* you can also use the same instance for documentation, if you like! */

