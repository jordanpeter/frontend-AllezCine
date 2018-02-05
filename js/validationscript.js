$(document).ready(function(){
    // Ajout d'une méthode
    $('#sendMessage').on({'click': function(){
         var name = $('#inputFirst');
         var lastName =$('#inputLast');
         var email = $('#inputEmail');
         var subject = $('#inputSubject');
         var comment = $('#comment');
         var array =[name, lastName, email, subject, comment];
         var ids = ['#inputFirst', '#inputLast','#inputEmail','inputSubject','comment']
         var green = 0;
         for (i = 0; i<array.length; i++){
              if (array[i].val() == ""){
                   array[i].css('border','1px solid red');

              }
              else{
                   array[i].css('border','1px solid green');
                   green++;
              }
         }
         if (green == 5){
              alert("Bonjour " +name.val()+ " " + lastName.val() + " .\n\n Votre adresse email est: " + email.val() + " \n\n Votre message a pour sujet: " + subject.val() + " .\n\n Voici le contenu du messsage envoyé: \n\n" + comment.val());
         }
         else{
              alert("Les champs en rouge doivent être complétés.")
         }

    }})

});
