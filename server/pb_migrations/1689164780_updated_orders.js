migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2hz6ydgpkf4d0co")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "evmb7to2",
    "name": "order",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2hz6ydgpkf4d0co")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "evmb7to2",
    "name": "productsOrder",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
