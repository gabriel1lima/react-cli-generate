
module.exports = {
    name: 'component',
    alias: ['c'],
    description: 'Create new component inside src/components',
    run: async toolbox => {
        const {
            parameters,
            createComponent,
        } = toolbox

        const name = parameters.first

        await createComponent('src/components', name)
    },
};