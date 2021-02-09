This is a readme.txt file for the Assessemnt1
Graduate Diploma in Information Technology Level 7
@Aspire2 International in Christchurch

created by:

-name-  Anton Illi
-id-    YIB00001T3
-email- yib00001t3@aspire2student.ac.nz

Current read me file contains discription of functions created
and used during development of the web application, that are
based on JavaScript and jQuery.

Files used:
/index.html
/logo.png
/logo active.png
/background.png
/Report.docx
/myscript.js
/mystyle.css
/readme.txt
-/folder/ pics
	/pur1001.html
	/pur1002.html
	/pur1003.html
	/pur1004.html
	/1001-1.jpg
	/1001-2.jpg
	/1001-3.jpg
	/1001-4.jpg
	/1002-1.jpg
	/1002-2.jpg
	/1002-3.jpg
	/1002-4.jpg
	/1003-1.jpg
	/1003-2.jpg
	/1003-3.jpg
	/1003-4.jpg
	/1004-1.jpg
	/1004-2.jpg
	/1004-3.jpg
	/1004-4.jpg
	/1001.jpg
	/1002.jpg
	/1003.jpg
	/1004.jpg

validate()

*The function gets all elements with 'form-control' class on the page. Those elements
include all input elements required to be filled by user. Each element has a specific
regular expression hold in the under the 'name' attribute. The regex justifies the
value entered by the user to the required one an returns 'true' when validated.
*After the checkbox state is validated. IF checkbox is checked, execution continues.
Otherwise alert message is displayed
*If all the elements are returned to be true and checkbox is checked, function continues
to assign values to different variables. As soon as all values are assigned a message
is displayed containing these values. The window is closed.

validateForm()

*Works as a previous function. If some fileds are empty or not meeting the requirements
of regex, the border of those elements gets highlighted with red color.

reseyForm()

*Empties the value of all input elements that have 'form-control' class

learn(num)

*Takes a certain number as an attribute depending on the type of the laptop, where
card button was clicked. Opens a new window with the name of html file depending on
certain type of the laptop

limit()

*Gets current date and sets minimum value of the form not to be less than current month
and a year

onscroll(), topFunction()

*Taken from w3schools.com to add a go-to-top button

jQuery

* 1. Replaces image on hover of the navigation bar icon
* 2. Adds 'box-shadow' css attribute to the navigation bar links on hover
* 3. On click moves to the part of the document based on 'href' parameter (ignores original <a> tag function)
* 4. Animtaes background and font color of navigation bar links on hover
* 5. Transfers to the Asus ROG social media page when clicked on 'fa' elements
	