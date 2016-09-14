/**
 * jQuery Drupal Webform Validation v1.0.0
 *
 * Very configuralable Drupal Webform Validation plugin. 
 * Used in Drupal Sites to validate several fields that are requierd for Form Submition
 * 
 https://github.com/SpecialKcl/jQuery-Age-Gate-Plugin
 *
 * by Kai Hotz AKA SpecialKcl https://github.com/SpecialKcl
 *
 * Useage:
 *   $('form').fromValidate({
        'backgrounColor'        : '#fff', // Field standart background Color
        'textColor'             : '#0074be', // Field standart Text Color
        'requiredTxtFieldMsg'   : 'Mandatory Field', // Mandatory Field Message
        'requiredEmailFieldMsg' : 'Enter a valid E-Mail address', // Valid Email Message
        'onlyTextFields'        : ['#edit-submitted-new-1452694760162','#edit-submitted-new-1452867921594'], // Array of Field ID's that accept only Text input
        'onlyNumberFields'      : ['#edit-submitted-new-1452694760168','#edit-submitted-new-1452867921500'], // Array of Field ID's that accept only Number input
        'reEmailfieldId'        : '#edit-submitted-new-1452868753265', // Secondary email Field ID for email confirmation
        'checkBoxTc'            : '#edit-submitted-new-1453817678761-1', // Id Checkbox for Terms & Conditions
        'tcMessage'             : 'You must accept Terms & Conditions', // T & C check requiered message
        'checkBoxPc'            : '#edit-submitted-new-1453817678761-2', // Id Checkbox for Privacy & Cookies
        'pcMessage'             : 'You must accept Our Privacy Policy', // P & C check requiered message
        'checkBoxOptIn'         : '#edit-submitted-new-1473715615275-1', // Marketing Opt In checkbox ID
        //Only set if you use an only textfield for dateinput
        //Requieres jQueryUI Datepicker
        'onlyDateFieldId'       : '#edit-submitted-new-1473715368426'
        'dayId'                 :'#edit-submitted-new-1453816715685-new-1473774329945',
        'monthId'               :'#edit-submitted-new-1453816715685-new-1473774309612',
        'yearId'                :'#edit-submitted-new-1453816715685-new-1473774343584'
 *   });
 *
 */

(function($)
{

    $.fn.fromValidate = function(settings)
    {

        var that = this,
            config = {
                'backgrounColor'        : '#fff', // Field standart background Color
                'textColor'             : '#0074be', // Field standart Text Color
                'requiredTxtFieldMsg'   : 'Mandatory Field', // Mandatory Field Message
                'requiredEmailFieldMsg' : 'Enter a valid E-Mail address', // Valid Email Message
                'onlyTextFields'        : ['#edit-submitted-new-1452694760162','#edit-submitted-new-1452867921594'], // Array of Field ID's that accept only Text input
                'onlyNumberFields'      : ['#edit-submitted-new-1452694760168','#edit-submitted-new-1452867921500'], // Array of Field ID's that accept only Number input
                'reEmailfieldId'        : '#edit-submitted-new-1452868753265', // Secondary email Field ID for email confirmation
                'checkBoxTc'            : '#edit-submitted-new-1453817678761-1', // Id Checkbox for Terms & Conditions
                'tcMessage'             : 'You must accept Terms & Conditions', // T & C check requiered message
                'checkBoxPc'            : '#edit-submitted-new-1453817678761-2', // Id Checkbox for Privacy & Cookies
                'pcMessage'             : 'You must accept Our Privacy Policy', // P & C check requiered message
                'checkBoxOptIn'         : '#edit-submitted-new-1473715615275-1', // Marketing Opt In checkbox ID
                //Only set if you use an only textfield for dateinput
                //Requieres jQueryUI Datepicker
                'onlyDateFieldId'       : '#edit-submitted-new-1473715368426'
                'dayId'                 :'#edit-submitted-new-1453816715685-new-1473774329945',
                'monthId'               :'#edit-submitted-new-1453816715685-new-1473774309612',
                'yearId'                :'#edit-submitted-new-1453816715685-new-1473774343584',
        };

        if (settings)
        {
            $.extend(config, settings);
        }
 
        // Only Text input
        that.textValidation = function()
        {

            $.each(config.onlyTextFields)function()
            {
                $(this).keyup(function(event)
                {
                    var numericheck = $.isNumeric($(this).val());

                    if(numericheck) 
                    { 
                        $(this).val('').focus(); 
                    }
                });
            } 
        }

        // Only Number input
        that.numericValidation = function()
        {

            $.each(config.onlyNumberFields)function()
            {
                $(this).keyup(function(event)
                {
                    var numericheck = $.isNumeric($(this).val());

                    if(!numericheck) 
                    { 
                        $(this).val('').focus(); 
                    }
                });
            } 
        }

        that.switchDate = function()
        {
            if(config.dayId !="" && config.monthId !="" && config.yearId !="")
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
                $('.webform-component-email input').on('change' ,function(event){
                    $(config.reEmailfieldId).val($(this).val());
                });
            }
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
                        error = true;
                    break;
                    default: 
                        $(this).css({
                            'background-color':'#B8F5B1',
                            'color':'#000'
                        });
                        
                        error = false; 
                }
            });
        }

        that.emailValidation = function()
        {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            
            $('.webform-component-email input.required').each(function(index, el) {

                var emailVal = $(this).val();

                if(!pattern.test(emailVal))
                {
                    $(this).css({
                        'background-color':'#FF9F9F', 
                        'color':'#CC3333'
                    });

                    $(this).val(config.requiredEmailFieldMsg);

                    error = true;
                }
                else
                {
                    $(this).css({
                        'background-color':'#B8F5B1',
                        'color':'#000'
                    });

                    error = false;
                }

            });
        }

        that.selectValidation = function()
        {
            $('.webform-component-select select.required').each(function(index, el) {

                switch($(this).val())
                {
                    case '':
                        $(this).css({
                            'background-color':'#FF9F9F', 
                            'color':'#CC3333'
                        });
                        error = true;
                    break;
                    default: 
                        $(this).css({
                            'background-color':'#B8F5B1',
                            'color':'#000'
                        });
                        
                        error = false; 
                }
            });
        }

        that.checkboxValidation = function()
        {
            if(config.checkBoxTc != ''){
                var checked_tc = $(config.checkBoxTc).is(':checked');

                if(!checked_optin) 
                {
                    alert(config.tcMessage);
                    error = true;
                } 

            }

            if(config.checkBoxPc != ''){
                var checked_pc = $(config.checkBoxPc).is(':checked');

                if(!checked_pc) 
                {
                    alert(config.pcMessage);
                     error = true;
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
                        error = true;
                    break;
                    default: 
                        $(this).css({
                            'background-color':'#B8F5B1',
                            'color':'#000'
                        });
                        
                        error = false; 
                }
            });
        }

        that.emailValidation = function()
        {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            
            $('.webform-component-email input.required').each(function(index, el) {

                var emailVal = $(this).val();

                if(!pattern.test(emailVal))
                {
                    $(this).css({
                        'background-color':'#FF9F9F', 
                        'color':'#CC3333'
                    });

                    $(this).val(config.requiredEmailFieldMsg);

                    error = true;
                }
                else
                {
                    $(this).css({
                        'background-color':'#B8F5B1',
                        'color':'#000'
                    });

                    error = false;
                }

            });
        }
      

        //Form reset
        that.formReset = function()
        {
            $('form')[0].reset();
        }


        //Submit function
        that.formSubmit = function()
        {
            $('from input[type="submit"]').click( function(event) 
            {
                event.preventDefault();

                var error = true;

                that.textFieldValidation();
                that.emailValidation();
                that.selectValidation();
                that.textAreaValidation();
                that.checkboxValidation();

                if( error = false)
                {
                    $('form').submit();
                    that.formReset();
                }

            });
        }

        //Initilaces The Plugin
        that.init = function()
        {
            that.textValidation();
            that.numericValidation();
            that.switchemail();
            that.switchDate();
            that.formSubmit();
        }

        that.init();

        return that;
    };
})(jQuery);

