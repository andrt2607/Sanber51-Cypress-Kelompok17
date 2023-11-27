import selectors from "../fixtures/selectorCategoryProduct.json";

export class chooseProduct {
  static visitMagentoPage() {
    cy.visit("");
  }
  static chooseWomen() {
    cy.get(selectors.menuWomenSelector).click();
  }

  static chooseMen() {
    cy.get(selectors.menuMenSelector).click();
  }

  static chooseGear() {
    cy.get(selectors.menuGearSelector).click();
  }

  static chooseTopsCategory() {
    cy.get("dd > .items > :nth-child(1) > a").click();
  }
  static chooseBottomsCategory() {
    cy.get("dd > .items > :nth-child(2) > a").click();
  }
  static chooseHoodiesSweatshirts() {
    cy.get(".categories-menu > :nth-child(2) > :nth-child(1) > a").click();
  }
  static chooseJackets() {
    cy.get(".categories-menu > :nth-child(2) > :nth-child(2) > a").click();
  }
  static chooseTees() {
    cy.get(".categories-menu > :nth-child(2) > :nth-child(3) > a").click();
  }
  static chooseTanks() {
    cy.get(".categories-menu > :nth-child(2) > :nth-child(4) > a").click();
  }
  static choosePants() {
    cy.get(".categories-menu > :nth-child(4) > :nth-child(1) > a").click();
  }
  static chooseShorts() {
    cy.get(".categories-menu > :nth-child(4) > :nth-child(2) > a").click();
  }
  static chooseBags() {
    cy.get("dd > .items > :nth-child(1) > a").click();
  }
  static chooseFitnessEquipment() {
    cy.get("dd > .items > :nth-child(2) > a").click();
  }
  static chooseWatches() {
    cy.get("dd > .items > :nth-child(3) > a").click();
  }
  //need fixing
  static isValueNotZero() {
    cy.get(":nth-child(3) > #toolbar-amount > :nth-child(3)").then(($element) => {
      if ($element.length > 0) {
        cy.get(":nth-child(3) > #toolbar-amount > :nth-child(3)").should(
            "not.have.value",
            0
          );
      } else {
        cy.get(":nth-child(3) > #toolbar-amount > .toolbar-number").should(
            "not.have.value",
            0
          );
      }
    }, () => {
        cy.get(":nth-child(3) > #toolbar-amount > .toolbar-number").should(
            "not.have.value",
            0
          );
    });
    // cy.get(":nth-child(3) > #toolbar-amount > :nth-child(3)")
    //   .should("exist")
    //   .then(() => {
    //     cy.get(":nth-child(3) > #toolbar-amount > :nth-child(3)").should(
    //       "not.have.value",
    //       0
    //     );
    //   })
    //   .catch(() => {
    //     cy.get(":nth-child(3) > #toolbar-amount > .toolbar-number").should(
    //       "not.have.value",
    //       0
    //     );
    //   });
    // cy.get(':nth-child(3) > #toolbar-amount > :nth-child(3)').should('not.have.value', 0)
  }
  static isTrueArrivalPage(urlEndpoint) {
    cy.url().should("include", urlEndpoint);
  }
}
