$(document).ready(function() {
    var companyCheckbox = $('#form_company_checkbox');
    var companyFormDiv = $('.form__company');
    var rightCard = $('.form__card--right');

    companyCheckbox.prop('checked', false);
    
    companyCheckbox.click(function() {
        switch (companyCheckbox.prop('checked')) {
            case true:
                companyFormDiv.fadeIn();
                var marginTopRigthCard = rightCard[0].scrollHeight / 4;
                rightCard.animate({'margin-top': marginTopRigthCard}, 500);
                break;
            case false:
                companyFormDiv.fadeOut();
                rightCard.animate({'margin-top': ''}, 500);
                break;
            default:
                return;
        } 
    });
    
    // filtry inputów
    
    var postCode = $('#postCode');
    
    postCode.blur(function() {
        if (!$(this).val().match(/^\d\d-\d\d\d$/)) {
            console.log("Niepoprawny kod pocztowy.");
        }
    });
});
