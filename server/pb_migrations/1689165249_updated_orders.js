migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2hz6ydgpkf4d0co")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "izqx71jz",
    "name": "totalCartCost",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2hz6ydgpkf4d0co")

  // remove
  collection.schema.removeField("izqx71jz")

  return dao.saveCollection(collection)
})
