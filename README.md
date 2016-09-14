# jQuery-Drupal-Webform-Validation-Plugin


 jQuery Drupal Webform Validation v1.0.0


 jQuery Drupal Webform Validation v1.0.0
 
  Very configuralable Drupal Webform Validation plugin. 
  Used in Drupal Sites to validate several fields that are requierd for Form Submition
  
 https://github.com/SpecialKcl/jQuery-Age-Gate-Plugin
 
  by Kai Hotz AKA SpecialKcl https://github.com/SpecialKcl
 
  Useage:
    $('form').fromValidate({
       'backgroundColor'       : '#fff', // Field standart background Color
       'textColor'             : '#000', // Field standart Text Color
       'requiredTxtFieldMsg'   : 'Mandatory Field', // Mandatory Field Message
       'requiredEmailFieldMsg' : 'Enter a valid E-Mail address', // Valid Email Message
       'onlyTextFields'        : ['#edit-submitted-new-1452694760162','#edit-submitted-new-1452867921594'], // Array of Field ID's that accept only Text input
       'onlyNumberFields'      : ['#edit-submitted-new-1452694760168','#edit-submitted-new-1452867921500'], // Array of Field ID's that accept only Number input
       'reEmailfieldId'        : '#edit-submitted-new-1452868753265', // Hidden email Field ID for email confirmation
       'checkBoxTc'            : '#edit-submitted-new-1453817678761-1', // Id Checkbox for Terms & Conditions
       'tcMessage'             : 'You must accept Terms & Conditions', // T & C check requiered message
       'checkBoxPc'            : '#edit-submitted-new-1453817678761-2', // Id Checkbox for Privacy & Cookies
       'pcMessage'             : 'You must accept Our Privacy Policy', // P & C check requiered message
       'checkBoxOptIn'         : '#edit-submitted-new-1473715615275-1', // Marketing Opt In checkbox ID
       //Only set if you use an only textfield for dateinput
       //Requieres jQueryUI Datepicker
       'onlyDateFieldId'       : '#edit-submitted-new-1473715368426', // Date of Birth Text Filed ID
       'dayId'                 : '#edit-submitted-new-1453816715685-new-1473774329945', // Hidden Day field ID
       'monthId'               : '#edit-submitted-new-1453816715685-new-1473774309612', // Hidden Month field ID
       'yearId'                : '#edit-submitted-new-1453816715685-new-1473774343584' // Hidden Year field ID
    });
 
 

Very configuralable Aage verification "Age Gate or agegate" plugin. 
Required by some content providers for mature content.
Uses Cookies and localstorage.
[Webform Validate](https://github.com/SpecialKcl/jQuery-Drupal-Webform-Validation-Plugin)

 by Kai Hotz AKA [SpecialKcl](https://github.com/SpecialKcl) 

## How to Use:

### 1. Load jQuery and include Webform Validation Plugin plugin files

To use Webform Validation Plugin, you’ll need to make sure both the Webform Validation Plugin and jQuery 1.9 or higher scripts are included.

```htnml
<!--  jQuery 1.9+  -->
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
 
<!-- Include js plugin -->
<script src="js/validate.js"></script>
```


### 2. Call the plugin

Now call the Webform Validation initializer function and your Webform Validation is ready.

```javascript
jQuery(document).ready(function($){

   $('form').fromValidate();

});
```

## Customizing

### 1. Options

All of the options below are available to customize Webform Validation Plugin.

| Variable               | Default                                                               | Type   | Description                                     	|
| ---------------------- |:---------------------------------------------------------------------:|:------:| ----------------------------------------------------|
| `backgroundColor`      | '#fff'                                                                | string | Field standart background Color                 	|
| `textColor`            | '#000'					                                             | string | Field standart Text Color                       	|
| `requiredTxtFieldMsg`  | 'Mandatory Field'                           							 | string | Mandatory Field Message 							|
| `requiredEmailFieldMsg`| 'Enter a valid E-Mail address'                                        | string | Valid Email Message           						|
| `onlyTextFields`       | ''                         			                                 | array  | Array of Field ID's that accept only Text input 	|
| `onlyNumberFields`     | ''               			                                         | array  | Array of Field ID's that accept only Number input   |
| `reEmailfieldId`       | ''                                						             | string | Hidden email Field ID for email confirmation       	|
| `checkBoxTc`           | ''                       						                     | string | Id of Checkbox for Terms & Conditions     	    	|
| `tcMessage`            | 'You must accept Terms & Conditions'                                  | string | Terms & Conditions check requiered message          |
| `checkBoxPc`           | ''                     											     | string | Id of Checkbox for Pricacy & Cookie          		|
| `pcMessage`            | 'You must accept Our Privacy Policy'                                  | string | Pricacy & Cookie check requiered message 			|
| `checkBoxOptIn`        | ''                                                                    | string | Id of Checkbox for Marketing OptIn  		       	|
| `onlyDateFieldId`      | ''                                                                  	 | string | Date of Birth Text Filed ID                 	 	|
| `dayId`     			 | ''                                                                  	 | string | Hidden Day field ID               					|
| `monthId`      		 | ''                                                               	 | string | Hidden Month field ID               			 	|
| `yearId`               | ''                                             					     | string | Hidden Year field ID  				               	|
 

### 2. Defaults

Age Gate Plugin default settings

```javascript
$('form').fromValidate({
    'backgroundColor'       : '#fff', 
    'textColor'             : '#000', 
    'requiredTxtFieldMsg'   : 'Mandatory Field', 
    'requiredEmailFieldMsg' : 'Enter a valid E-Mail address',
    'onlyTextFields'        : [], 
    'onlyNumberFields'      : [], 
    'reEmailfieldId'        : '', 
    'checkBoxTc'            : '', 
    'tcMessage'             : 'You must accept Terms & Conditions', 
    'checkBoxPc'            : '', 
    'pcMessage'             : 'You must accept Our Privacy Policy', 
    'checkBoxOptIn'         : '', 
    //Only set if you use an only textfield for dateinput
    //Requieres jQueryUI Datepicker
    'onlyDateFieldId'       : '',
    'dayId'                 : '', 
    'monthId'               : '', 
    'yearId'                : '', 
});
```

