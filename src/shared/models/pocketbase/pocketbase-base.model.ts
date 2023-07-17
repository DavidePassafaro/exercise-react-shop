export interface PocketBaseBase {
  collectionId: string;
  collectionName: string;
  expand: { [key: string]: any };

  // Explicit
  id: string;
  created: string;
  updated: string;
}
