# jQuery-Drupal-Webform-Validation-Plugin

 jQuery Drupal Webform Validation v1.0.0

Very configuralable Drupal Webform Validation plugin.
Used in Drupal Sites to validate several fields that are requierd for Form Submition

[Webform Validate](https://github.com/KaiHotz/jQuery-Drupal-Webform-Validation-Plugin)

 by [Kai Hotz](https://github.com/KaiHotz)

## How to Use:

### 1. Load jQuery and include Webform Validation Plugin plugin files

To use Webform Validation Plugin, you’ll need to make sure both the Webform Validation Plugin and jQuery 1.9 or higher scripts are included.

```html
<!--  jQuery 1.9+  -->
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>

<!-- Include js plugin -->
<script src="js/jquery-webform-validate.js"></script>
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
| `successURL`  		 | 'thankYou'                           								 | string | Redirect URL for Thank You Page						|
| `requiredTxtFieldMsg`  | 'Mandatory Field'                           							 | string | Mandatory Field Message 							|
| `requiredEmailFieldMsg`| 'Enter a valid E-Mail address'                                        | string | Valid Email Message           						|
| `onlyTextFields`       | ''                         			                                 | array  | Array of Field ID's that accept only Text input 	|
| `onlyNumberFields`     | []               			                                         | array  | Array of Field ID's that accept only Number input   |
| `reEmailfieldId`       | []                                						             | string | Hidden email Field ID for email confirmation       	|
| `checkBoxTc`           | ''                       						                     | string | Id of Checkbox for Terms & Conditions     	    	|
| `tcMessage`            | 'You must accept Terms & Conditions'                                  | string | Terms & Conditions check requiered message          |
| `checkBoxPc`           | ''                     											     | string | Id of Checkbox for Pricacy & Cookie          		|
| `pcMessage`            | 'You must accept Our Privacy Policy'                                  | string | Pricacy & Cookie check requiered message 			|
| `checkBoxOptIn`        | ''                                                                    | string | Id of Checkbox for Marketing OptIn  		       	|
| `dayId`                | ''                                                                    | string | Day text field ID                                   |
| `monthId`              | ''                                                                    | string | Month text field ID                                 |
| `yearId`               | ''                                                                    | string | Year text field ID                                  |
| `onlyDateFieldId`      | ''                                                                  	 | string | Date of Birth Text Filed ID                 	 	|
| `urlFw`                | ''                                                                    | string | Foneworx URL                                        |
| `apiKeyFw`             | ''                                                                    | string | FoneWorx API Key                                    |
| `firstNameFiledId`     | ''                                                                    | string | ID of the First Name Field in your Form             |
| `lastNameFieldId`      | ''                                                                    | string | ID of the Last or Surename Field in your Form       |
| `mobilePhoneFieldId`   | ''                                                                    | string | ID of the Mobile or Cell Phone number in your Form  |

### 2. Defaults

Age Gate Plugin default settings

```javascript

$('form').fromValidate({
    'successURL'            : 'thankYou',
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
    'dayId'                 : '',
    'monthId'               : '',
    'yearId'                : '',
    //Only set if you use an only textfield for dateinput and three hidden fields for DD, MM and Year Normaly used for SalesForce or Foneworx
    //Requieres jQueryUI Datepicker
    'onlyDateFieldId'       : '',
    //Foneworx, Only use if Form Data has to be send to FoneWorx
    'urlFw'                 : '',
    'apiKeyFw'              : '',
    'firstNameFiledId'      : '',
    'lastNameFieldId'       : '',
    'mobilePhoneFieldId'    : '',

});

```

