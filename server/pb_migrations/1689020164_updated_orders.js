migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2hz6ydgpkf4d0co")

  // remove
  collection.schema.removeField("omkhv9q4")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2hz6ydgpkf4d0co")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "omkhv9q4",
    "name": "total",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
