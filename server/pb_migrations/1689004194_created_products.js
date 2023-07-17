migrate((db) => {
  const collection = new Collection({
    "id": "nt1pb834bsululv",
    "created": "2023-07-10 15:49:54.687Z",
    "updated": "2023-07-10 15:49:54.687Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ezyku3yo",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nt1pb834bsululv");

  return dao.deleteCollection(collection);
})
