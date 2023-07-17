migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nt1pb834bsululv")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nt1pb834bsululv")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
