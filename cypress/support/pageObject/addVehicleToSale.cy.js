class AddVehicleToSale {

    getAddSaleBtn() {
        return cy.contains('Add Sale')
    }

    getSaleDescription() {
        return cy.get('input[name="description:input"]')
    }

    getHall() {
        return cy.get('select[name="hall:input"]')
    }

    getSaveCTA() {
        return cy.get('input[name="p::submit"]')
    }

    getDatepicker() {
        return cy.get('input[name="start:date"]')
    }


    getMonth() {
        return cy.get('select[class="ui-datepicker-month"]')
    }

    getYear() {
        return cy.get('select[class="ui-datepicker-year"]')
    }

    getCalendar() {
        return cy.get('div[id="ui-datepicker-div"]')
    }
    getAllDates() {
        return cy.get('table.ui-datepicker-calendar a.ui-state-default')
    }

    getCalendarNextbtn() {
        return cy.get('span[class="ui-icon ui-icon-circle-triangle-e"]')
    }
    getCalendarBackbtn() {
        return cy.get('span[class="ui-icon ui-icon-circle-triangle-w"]')
    }

    getStartHour() {
        return cy.get('input[name="start:hours"]')
    }

    getStartMinutes() {
        return cy.get('input[name="start:minutes"]')
    }


    selectDate() {
        return cy.get('tr td[data-handler="selectDay"]')
    }
    // Locator fo adding vehicle in AMS

    getVehicleEntryViaBarcode() {

        return cy.contains('Vehicle Entry via barcode')
    }

    getVrm() {

        return cy.get('input[name="registration"]')
    }

    getBarcode() {
        return cy.get('input[name="barcode"]')
    }

    getSubmitBtn() {
        return cy.get('input[type="submit"]')
    }

    getmileage() {
        return cy.get("input[name='mileage']")
    }

    sellerUnknownCTA() {
        return cy.get('input[value="Seller Unknown"]')
    }

    confirmDetailsCTA() {
        return cy.get('a[role="button"]').contains('Confirm')
    }

    vehicleEditTab() {
        return cy.get('.tab1')
    }


    vehicleSaleTab() {
        return cy.get('li[class="tab3"]')
    }

    vehicleV5HeldState() {
        return cy.get('select[name="v5HeldState:input"]')
    }

    vehicleServiceHistory() {
        return cy.get('select[name="serviceHistory:input"]')
    }

    vehicleVatStatus() {
        return cy.get('select[name="vatStatus:input"]')
    }

    editTabSaveCTA() {
        return cy.get('input[name="save"]')
    }

    globalMessage() {
        return cy.get('.feedbackPanelINFO > span')
    }

    getVehicleHistory() {
        return cy.contains('Vehicle History')
    }

    filterVehicle() {
        return cy.get('input[name="regfilter"]')
    }


    searchCTA() {
        return cy.get('a[class="span-6 ui-button ui-corner-all ui-widget"]').contains('Search')
    }


    selectSearchedVehicle() {
        return cy.get('td[class="span-2"]')
    }

    vehicleSummaryTab() {
        return cy.get('.tab0 > a > span')
    }

    changeSellerCTA() {
        return cy.get('a[class="ui-button ui-corner-all ui-widget"]').contains('Change')
    }

    addNewSellerCTA() {
        return cy.get('[class="ui-button ui-corner-all ui-widget"]').contains('Add a Seller')
    }


    sellerName() {
        return cy.get('input[name="name:input"]')
    }


    seller_pricing() {
        return cy.get('select[name="sellerPricing:input"]')
    }

    sellerAddress() {
        return cy.get('input[name="primaryContact:streetOne:input"]')
    }

    sellerTown() {
        return cy.get('input[name="primaryContact:town:input"]')
    }

    sellerSaveCTA() {

        return cy.get('div[id="cboxWrapper"] form> center').find('input[value="Save"]')

        //return cy.get('form[id="edit9f"]').find('center input[class="save ui-button ui-corner-all ui-widget"]').contains('Save')

        // return cy.get('div[id="selleradde8"] div').find('input[class="save ui-button ui-corner-all ui-widget"]')

        //return cy.get('div[id="cboxOverlay"]').find('input[class="save ui-button ui-corner-all ui-widget"]:visible')
    }
    /* addSellerCTA()
    {
        return cy.get('a[class="ui-button ui-corner-all ui-widget"]').contains('Change')
    } */

    searchSellerTextBox() {
        return cy.get('input[name="search"]')
    }

    checkSelectedSeller() {
        return cy.get('tbody tr [class="span-3"]')
    }

    selectSellerCTA() {
        // return cy.get('tbody > tr:nth-child(1) > td:nth-child(3)').contains('span', 'select')
        //return cy.get('tbody > tr:nth-child(1) > td:nth-child(3) > div > a > span').contains('select')

        return cy.get('#cboxLoadedContent').find('tbody > tr:nth-child(1) > td:nth-child(3) > div > a > span').contains('select')
    }

    addVehicleToCurrentSaleCTA() {
        return cy.get('a[class="ui-button ui-corner-all ui-widget"]').contains('Add to current Sale')
    }

    checkVehiclePlacedSale() {
        return cy.get(':nth-child(1) > div > a > span')
    }

    checkListOfVehiclesInSale() {
        return cy.get('tbody> tr> td > div')
    }
    Sales_vehicleTab() {
        return cy.get('li[class="tab2"]').contains('Vehicles')
    }


    select_link_forSeller() {
        return cy.get('tbody tr td:nth-child(3)').contains('select')
    }


}
export default AddVehicleToSale