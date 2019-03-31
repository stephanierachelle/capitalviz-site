var SVGSpriter = require('svg-sprite'),
    mkdirp = require('mkdirp'),
    path = require('path'),
    fs = require('fs'),

// 1. Create and configure a spriter instance
// ====================================================================
    spriter = new SVGSpriter({
        dest: 'out',        // Main output directory
        mode: {
            css: {                // Create a CSS sprite
                render: {
                    css: true            // Render a CSS stylesheet
                }
            }
        }
    });

// 2. Add some SVG files to process
// ====================================================================
spriter.add(
    path.resolve('./app/temp/example-1.svg'),
    'example-1.svg',
    fs.readFileSync('./app/temp/example-1.svg', { encoding: 'utf-8' })
);

/* ... */

spriter.add(
    path.resolve('./app/temp/example-x.svg'),
    'example-x.svg',
    fs.readFileSync('./app/temp/example-x.svg', { encoding: 'utf-8' })
);

// 3. Trigger the (asynchronous) compilation process
// ====================================================================
spriter.compile(function (error, result, data) {

    // Run through all files that have been created for the `css` mode
    for (var type in result.css) {

        // Recursively create directories as needed
        mkdirp.sync(path.dirname(result.css[type].path));

        // Write the generated resource to disk
        fs.writeFileSync(result.css[type].path, result.css[type].contents);
    }
});