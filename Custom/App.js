function CustomService() {
    const Custom = package.create('package', path.join(__dirname, '../../../../Custom/default.js'), 'Custom');
    Custom.config('package', 'Custom', 'enabled', true);
    const enabled = Custom.strings.full.package.dev.self[1];

    // Additional information toggle for non-production ready
    // Updates for Custom.
    const production = false;

    Custom.config('package', 'Custom', 'author', 'Cassitydev');
    Custom.config('package', 'Custom', 'version', '0.1.0');
    Custom.config('package', 'Custom', 'repo', 'No Repository published for Custom yet.');
    Custom.config('package', 'Custom', 'description', '(Custom package for NextLanguage) A package which Customly exposes NextLanguages Modules to external files. I.E. Plugins, packages, postload and preload files.');

    if (enabled === true) {
        if (production === false) {
            addOutput('Custom package is enabled.');
        }
    } else {
        if (production === false) {
            addOutput('Custom package is disabled along an unknown error.');
        } else {
            addOutput('Custom package is disabled.');
        }
    }

    return Custom
}

const Strings = CustomService();

console.log(Strings.strings.full.package);