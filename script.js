function validate_form ( )
{
valid = true;
if ( document.contact_form.contact_name.value == "" )
{
alert ( "Please fill in the 'Your Name' box." );
valid = false;
}
if(document.contact_form.contact_name.value)
{
alert("Your details had sended");
valid=true;
}
return valid;
} 