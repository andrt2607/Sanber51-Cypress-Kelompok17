import htmlPage from "../../../../fixtures/html-web.json";
import {chooseProduct} from "../../../../pageObjects/chooseProduct";

describe("Choose Product Women", () => {
  it("1- Success Choose Product Women", () => {
    chooseProduct.visitMagentoPage()
    chooseProduct.chooseWomen()
    chooseProduct.isTrueArrivalPage(htmlPage.product.women)
  });

  it("2 - Success Choose Category Tops-Women", () => {
    cy.clickRedirectProductWoman()
    chooseProduct.chooseTopsCategory()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.topsWomen)
  })

  it("3 - Success Choose Category Bottoms-Women", () => {
    cy.clickRedirectProductWoman()
    chooseProduct.chooseBottomsCategory()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.bottomWomen)
  })

  it("4 - Success Choose Category Tops Hoodies & Sweatshirts-Women", () => {
    cy.clickRedirectProductWoman()
    chooseProduct.chooseHoodiesSweatshirts()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.hoodiesSweatshirtsWomen)
  })

  it("5 - Success Choose Category Tops Jackets-Women", () => {
    cy.clickRedirectProductWoman()
    chooseProduct.chooseJackets()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.jacketsWomen)
  })

  it("6 - Success Choose Category Tops Tees-Women", () => {
    cy.clickRedirectProductWoman()
    chooseProduct.chooseTees()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.teesWomen)
  })

  it("7 - Success Choose Category Tops Bras & Tanks-Women", () => {
    cy.clickRedirectProductWoman()
    chooseProduct.chooseTanks()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.tanksWomen)
  })

  it("8 - Success Choose Category Bottoms Pants-Women", () => {
    cy.clickRedirectProductWoman()
    chooseProduct.choosePants()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.pantsWomen)
  })

  it("9 - Success Choose Category Bottoms Shorts-Women", () => {
    cy.clickRedirectProductWoman()
    chooseProduct.chooseShorts()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.shortsWomen)
  })
});

describe("Choose Product Men", () => {
  it("1- Success Choose Product Men", () => {
    chooseProduct.visitMagentoPage()
    chooseProduct.chooseMen()
    chooseProduct.isTrueArrivalPage(htmlPage.product.men)
  });

  it("2 - Success Choose Category Tops-Men", () => {
    cy.clickRedirectProductMen()
    chooseProduct.chooseTopsCategory()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.topsMen)
  })

  it("3 - Success Choose Category Bottoms-Men", () => {
    cy.clickRedirectProductMen()
    chooseProduct.chooseBottomsCategory()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.bottomMen)
  })

  it("4 - Success Choose Category Tops Men Hoodies & Sweatshirts", () => {
    cy.clickRedirectProductMen()
    chooseProduct.chooseHoodiesSweatshirts()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.hoodiesSweatshirtsMen)
  })

  it("5 - Success Choose Category Men Tops Jackets", () => {
    cy.clickRedirectProductMen()
    chooseProduct.chooseJackets()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.jacketsMen)
  })

  it("6 - Success Choose Category Tops Men Tees", () => {
    cy.clickRedirectProductMen()
    chooseProduct.chooseTees()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.teesMen)
  })

  it("7 - Success Choose Category Tops Men Tanks", () => {
    cy.clickRedirectProductMen()
    chooseProduct.chooseTanks()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.tanksMen)
  })

  it("8 - Success Choose Category Bottoms Men Pants", () => {
    cy.clickRedirectProductMen()
    chooseProduct.choosePants()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.pantsMen)
  })

  it("9 - Success Choose Category Bottoms Men Shorts", () => {
    cy.clickRedirectProductMen()
    chooseProduct.chooseShorts()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.shortsMen)
  })
});

describe("Choose Product Gear", () => {
  it("1- Success Choose Product Gear", () => {
    chooseProduct.visitMagentoPage()
    chooseProduct.chooseGear()
    chooseProduct.isTrueArrivalPage(htmlPage.product.gear)
  });

  it("2 - Success Choose Category Bags", () => {
    cy.clickRedirectProductGear()
    chooseProduct.chooseBags()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.bagGear)
  })

  it("3 - Success Choose Category Fitness Equipment", () => {
    cy.clickRedirectProductGear()
    chooseProduct.chooseFitnessEquipment()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.fitnessEquipmentGear)
  })

  it("4 - Success Choose Category Watches", () => {
    cy.clickRedirectProductGear()
    chooseProduct.chooseWatches()
    //chooseProduct.isValueNotZero()
    chooseProduct.isTrueArrivalPage(htmlPage.product.watchesGear)
  })
});
