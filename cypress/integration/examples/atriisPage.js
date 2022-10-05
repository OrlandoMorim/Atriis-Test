class AtriisPage {
    homePage = 'https://www.tiqets.com/en/';
    random = 'Random';
    btnCookies = '#onetrust-accept-btn-handler';
    searchButton = "//input[@class='SearchAutocomplete SearchForm__input']";
    unitedStates = "United States";
    btnNewYorkAttractions = "//a[@data-track='click' and @href='/en/new-york-attractions-c260932/']";
    btnMuseumModernArt = "//a[@data-track='click' and @href='/en/the-museum-of-modern-art-american-museum-of-natural-history-b9636/']";
    txtPriceAttraction = "//span[@class='Price block text-bold text-32 text-red600']";
    btnTicketsForMuseumModernArt = "//a[@data-track='click' and @href='/en/new-york-attractions-c260932/tickets-for-the-museum-of-modern-art-skip-the-line-p974081/']";
    txtPriceAttractions = "//span[@class='text-24 text-bold text-ink500']";
    btnAmericanMuseumNaturalHistory = "//a[@data-track='click' and @href='/en/new-york-attractions-c260932/tickets-for-american-museum-of-natural-history-p974096/']";
    btnBookNow = "(//a[contains(text(),'Book now')])[1]";
    btnSelectDate = "(//button[span[text()='Select a date']])[1]";
    btnSelect25thOctober = "//button[@aria-label='25th October (Tuesday)']";
    btnChooseTimeslot = "//select[option[text()='Choose a timeslot']]";
    btnSelectTickets = "(//button[span[text()='Select your tickets']])[1]";
    btnSelectNumberOfTickets = "(//div[contains(@class,'QuantitySelector')])[1]//button[2]"
    btnSaveAndContinue = "//button[text()='Save and continue']";
    btnGoToNextStep = "//button[text()='Go to the next step']";
    inpCustomerFirstName = "//input[@name='customerFirstName']";
    inpCustomerLastName = "//input[@name='customerLastName']";
    inpCustomerEmail = "//input[@name='customerEmail']";
    inpPhoneNumber = "//input[@name='phone-number']";
    btnConfirmBooking = "//button[text()='Confirm your booking']";
    btnCreditCard = "(//input[@type='radio'])[1]";
    inpNameOnCard = "//label[span[text()='Name on card']]//input";
    iframeCardNumber = 'iframe[title="Iframe for secured card number"]';
    inpCardNumber = 'input[id*="encryptedCardNumber"]';
    iframeCardExpiryDate = 'iframe[title="Iframe for secured card expiry date"]';
    inpCardExpiryDate = "input[aria-label='Expiry date field']";
    iframeCardSecurityCode = 'iframe[title="Iframe for secured card security code"]';
    inpCardSecurityCode = "input[aria-label='Security code field']";
    btnPay = "//button[contains(text(),'Pay')]";
    txtAlertMessage = "//div[@role='alert']//span/text()";
    btnChooseCountryPhoneNumber = "//div[label[text()='Phone country code']]//select";
}

module.exports = new AtriisPage()