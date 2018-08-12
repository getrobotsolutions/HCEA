
var badgeNumber=1234567;

function CheckVal(){
    var bar_code = $("#bar_code").val(); 
    var len = bar_code.length;
                      var parts = bar_code.split("^");
                      var regId=parts[0];
                      var firstName=parts[1];
                      var lastName=parts[2];
                      var companyName=parts[3];
  if(regId==null || firstName==null || lastName==null || companyName== null){
                        alert("Please Scan badge again");
                          location.reload();
  }
  else{
                      window.external.PlaySpeech("welcome" +firstName + " " + lastName +", welcome to our booth."); 
                        /*alert("Reg ID: " + parts[0]);
                        alert("First Name: " + parts[1]);
                        alert("Last Name: " + parts[2]);
                        alert("Company Name:" + parts[3]);
                                                                                      
              var dNow = new Date();
              var month = dNow.getMonth()+1;
              var day = dNow.getDate();
              var year = dNow.getFullYear();
              var hour = dNow.getHours();
              var min = dNow.getMinutes();
              */
            var dataString =  { 'RegId' : regId, 'FirstName' : firstName,  'LastName' : lastName, 'CompanyName' : companyName};
            $.ajax({
              url:"https://robotaisolutions.com/amgen/hceaApi.php",
              type:"get",
              data : dataString,
              cache : false,
              dataType: 'JSON',
              
                success: function(data) {
                  console.log(data);
                  if(data.response=='error'){
                    //alert("Welcome back");
                    //window.external.PlaySpeech("welcome back" +firstName + " " + lastName +"to the CDS booth");

                  }
                  //window.external.PlaySpeech("welcome" +firstName + " " + lastName +"to the CDS booth");
                }
            });
  }      
}
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
                       
                        CheckVal();
                        //alert(bar_code);
                        //alert(bar_code.length); 
                        location.href = "main.htm";

                    }
                    else{
                      //$("#bar_code").val('');
                      alert("Please put the Barcode scanner on the right position and try again.");
                      location.reload();
                    }
                                         
                  });
                  
                    setTimeout(function() {
                      $('#submit').trigger('click');
                      }, 3000);

                 
        });

  function OnJoystickControlled(strPara){
    var btn_info = strPara.split(',')[4];


    if(btn_info[0] == '1'){
            window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Come here please and touch my screen to win a prize.");//I'm here to assist you, press any button on my screen to begin");
          
    }

    if(btn_info[1] == '1'){
        window.external.ChangeLanguage("en-us");
        SetVolume(1);
        window.external.PlaySpeech("Winner , winner, chicken dinner!");
        
    }
    if(btn_info[2] == '1'){
        window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("I like you, you are cool.  Would you like to rent me? ");
    }
    if(btn_info[3] == '1'){
        window.external.ChangeLanguage("en-us");
        SetVolume(1);
        window.external.PlaySpeech("Ha, ha.  That tickles.  Good luck on winning a great prize.");
        
    }
}