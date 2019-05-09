module.exports = (toolbox) => {
    const { filesystem, template, print: { error, info, colors } } = toolbox;

    async function isReactNative() {
        const package = await filesystem.read('package.json', 'json');

        return !!package.dependencies['react-native'];
    }

    async function createComponent(folder, name) {
        if (!name) {
            error('Name must be specified');
            return
        }

        const componentTemplate = (await isReactNative())
            ? 'component-rn.js.ejs'
            : 'component-react.js.ejs'

        const styleTemplate = (await isReactNative())
            ? 'styles-rn.js.ejs'
            : 'styles-react.js.ejs'

        await template.generate({
            template: componentTemplate,
            target: `${folder}/${name}/index.js`,
            props: { name },
        })

        await template.generate({
            template: styleTemplate,
            target: `${folder}/${name}/styles.js`,
        })

        info(`${colors.success('CREATE')} ${folder}/${name}.`)
    }

    toolbox.createComponent = createComponent
};