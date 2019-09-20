$(document).ready(function() {
    var companyCheckbox = $('#form_company_checkbox');
    var companyFormDiv = $('.form__company');
    var rightCard = $('.form__card--right');

    var companyInputsWrapper = document.querySelectorAll('#companyInputsWrapper input');

    companyCheckbox.prop('checked', false);
    
    companyCheckbox.click(function() {
        switch (companyCheckbox.prop('checked')) {
            case true:
                companyFormDiv.fadeIn();
                var marginTopRigthCard = rightCard[0].scrollHeight / 4;
                rightCard.animate({'margin-top': marginTopRigthCard}, 500);

                for(i = 0; i < companyInputsWrapper.length; ++i) {
                    companyInputsWrapper[i].required = true;
                }
                break;
            case false:
                companyFormDiv.fadeOut();
                rightCard.animate({'margin-top': ''}, 500);

                for(i = 0; i < companyInputsWrapper.length; ++i) {
                    companyInputsWrapper[i].required = false;
                }
                break;
            default:
                return;
        } 
    });
    
    // filtry inputów
    
    var postCodeVal = $('#postCode');
    
    postCodeVal.blur(function() {
        if (!$(this).val().match(/^\d\d-\d\d\d$/)) {
            console.log("Niepoprawny kod pocztowy.");
        }
    });

    // formularz

    var formRegisterProgram = $('#formRegisterProgram');
    var subButton = $('#submitBtn')[0];
    var formStatus = $('#formStatus')[0];
    
    console.log(formStatus);
    formRegisterProgram.on('submit', function(e) {
        e.preventDefault();
        formStatus.innerHTML = "Wysyłanie...";
        subButton.disabled = true;

        var name = $('#name').val();
        var lastname = $('#lastname').val();
        var email = $('#email').val();
        var telNumber = $('#telNumber').val();

        var formdata = new FormData();
        formdata.append("name", name);
        formdata.append("lastname", lastname);
        formdata.append("email", email);
        formdata.append("tel", telNumber);

        if (companyCheckbox.prop('checked') == true) {
            var companyName = $('#companyName').val();
            var companyAddress = $('#companyAddress').val();
            var postCode = $('#postCode').val();
            var city = $('#city').val();
            var nip = $('#nip').val();
            
            formdata.append("companyName", companyName);
            formdata.append("companyAddress", companyAddress);
            formdata.append("postCode", postCode);
            formdata.append("city", city);
            formdata.append("nip", nip);
        }

        var xhr = new XMLHttpRequest();
        xhr.open("POST", '../formSubmit.php');
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                if (xhr.responseText == "Formularz został wysłany. Skontaktujemy się w najbliższym czasie.") {
                    formStatus.innerHTML = xhr.responseText;
                    subButton.disabled = false;
                } else {
                    formStatus.innerHTML = xhr.responseText;
                    subButton.disabled = false;
                }
            }
        }
        xhr.send(formdata);
    });
});
