
module.exports = {
    name: 'page',
    alias: ['p'],
    description: 'Create new page inside src/pages',
    run: async toolbox => {
        const {
            parameters,
            createComponent,
        } = toolbox

        const name = parameters.first

        await createComponent('src/pages', name)
    },
};