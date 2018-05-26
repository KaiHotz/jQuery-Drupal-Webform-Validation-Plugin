/**
 * jQuery Drupal Webform Validation v1.0.0
 *
 * Very configuralable Drupal Webform Validation plugin.
 * Used in Drupal Sites to validate several fields that are requierd for Form Submition
 *
 * https://github.com/KaiHotz/jQuery-Drupal-Webform-Validation-Plugin
 *
 * by Kai Hotz https://github.com/KaiHotz
 *
 * Useage:
 *   $('form').fromValidate({
 *       'successURL'            : 'thankYou', // Redirect URL for Thank You Page
 *       'requiredTxtFieldMsg'   : 'Mandatory Field', // Mandatory Field Message
 *       'requiredEmailFieldMsg' : 'Enter a valid E-Mail address', // Valid Email Message
 *       'onlyTextFields'        : ['#edit-submitted-new-1452694760162','#edit-submitted-new-1452867921594'], // Array of Field ID's that accept only Text input
 *       'onlyNumberFields'      : ['#edit-submitted-new-1452694760168','#edit-submitted-new-1452867921500'], // Array of Field ID's that accept only Number input
 *       'reEmailfieldId'        : '#edit-submitted-new-1452868753265', // Hidden email Field ID for email confirmation
 *       'checkBoxTc'            : '#edit-submitted-new-1453817678761-1', // Id Checkbox for Terms & Conditions
 *       'tcMessage'             : 'You must accept Terms & Conditions', // T & C check requiered message
 *       'checkBoxPc'            : '#edit-submitted-new-1453817678761-2', // Id Checkbox for Privacy & Cookies
 *       'pcMessage'             : 'You must accept Our Privacy Policy', // P & C check requiered message
 *       'checkBoxOptIn'         : '#edit-submitted-new-1473715615275-1', // Marketing Opt In checkbox ID
 *       'dayId'                 : '#edit-submitted-new-1453816715685-new-1473774329945', // Day text field ID
 *       'monthId'               : '#edit-submitted-new-1453816715685-new-1473774309612', // Month text field ID
 *       'yearId'                : '#edit-submitted-new-1453816715685-new-1473774343584' //  Year text field ID
 *       //Only set if you use an only textfield for dateinput and three hidden fields for DD, MM and Year Normaly used for SalesForce or Foneworx
 *       //Requieres jQueryUI Datepicker
 *       'onlyDateFieldId'       : '#edit-submitted-new-1473715368426', // Date of Birth Text Filed ID
 *       //Foneworx, Only use if Form Data has to be send to FoneWorx
 *       'urlFw'                 : '', // Foneworx ULR
 *       'apiKeyFw'              : '', // FoneWorx API Key
 *       'firstNameFiledId'      : '', // ID of the First Name Field in your Form
 *       'lastNameFieldId'       : '', // ID of the Last or Surename Field in your Form
 *       'mobilePhoneFieldId'    : '', // ID of the Mobile or Cell Phone number in your Form
 *   });
 *
 */

(function($)
{
    $.fn.fromValidate = function(settings)
    {

        var that = this,
            config = {
                'successURL'            : 'thankYou', // Redirect URL for Thank You Page
                'requiredTxtFieldMsg'   : 'Mandatory Field', // Mandatory Field Message
                'requiredEmailFieldMsg' : 'Enter a valid E-Mail address', // Valid Email Message
                'onlyTextFields'        : [], // Array of Field ID's that accept only Text input
                'onlyNumberFields'      : [], // Array of Field ID's that accept only Number input
                'reEmailfieldId'        : '', // Hidden email Field ID for email confirmation
                'checkBoxTc'            : '', // Id Checkbox for Terms & Conditions
                'tcMessage'             : 'You must accept Terms & Conditions', // T & C check requiered message
                'checkBoxPc'            : '', // Id Checkbox for Privacy & Cookies
                'pcMessage'             : 'You must accept Our Privacy Policy', // P & C check requiered message
                'checkBoxOptIn'         : '', // Marketing Opt In checkbox ID
                'dayId'                 : '', // Day text field ID
                'monthId'               : '', // Month text field ID
                'yearId'                : '', // Year text field ID
                //Only set if you use an only textfield for dateinput and three hidden fields for DD, MM and Year Normaly used for SalesForce or Foneworx
                //Requieres jQueryUI Datepicker
                'onlyDateFieldId'       : '', // Date of Birth Text Filed ID
                //Foneworx, Only use if Form Data has to be send to FoneWorx
                'urlFw'                 : '', // Foneworx ULR
                'apiKeyFw'              : '', // FoneWorx API Key
                'firstNameFiledId'      : '', // ID of the First Name Field in your Form
                'lastNameFieldId'       : '', // ID of the Last or Surename Field in your Form
                'mobilePhoneFieldId'    : '', // ID of the Mobile or Cell Phone number in your Form
        };

        if (settings)
        {
            $.extend(config, settings);
        }

        var error = [];

        // Only Text input
        that.textValidation = function()
        {
            if (config.onlyTextFields !='') {
                $.each(config.onlyTextFields, function(index, value)
                {
                    $(value).keyup(function(event)
                    {
                        var numericheck = $.isNumeric($(this).val());

                        if(numericheck)
                        {
                            $(event.currentTarget).val('').focus();
                        }
                    });
                });
            }
        }

        // Only Number input
        that.numericValidation = function()
        {
            if (config.onlyNumberFields !='') {
                $.each(config.onlyNumberFields,function(index, value)
                {
                    $(value).keyup(function(event)
                    {
                        var numericheck = $.isNumeric($(this).val());

                        if(!numericheck)
                        {
                            $(event.currentTarget).val('').focus();
                        }
                    });
                });
            }
        }

        that.switchDate = function()
        {
            if(config.dayId !="" && config.monthId !="" && config.yearId !="" && config.onlyDateFieldId != "")
            {
                $(config.onlyDateFieldId).datepicker({ //jQueryUi Datepicker
                    dateFormat:"dd/mm/yy",
                    changeMonth: true,
                    changeYear: true,
                    yearRange: '-100:+0',
                });

                $(config.onlyDateFieldId).on('change',function() {

                    var newdob = $(this).val().split("/");

                    $(config.dayId).val(newdob[0]);// DD
                    $(config.monthId).val(newdob[1]);// MM
                    $(config.yearId).val(newdob[2]);// YYYYY

                 });
            }
        }

        that.switchEmail = function()
        {
            if(config.reEmailfieldId != '')
            {
                $('.webform-component-email input').on('blur' ,function(event){
                    $(config.reEmailfieldId).val($(this).val());
                });
            }
        }

        that.clerarField = function()
        {
            $('.webform-component-textfield input').each(function(index, el) {

                var bgColor = $(this).css('background-color'),
                    color   = $(this).css('color');

                $(this).focus(function(event) {
                    $(this).css({'background-color': bgColor,'color': color});
                    $(this).val('');
                });
            });

            $('.webform-component-email input').each(function(index, el) {

                var bgColor = $(this).css('background-color'),
                    color   = $(this).css('color');

                $(this).focus(function(event) {
                    $(this).css({'background-color': bgColor,'color': color});
                    $(this).val('');
                });
            });

            $('.webform-component-textarea .form-textarea-wrapper textarea').focus(function(event) {

                var bgColor = $(this).css('background-color'),
                    color   = $(this).css('color');

                $(event.currentTarget).css({'background-color': bgColor,'color': color});
                $(event.currentTarget).val('');
            });
        }

        that.textFieldValidation = function()
        {
            $('.webform-component-textfield input.required').each(function(index, el) {

                switch($(this).val())
                {
                    case '':
                    case config.requiredTxtFieldMsg :
                    case $(this).attr('placeholder'):
                        $(this).css({
                            'background-color':'#FF9F9F',
                            'color':'#CC3333'
                        });
                        $(this).val(config.requiredTxtFieldMsg);

                        error.push(true);
                    break;
                    default:
                        $(this).css({
                            'background-color':'#B8F5B1',
                            'color':'#000'
                        });
                }
            });
        }

        that.emailValidation = function()
        {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);

            $('.webform-component-email input').each(function(index, el) {

                var emailVal = $(this).val();

                if(!pattern.test(emailVal))
                {
                    $(this).css({
                        'background-color':'#FF9F9F',
                        'color':'#CC3333'
                    });

                    $(this).val(config.requiredEmailFieldMsg);

                    error.push(true);
                }
                else
                {
                    $(this).css({
                        'background-color':'#B8F5B1',
                        'color':'#000'
                    });
                }

            });
        }

        that.selectValidation = function()
        {
            $('.webform-component-select select.required').each(function(index, el) {

                switch($(this).val())
                {
                    case '':
                    case 'Undefined':
                    case undefined:
                        $(this).css({
                            'background-color':'#FF9F9F',
                            'color':'#CC3333'
                        });
                        config.error.push(true);
                    break;
                    default:
                        $(this).css({
                            'background-color':'#B8F5B1',
                            'color':'#000'
                        });
                }
            });
        }

        that.checkboxValidation = function()
        {
            if(config.checkBoxTc != ''){
                var checked_tc = $(config.checkBoxTc).is(':checked');

                if(!checked_tc)
                {
                    alert(config.tcMessage);

                    error.push(true);
                }

            }

            if(config.checkBoxPc != ''){
                var checked_pc = $(config.checkBoxPc).is(':checked');

                if(!checked_pc)
                {
                    alert(config.pcMessage);

                    error.push(true);
                }

            }

        }

        that.textAreaValidation = function()
        {
            $('.webform-component-textarea .form-textarea-wrapper textarea.required').each(function(index, el) {

                switch($(this).val())
                {
                    case '':
                    case config.requiredTxtFieldMsg :
                    case $(this).attr('placeholder'):
                        $(this).css({
                            'background-color':'#FF9F9F',
                            'color':'#CC3333'
                        });
                        $(this).val(config.requiredTxtFieldMsg);
                        error.push(true);
                    break;
                    default:
                        $(this).css({
                            'background-color':'#B8F5B1',
                            'color':'#000'
                        });

                }
            });
        }

        that.dateValidate = function()
        {
            if(config.onlyDateFieldId == "" && config.dayId !="" && config.montId !="" && config.yearId !="")
            {
                //Day date validation limit day no more than 31
                $(config.dayId).keyup(function(event)
                {

                    if($(this).val() > 31 || !$.isNumeric($(this).val())){
                        $(this).val('').focus().css({
                            'background-color':'#FF9F9F',
                            'color':'#CC3333'
                        });;
                        return false;
                    }
                    else if($(this).val() <= 31 && $(this).val() !="" )
                    {
                        $(this).css({
                            'background-color':'#B8F5B1',
                            'color':'#000'
                        });
                    }
                });

                //Month date validation limit month no more than 12
                $(config.monthId).keyup(function(event)
                {
                    if($(this).val() > 12 || !$.isNumeric($(this).val())) {
                        $(this).val('').focus().css({
                            'background-color':'#FF9F9F',
                            'color':'#CC3333'
                        });;
                        return false;
                    }
                    else if($(this).val() <= 12 && $(this).val() !="")
                    {
                        $(this).css({
                            'background-color':'#B8F5B1',
                            'color':'#000'
                        });
                    }

                });

                //Year validation limit year no more than current
                $(config.yearId).keyup(function(event)
                {
                    var current = new Date().getFullYear();

                    if($(this).val() > current || !$.isNumeric($(this).val())) {
                        $(this).val('').focus().css({
                            'background-color':'#FF9F9F',
                            'color':'#CC3333'
                        });;
                        return false;
                    }
                    else if($(this).val() <= current && $(this).val() !="")
                    {
                        $(this).css({
                            'background-color':'#B8F5B1',
                            'color':'#000'
                        });
                    }

                });
            }
        }

        //Form reset
        that.formReset = function()
        {
            that[0].reset();
        }


        //Submit function
        that.formSubmit = function()
        {
            $('form.webform-client-form input[type="submit"]').click( function(event)
            {
                event.preventDefault();

                error =[];

                that.textFieldValidation();
                that.emailValidation();
                that.selectValidation();
                that.textAreaValidation();
                that.checkboxValidation();

                if(error == "")
                {
                    if(config.urlFw != '' && config.apiKeyFw != '')
                    {
                        var params = {
                            "api_key": config.apiKeyFw,
                            "first_name": $(config.firstNameFiledId).val(),
                            "last_name": $(config.lastNameFieldId).val(),
                            "dob":$(config.dayId).val()+"-"+$(config.monthId).val()+"-"+$(config.yearId).val(),
                            "email_address": $(config.reEmailfieldId).val(),
                            "cell_number": $(config.mobilePhoneFieldId).val().replace(/ /g,''),
                        };

                        $.ajax({
                            url : config.urlFw,
                            type: "POST",
                            data: JSON.stringify(params),
                            dataType: 'json',
                            async: false,
                            success: function (data) {
                                that.formReset();
                                $(location).attr('href', config.successURL);
                            }
                        });

                    }
                    else
                    {
                        if(config.successURL != "")
                        {
                            $.ajax({
                                type: "POST",
                                url: $('form.webform-client-form').attr('action'),
                                data: $('form.webform-client-form').serialize(), // serializesthe form's elements.
                                success: function (data) {
                                    that.formReset();
                                    $(location).attr('href', config.successURL);
                                }
                            });
                        }
                        else
                        {
                            that.submit();
                        }
                    }
                }

            });
        }

        //Initilaces The Plugin
        that.init = function()
        {
            that.formReset();
            that.textValidation();
            that.numericValidation();
            that.switchEmail();
            that.switchDate();
            that.dateValidate();
            that.clerarField();
            that.formSubmit();
        }

        that.init();

        return that;
    };
})(jQuery);
