migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nt1pb834bsululv")

  collection.indexes = [
    "CREATE UNIQUE INDEX `products_names` ON `products` (`name`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "owqmv0jl",
    "name": "cost",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vpooimu2",
    "name": "tmb",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1r0fva2n",
    "name": "description",
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

  collection.indexes = []

  // remove
  collection.schema.removeField("owqmv0jl")

  // remove
  collection.schema.removeField("vpooimu2")

  // remove
  collection.schema.removeField("g1ezk4da")

  // remove
  collection.schema.removeField("1r0fva2n")

  return dao.saveCollection(collection)
})
