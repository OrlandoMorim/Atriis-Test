import 'cypress-iframe';
const AtriisPage = require("../integration/examples/atriisPage")

describe('Atriis Make appointment', function() {
    it('Visit the Tiqets home page', function() {
        cy.visit(AtriisPage.homePage, {
        onBeforeLoad(win) {
            cy.stub(win, "open").as("windowOpen");
        }})
    })


    it('The user goes to search field and write "United states attractions" and search for it', function() {
        cy.wait(1000);
        cy.get(AtriisPage.btnCookies).click();
        cy.xpath(AtriisPage.searchButton)
        .type(AtriisPage.unitedStates)
        .type('{enter}');
    })
    
    

    it('The user select "New York" as best place to visit', function() {
        cy.url().should('include',"united-states-attractions");
        cy.xpath(AtriisPage.btnNewYorkAttractions).click();
    })

    it('The user choose the cheapest option from "Hand-picked combinations"' , function() {
        cy.url().should('include', 'new-york-attractions');
        cy.xpath(AtriisPage.btnMuseumModernArt).click();
    })

    it('Check if the page about the museum has the correct informations', function() {
        cy.url().should('include', 'the-museum-of-modern-art-american-museum-of-natural-history');
        cy.xpath(AtriisPage.txtPriceAttraction).should('have.text', '€51.23');
    })

    it('The user click on Read description and check if the museum of art page is with a correct information', function() {
        cy.url().then(url => { 
            cy.xpath(AtriisPage.btnTicketsForMuseumModernArt).invoke("removeAttr", "target").click();
            cy.url().should('include','tickets-for-the-museum-of-modern-art-skip-the-line');
            cy.xpath(AtriisPage.txtPriceAttractions).should('have.text', '€25.44');
            cy.visit(url);

            cy.xpath(AtriisPage.btnAmericanMuseumNaturalHistory).invoke("removeAttr", "target").click();
            cy.url().should('include','tickets-for-american-museum-of-natural-history');
            cy.xpath(AtriisPage.txtPriceAttractions).should('have.text', '€28.49');
            cy.visit(url);
        });

    })

    it('Click on "Book Now" and the page will change to the booking details page', function() {
        cy.xpath(AtriisPage.btnBookNow).click()
        cy.url().should('include','booking_details')
        cy.get(AtriisPage.btnCookies).click();


        cy.xpath(AtriisPage.btnSelectDate).click()
        cy.xpath(AtriisPage.btnSelect25thOctober).click()
        cy.xpath(AtriisPage.btnChooseTimeslot).select('11:00')
        cy.xpath(AtriisPage.btnSelectTickets).click()
        cy.xpath(AtriisPage.btnSelectNumberOfTickets).click()
        cy.xpath(AtriisPage.btnSaveAndContinue).click()

        cy.xpath(AtriisPage.btnSelectDate).click()
        cy.xpath(AtriisPage.btnSelect25thOctober).click()
        cy.xpath(AtriisPage.btnSelectTickets).click()
        cy.xpath(AtriisPage.btnSelectNumberOfTickets).click()
        cy.xpath(AtriisPage.btnSaveAndContinue).click()

        cy.xpath(AtriisPage.btnGoToNextStep).click()

        cy.url().should('include','personal_details')

        cy.xpath(AtriisPage.inpCustomerFirstName).type("Random");
        cy.xpath(AtriisPage.inpCustomerLastName).type("Random");
        cy.xpath(AtriisPage.inpCustomerEmail).type("random@random.org");
        cy.xpath(AtriisPage.btnChooseCountryPhoneNumber).select('Portugal (+351)').should('have.value','+351-PT');
        cy.xpath(AtriisPage.inpPhoneNumber).type("919191919")

        cy.xpath(AtriisPage.btnConfirmBooking).click();
        cy.url().should('include','basket_payment');

        
    })

    it('Choose the credit card option', function() {
        cy.xpath(AtriisPage.btnCreditCard).click();
    })

    it('Fill in the required fields correctly', function() {
        cy.xpath(AtriisPage.inpNameOnCard).type("Random");

        cy.iframe(AtriisPage.iframeCardNumber).find(AtriisPage.inpCardNumber).type("2134 1241 2412 4123 12")

        cy.iframe(AtriisPage.iframeCardExpiryDate).find(AtriisPage.inpCardExpiryDate).type("0125")

        cy.iframe(AtriisPage.iframeCardSecurityCode).find(AtriisPage.inpCardSecurityCode).type("123")
    })

    it('Click on "Pay"', function() {
        cy.xpath(AtriisPage.btnPay).click()
    })

    it('Verify that some type of file was issued or that the ticket was not paid due to lack of credit or fake information', function() {
        cy.xpath(AtriisPage.txtAlertMessage).should("have.text", "Your payment has been refused. Please try again with a different payment method.")
    })

})