
$("#idForm").submit(function(e) {

    e.preventDefault(); // avoid to execute the actual submit of the form.

    var form = $(this);
    var url = "https://script.google.com/macros/s/AKfycbzRl_FPoNS0T5kvdNDekmCXCPldmxVupQRNPFksGnKjOA1eADS1R1DMgLBagh3Jkitz/exec";
    
    $.ajax({
           type: "GET",
           url: url,
           data: form.serialize(), // serializes the form's elements.
           success: function(data)
           {
            done();
           }

         });

    
});

function done()
{
    $("#alert").css("display", "block")

}