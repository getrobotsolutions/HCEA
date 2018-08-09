
var badgeNumber=1234567;

function CheckVal(){
                        var bar_code = $("#bar_code").val(); 
                        $(".wrapper1").show();
                        $(".inst-img").hide();
                      //alert(bar_code.val());
                        var len = bar_code.length;
                        var parts = bar_code.split("$");
                        var badgeNumber=parts[0];
                        var firstName=parts[2];
                        var lastName=parts[3];
                        var companyName=parts[4];
                        if(badgeNumber==null || firstName==null || lastName==null || companyName== null){
                          alert("Please Scan badge again");
                          location.reload();
                        }
                        else{
                          writeCookie("BadgeNumber", badgeNumber, 30);
                          writeCookie("FirstName", firstName , 30);
                          writeCookie("LastName", lastName , 30);
                          writeCookie("CompanyName", companyName  , 30);
                          $(".badgescanning").hide();
                          $("#panel2").show();
                          alert("Badge Number: " + badgeNumber);
                        }
                        
                       // alert("First Name: " + parts[2]);
                        //alert("Last Name: " + parts[3]);
                       // alert("Company Name:" + parts[4]);
}

             /*$(".wrapper1").hide();
             

              var dNow = new Date();
              var month = dNow.getMonth()+1;
              var day = dNow.getDate();
              var year = dNow.getFullYear();
              var hour = dNow.getHours();
              var min = dNow.getMinutes();
              */
            /*$.ajax({
                type: "GET",
                url:url,
                dataType: "JSONP",
                success: function(data) {
                  console.log(data);
                  }
            });         
            }); */ 
  $(function () {
    $('#code-scan').codeScanner();
    var bar_code = $("#bar_code"); 
    
});              
  $(document).ready(function() {
      $("#bar_code").focus();
      $(".second-block").click(function(){
        location.href = "main.htm";
      });
  });
  $( function() {
                  $('.submit').click(function(e) {
                      e.preventDefault();
                     
                      var bar_code = $("#bar_code").val(); 
                  //    console.log(bar_code);
                      
                    if(bar_code.length>0){
                      alert(bar_code);
                        
                        location.href = "main.htm";

                    }   
                    else{
                      alert("Please put the Barcode scanner on the right position and try again.");
                      location.reload();
                    }                     
                  });
                 
                    setTimeout(function() {
                      $('#submit').trigger('click');
                      }, 5000);

                 
        });