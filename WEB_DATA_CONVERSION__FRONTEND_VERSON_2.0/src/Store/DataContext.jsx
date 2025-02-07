import React from "react";
const dataContext = React.createContext({
  csvHeader: [],
  isLogin: false,
  isLoading: true,
  primaryKey: "",
  imageColName: "",
  skippingKey: [],
  firstInputFileName: "",
  secondInputFileName: "",
  firstInputCsvFiles: [],
  secondInputCsvFiles: [],
  correctedCsv: {},
  zipImageFile: [],
  fileId: "",
  imageMappedData: [],
  csvFile: [],
  csvDataWithImage: [],
  userData: {},
  loginData: {},
  uploadZipImage: [],
  formFeilds: [],
  templateData: {},

  modifyTemplateData: () => {},
  modifyUserData: () => {},
  modifyLoginData: () => {},
  modifyIsLoading: () => {},
  modifyIslogin: () => {},
  addToCsvHeader: () => {},
  addToPrimaryKey: () => {},
  addToSkippingKey: () => {},
  addFirstInputFileName: () => {},
  addSecondInputFileName: () => {},
  addFirstInputCsvFile: () => {},
  addSecondInputCsvFile: () => {},
  addToCorrectedCsv: () => {},
  addZipImageFile: () => {},
  modifyFileId: () => {},
  setImageColName: () => {},
  setImageMappedData: () => {},
  setCsvFile: () => {},
  setCsvDataWithImage: () => {},
  setUploadZipImage: () => {},
  setFormFeilds: () => {},
});

export default dataContext;
