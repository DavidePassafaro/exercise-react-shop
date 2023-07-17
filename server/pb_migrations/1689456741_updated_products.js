migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nt1pb834bsululv")

  // remove
  collection.schema.removeField("xydfzzwr")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nt1pb834bsululv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xydfzzwr",
    "name": "tmb",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
