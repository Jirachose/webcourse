// define the functions
function printCard() {
   var name_line = "<strong>Name: </strong>" + this.name + "<br>\n";
   var email_line = "<strong>Email: </strong>" + this.email + "<br>\n";
   var address_line = "<strong>Address: </strong>" + this.address + "<br>\n";
   var phone_line = "<strong>Phone: </strong>" + this.phone + "<br>\n";
   var personal_note_line="<strong>Personal Note:</strong>"+this.personal_note +"<hr>\n";
   
   document.write(name_line, email_line, address_line, phone_line,personal_note_line);
}

function Card(name,email,address,phone,personal_note) {
   this.name = name;
   this.email = email;
   this.address = address;
   this.phone = phone;
   this.printCard = printCard;
   this.personal_note=personal_note;

}

// Create the objects
var sue = new Card("Sue Suthers", 
                   "sue@suthers.com", 
                   "123 Elm Street, Yourtown ST 99999", 
                   "555-555-9876",
                   "Nicknamed Mac");
var fred = new Card("Fred Fanboy", 
                    "fred@fanboy.com", 
                    "233 Oak Lane, Sometown ST 99399", 
                    "555-555-4444",
                    "Alergic to peanuts");
var jimbo = new Card("Jimbo Jones", 
                     "jimbo@jones.com", 
                     "233 Walnut Circle, Anotherville ST 88999", 
                     "555-555-1344",
                     "loves seafood");

// Now print them
sue.printCard();
fred.printCard();
jimbo.printCard();
