var fullname = document.getElementById("fullname");
  
var dob = document.getElementById("date");

var phone = document.getElementById("phone");

var email = document.getElementById("email");

 var add = document.getElementById("add");

var add2 = document.getElementById("add2");

var add3 = document.getElementById("add3");

var ssc = document.getElementById("ssc");

var sscboard = document.getElementById("sscboard");

var hsc = document.getElementById("hsc");

var hscboard = document.getElementById("hscboard");

var degree = document.getElementById("degree");

var degreeboard = document.getElementById("degreeboard");

var pg = document.getElementById("pg");

var pgboard = document.getElementById("pgboard");

var skills = document.getElementById("skills");

var skills2 = document.getElementById("skills2");  

var skills3 = document.getElementById("skills3");

var hobbies  = document.getElementById("hobbies");

var hobbies2  = document.getElementById("hobbies2");

var hobbies3  = document.getElementById("hobbies3");

function download() {
var doc = new jsPDF({
  orientation: 'p',
  format: 'a4',
//210 x 297mm	
});























doc.setFontSize(24);
doc.setFontType("bold");  
doc.text(90, 20, 'Resume');

doc.setFontSize(16);
doc.setFontType("normal");

doc.text(20, 40, 'Name : '+ fullname.value);

doc.text(20, 50, 'Date of birth : '+dob.value);

doc.text(20, 60, 'Contact : '+phone.value);

doc.text(20, 70, 'Email ID : '+email.value);


doc.text(130, 40, 'Address :');

doc.text(130, 50, ''+add.value);

doc.text(130, 60, ''+add2.value);

doc.text(130, 70, ''+add3.value);

doc.line(10, 120, 200, 120) // horizontal line

doc.setFontSize(20);  
doc.setFontType("bold");  
doc.text(20, 130, 'Educational qualification');
doc.setFontSize(16);    
doc.setFontType("normal");  
doc.text(20, 140, ''+ssc.value);
doc.text(20, 150, ''+hsc.value);
doc.text(20, 160, ''+degree.value);
doc.text(20, 170, ''+pg.value);

// Save the PDF
doc.save('document.pdf');
}


//////////////////////////
/// Download style 3 /////
//////////////////////////
function download3() {
var doc = new jsPDF({
  orientation: 'p',
  format: 'a4',
//210 x 297mm	
});

doc.setDrawColor(130, 0, 225) // draw red lines
doc.setLineWidth(5)
doc.line(0, 0, 217, 0) // horizontal line
doc.setFont('courier')
doc.setFontType("bold");
doc.setFontSize(40);
doc.text(5,27,""+ fullname.value);

doc.setDrawColor(0, 0, 0) // draw red lines
doc.setFontSize(16);
doc.setLineWidth(0.1)
doc.line(60, 45, 60, 300) // vertical line
doc.line(0, 45, 217, 45) // horizontal line
doc.setFontType("normal");

doc.text(5, 40, 'CONTACT : '+ phone.value);
doc.text(90, 40, 'EMAIL ID : '+email.value); 




doc.setFontSize(20);  
doc.setFontType("bold");  
doc.text(20, 130, 'Education qualification');
doc.setFontSize(16);    
doc.setFontType("normal");  
doc.text(20, 140, ''+ssc.value);
doc.text(20, 150, ''+hsc.value);
doc.text(20, 160, ''+degree.value);
doc.text(20, 170, ''+pg.value);

// Save the PDF
doc.save('document.pdf');
}



/// Download style 2//////////////

function download2() {
var doc = new jsPDF({
  orientation: 'p',
  format: 'a4',

});

doc.setFont('verdana')
doc.setFontSize(30);
doc.setFontType("bold");
doc.setTextColor(0, 0, 255);
doc.text(20, 20, fullname.value);
doc.line(10, 25, 200, 25) // horizontal line

doc.setFont('times')
doc.setTextColor(0, 0, 0);

doc.setFontSize(16);
doc.setFontType("normal");

doc.text(20, 35, 'Contact : '+ phone.value);
doc.text(100, 35, 'Email ID : '+email.value);

doc.line(10, 40, 200, 40) // horizontal line

//doc.text(20, 50, 'Date of birth : '+dob.value);
doc.setFontType("bold");

doc.text(20, 50, 'Career Objective');

doc.setFontType("normal");

doc.text(20, 60, 'To make a career with an esteemed organization by contributing my hard work \r\nto achieve its goals and objective.');
//doc.text(20, 70, 'to achieve its goals and objective.');
doc.line(10, 75, 200, 75) // horizontal line 
//doc.line(10, 95, 200, 95) // horizontal line

doc.setFontType("bold");  
doc.text(20, 130, 'Educational qualification');
doc.setFontSize(16);    
doc.setFontType("normal");  
doc.text(20, 140, ''+ssc.value);
doc.text(20, 150, ''+hsc.value);
doc.text(20, 160, ''+degree.value);
doc.text(20, 170, ''+pg.value);
doc.text(20, 200, 'I genuinely declare that all the facts mentioned above are true to my faith, and\r\n I am answerable for its accuracy.')
// Save the PDF
doc.save('document.pdf');
}





$(document).ready(function(){
$('[data-toggle="tooltip"]').tooltip();   
});
$(document).ready(function(){
  $('[data-toggle="popover"]').popover();   
});




  // Function to update the resume preview based on user input
  function updatePreview() {
      // Fetch user input data and generate the previewed resume content
      var preview = document.getElementById("resume-preview");
      var previewContent = "";
// Add similar code for other download buttons
// Add user input data to the previewContent variable
previewContent += "<h3>" + fullname.value + "</h3>";
previewContent += "<p>Date of Birth: " + dob.value + "</p>";
previewContent += "<p>Contact: " + phone.value + "</p>";
previewContent += "<p>Email: " + email.value + "</p>";
previewContent += "<p>Address: " + add.value + ", " + add2.value + ", " + add3.value + "</p>";
previewContent += "<p>ssc: " + ssc.value + "</p>";
previewContent += "<p>sscboard: " + sscboard.value + "</p>";
previewContent += "<p>hsc: " + hsc.value + "</p>";
previewContent += "<p>hscboard: " + hscboard.value + "</p>";
previewContent += "<p>degree: " + degree.value + "</p>";
previewContent += "<p>degreeboard: " + degreeboard.value + "</p>";
previewContent += "<p>pg: " + pg.value + "</p>";
previewContent += "<p>pgboard: " + pgboard.value + "</p>";
previewContent += "<p>skills: " + skills.value + "</p>";
previewContent += "<p>skills2: " + skills2.value + "</p>";
previewContent += "<p>skills3: " + skills3.value + "</p>";
previewContent += "<p>hobbies: " + hobbies.value + "</p>";
previewContent += "<p>hobbies2: " + hobbies2.value + "</p>";
previewContent += "<p>hobbies3 : " + hobbies3 .value + "</p>";
     
      
      // Add educational qualifications and other sections to the previewContent variable
      // You can customize the content format as per your requirements
      
      // Update the preview div with the generated content
      preview.innerHTML = previewContent;
  }

  // Attach an event listener to the "Preview" button
  var previewButton = document.getElementById("preview-button");
  previewButton.addEventListener("click", updatePreview);

 


  document.getElementById("preview-button").addEventListener("click", function() {
    window.scrollTo(0, window.scrollY + 700); // Adjust the value (100) as needed
});