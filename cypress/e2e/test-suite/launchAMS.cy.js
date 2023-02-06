/// <reference types="Cypress" />
import AddVehicleToSale from "../../support/pageObject/addVehicleToSale.cy.js";
const AddVehicleToSaleObj = new AddVehicleToSale()



describe('Add vehicle to sale', () => {

    let vehiclesData;

    before(function () {

        cy.fixture('SaleData').then(function (saleDetails) {
            this.saleDetails = saleDetails
        })

        cy.fixture('Multiple_vehicle').then((data) => {
            vehiclesData = data;
        })

    })

    it('check vehicles are getting added in created sale', function () {

        cy.visit(Cypress.env('url'))
        AddVehicleToSaleObj.getAddSaleBtn().click()
        //cy.pause()
        AddVehicleToSaleObj.getSaleDescription().type(this.saleDetails.description)
        //cy.pause()

        AddVehicleToSaleObj.getDatepicker().click()
       // cy.pause()

        AddVehicleToSaleObj.getCalendar().should('be.visible')
        AddVehicleToSaleObj.getMonth().select(this.saleDetails.saleMonth)
        AddVehicleToSaleObj.getYear().select(this.saleDetails.saleYear)

       // cy.pause()

        AddVehicleToSaleObj.getAllDates().each(($el, index, $list) => {

            if ($el.text() == this.saleDetails.saleDate) {
                AddVehicleToSaleObj.selectDate().eq(index).click({ force: true })

            }


        })

        AddVehicleToSaleObj.getStartHour().type(this.saleDetails.saleStartHour)
        AddVehicleToSaleObj.getStartMinutes().type(this.saleDetails.saleStartMinutes)
        //cy.pause()

        AddVehicleToSaleObj.getSaveCTA().click()
    
        //cy.visit(Cypress.env('url'))
        cy.fixture("Multiple_vehicle").then((data) => {


            data.forEach((vehiclesData) => {

                AddVehicleToSaleObj.getVehicleEntryViaBarcode().click({ force: true })
                cy.url().should('include', 'begin-vehicle-entry')
                cy.wait(2000)
                AddVehicleToSaleObj.getVrm().type(vehiclesData.vehicle_vrm)
                AddVehicleToSaleObj.getBarcode().type(vehiclesData.vehicle_barcode)
                AddVehicleToSaleObj.getSubmitBtn().click()
                AddVehicleToSaleObj.getSubmitBtn().click()
                AddVehicleToSaleObj.getmileage().type(vehiclesData.vehicle_mileage)
                AddVehicleToSaleObj.getSubmitBtn().click()
               // cy.pause()

                AddVehicleToSaleObj.sellerUnknownCTA().click()
                AddVehicleToSaleObj.confirmDetailsCTA().click({ force: true })
                //cy.pause()
                AddVehicleToSaleObj.vehicleEditTab().click()
                AddVehicleToSaleObj.vehicleV5HeldState().select(vehiclesData.vehicle_V5HeldState)
                AddVehicleToSaleObj.vehicleServiceHistory().select(vehiclesData.vehicle_serviceHistory)

                AddVehicleToSaleObj.vehicleVatStatus().select(vehiclesData.vehicle_vatStatus)
                AddVehicleToSaleObj.editTabSaveCTA().click()
                AddVehicleToSaleObj.globalMessage().should('have.text', 'Vehicle saved')
                AddVehicleToSaleObj.getVehicleHistory().click({ force: true })

                AddVehicleToSaleObj.filterVehicle().type(vehiclesData.searchVehicle)

                AddVehicleToSaleObj.searchCTA().click({ force: true })
                AddVehicleToSaleObj.selectSearchedVehicle().contains('div', vehiclesData.searchVehicle).click()

                AddVehicleToSaleObj.vehicleEditTab().click()

                // below code is to add new seller for vehicles
                AddVehicleToSaleObj.addNewSellerCTA().click()
                AddVehicleToSaleObj.sellerName().type(vehiclesData.sellerName)
                AddVehicleToSaleObj.seller_pricing().select(vehiclesData.sellerPricing)
                AddVehicleToSaleObj.sellerAddress().type(vehiclesData.sellerAddress)
                AddVehicleToSaleObj.sellerTown().type(vehiclesData.sellerTown)

                AddVehicleToSaleObj.sellerSaveCTA().then($button => {
                    if ($button.is(':visible')) {
                        //you get here only if button is visible

                        AddVehicleToSaleObj.sellerSaveCTA().click({ force: true })

                    }
                })


                Cypress.config('defaultCommandTimeout', 15000);

                Cypress.config('defaultCommandTimeout', 10000);

                cy.wait(8000)

                AddVehicleToSaleObj.vehicleSummaryTab().click({ force: true })
                AddVehicleToSaleObj.addVehicleToCurrentSaleCTA().click()
                AddVehicleToSaleObj.globalMessage().should('have.text', 'Placed vehicle in sale')




            });
        })


    })
    
})