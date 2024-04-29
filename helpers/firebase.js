/* eslint-disable import/no-mutable-exports */
import { initializeApp } from "firebase/app";
import { deleteObject, getStorage, ref, uploadBytes } from "firebase/storage";

import config from "../../../config";

let app;
let folderCv;
let getStorageRef;
let prepareUpload;
let prepareDelete;

// for being able to build with Gatbsy
// https://www.gatsbyjs.org/docs/debugging-html-builds/#how-to-check-if-window-is-defined
if (typeof window !== `undefined`) {
  app = initializeApp(config.firebaseConfig);

  folderCv = getStorage(app);

  getStorageRef = (child, storage = folderCv) => ref(storage, child);

  prepareUpload = (storageFileRef, file) => uploadBytes(storageFileRef, file);

  prepareDelete = storageFileRef => deleteObject(storageFileRef);
} else {
  // TODO: find a better way fot "stubbing" this during gatbsy build.
  const commonFields = {
    child: () => {}
  };
  app = { ...commonFields };
  folderCv = {
    ...commonFields
  };

  getStorageRef = () => {};

  prepareUpload = () => {};

  prepareDelete = () => {};
}

export { app, folderCv, getStorageRef, prepareDelete, prepareUpload };
