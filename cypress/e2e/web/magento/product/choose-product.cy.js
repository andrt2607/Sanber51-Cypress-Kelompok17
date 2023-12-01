import htmlPage from "../../../../fixtures/html-web.json";
import { chooseProduct } from "../../../../pageObjects/chooseProduct";

describe("Choose Product Women", () => {
  it("1- Success Choose Product Women", () => {
    chooseProduct.visitMagentoPage();
    chooseProduct.chooseWomen();
    chooseProduct.isTrueArrivalPage(htmlPage.product.women);
    //cy.screenshot("1- Success Choose Product Women");
  });

  it("2 - Success Choose Category Tops-Women", () => {
    cy.clickRedirectProductWoman();
    chooseProduct.chooseTopsCategory();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.topsWomen);
    //cy.screenshot("2 - Success Choose Category Tops-Women");
  });

  it("3 - Success Choose Category Bottoms-Women", () => {
    cy.clickRedirectProductWoman();
    chooseProduct.chooseBottomsCategory();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.bottomWomen);
    //cy.screenshot("3 - Success Choose Category Bottoms-Women");
  });

  it("4 - Success Choose Category Tops Hoodies & Sweatshirts-Women", () => {
    cy.clickRedirectProductWoman();
    chooseProduct.chooseHoodiesSweatshirts();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.hoodiesSweatshirtsWomen);
    //cy.screenshot("4 - Success Choose Category Tops Hoodies & Sweatshirts-Women");
  });

  it("5 - Success Choose Category Tops Jackets-Women", () => {
    cy.clickRedirectProductWoman();
    chooseProduct.chooseJackets();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.jacketsWomen);
    //cy.screenshot("5 - Success Choose Category Tops Jackets-Women");
  });

  it("6 - Success Choose Category Tops Tees-Women", () => {
    cy.clickRedirectProductWoman();
    chooseProduct.chooseTees();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.teesWomen);
    //cy.screenshot("6 - Success Choose Category Tops Tees-Women");
  });

  it("7 - Success Choose Category Tops Bras & Tanks-Women", () => {
    cy.clickRedirectProductWoman();
    chooseProduct.chooseTanks();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.tanksWomen);
    //cy.screenshot("7 - Success Choose Category Tops Bras & Tanks-Women");
  });

  it("8 - Success Choose Category Bottoms Pants-Women", () => {
    cy.clickRedirectProductWoman();
    chooseProduct.choosePants();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.pantsWomen);
    //cy.screenshot("8 - Success Choose Category Bottoms Pants-Women");
  });

  it("9 - Success Choose Category Bottoms Shorts-Women", () => {
    cy.clickRedirectProductWoman();
    chooseProduct.chooseShorts();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.shortsWomen);
    //cy.screenshot("9 - Success Choose Category Bottoms Shorts-Women");
  });
});

describe("Choose Product Men", () => {
  it("1- Success Choose Product Men", () => {
    chooseProduct.visitMagentoPage();
    chooseProduct.chooseMen();
    chooseProduct.isTrueArrivalPage(htmlPage.product.men);
    //cy.screenshot("1- Success Choose Product Men");
  });

  it("2 - Success Choose Category Tops-Men", () => {
    cy.clickRedirectProductMen();
    chooseProduct.chooseTopsCategory();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.topsMen);
    //cy.screenshot("2 - Success Choose Category Tops-Men");
  });

  it("3 - Success Choose Category Bottoms-Men", () => {
    cy.clickRedirectProductMen();
    chooseProduct.chooseBottomsCategory();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.bottomMen);
    //cy.screenshot("3 - Success Choose Category Bottoms-Men");
  });

  it("4 - Success Choose Category Tops Men Hoodies & Sweatshirts", () => {
    cy.clickRedirectProductMen();
    chooseProduct.chooseHoodiesSweatshirts();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.hoodiesSweatshirtsMen);
    //cy.screenshot("4 - Success Choose Category Tops Men Hoodies & Sweatshirts");
  });

  it("5 - Success Choose Category Men Tops Jackets", () => {
    cy.clickRedirectProductMen();
    chooseProduct.chooseJackets();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.jacketsMen);
    //cy.screenshot("5 - Success Choose Category Men Tops Jackets");
  });

  it("6 - Success Choose Category Tops Men Tees", () => {
    cy.clickRedirectProductMen();
    chooseProduct.chooseTees();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.teesMen);
    //cy.screenshot("6 - Success Choose Category Tops Men Tees");
  });

  it("7 - Success Choose Category Tops Men Tanks", () => {
    cy.clickRedirectProductMen();
    chooseProduct.chooseTanks();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.tanksMen);
    //cy.screenshot("7 - Success Choose Category Tops Men Tanks");
  });

  it("8 - Success Choose Category Bottoms Men Pants", () => {
    cy.clickRedirectProductMen();
    chooseProduct.choosePants();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.pantsMen);
    //cy.screenshot("8 - Success Choose Category Bottoms Men Pants");
  });

  it("9 - Success Choose Category Bottoms Men Shorts", () => {
    cy.clickRedirectProductMen();
    chooseProduct.chooseShorts();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.shortsMen);
    //cy.screenshot("9 - Success Choose Category Bottoms Men Shorts");
  });
});

describe("Choose Product Gear", () => {
  it("1- Success Choose Product Gear", () => {
    chooseProduct.visitMagentoPage();
    chooseProduct.chooseGear();
    chooseProduct.isTrueArrivalPage(htmlPage.product.gear);
    //cy.screenshot("1- Success Choose Product Gear");
  });

  it("2 - Success Choose Category Bags", () => {
    cy.clickRedirectProductGear();
    chooseProduct.chooseBags();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.bagGear);
    //cy.screenshot("2 - Success Choose Category Bags");
  });

  it("3 - Success Choose Category Fitness Equipment", () => {
    cy.clickRedirectProductGear();
    chooseProduct.chooseFitnessEquipment();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.fitnessEquipmentGear);
    //cy.screenshot("3 - Success Choose Category Fitness Equipment");
  });

  it("4 - Success Choose Category Watches", () => {
    cy.clickRedirectProductGear();
    chooseProduct.chooseWatches();
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.watchesGear);
    //cy.screenshot("4 - Success Choose Category Watches");
  });
});
