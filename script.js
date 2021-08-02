$( document ).ready(function() {
    console.log( "ready!" );
    ///Capture users input in description block 
    $( ".saveBtn" ).click(function() {
        ///Get the vailue from inside the box
        var description = $(this).siblings(".description").val();
        console.log(description);

      });
});