const FoldersService = {
    getAllFolders(knex) {
        return knex('folders').select('*')
    },
    insertFolder(knex, newFolder) {
        return knex
            .insert(newFolder)
            .into('folders')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    getById(knex, ID) {
        return knex('folders')
            .select('*')
            .where('id', ID)
            .first()
    },
    deleteFolder(knex, ID) {
        return knex('folders')
            .where('id', ID)
            .delete()
    },
    updateFolder(knex, ID, newData) {
        return knex('folders')
            .where('id', ID)
            .update(newData)
    }
}

module.exports = FoldersService