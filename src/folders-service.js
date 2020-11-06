const FoldersService = {
    getAllFolders(knex) {
        return knex('folder').select('*')
    },
    insertFolder(knex, newFolder) {
        return knex
            .insert(newFolder)
            .into('folder')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    getById(knex, ID) {
        return knex('folder')
            .select('*')
            .where('id', ID)
            .first()
    },
    deleteFolder(knex, ID) {
        return knex('folder')
            .where('id', ID)
            .delete()
    },
    updateFolder(knex, ID, newData) {
        return knex('folder')
            .where('id', ID)
            .update(newData)
    }
}

module.exports = FoldersService