migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nt1pb834bsululv")

  // remove
  collection.schema.removeField("y8qkq4yh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tqqi08b7",
    "name": "img",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nt1pb834bsululv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y8qkq4yh",
    "name": "img",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("tqqi08b7")

  return dao.saveCollection(collection)
})
