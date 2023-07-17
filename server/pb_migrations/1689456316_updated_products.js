migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nt1pb834bsululv")

  // remove
  collection.schema.removeField("g1ezk4da")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nt1pb834bsululv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g1ezk4da",
    "name": "img",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // remove
  collection.schema.removeField("y8qkq4yh")

  return dao.saveCollection(collection)
})
