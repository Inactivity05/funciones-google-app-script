//Editar RANGO, EMAIL y ASUNTO para que funcione.

function convSheetAndEmail(rng, email, asunto)
{
  //Convierto rango a Html
  var HTML = SheetConverter.convertRange2html(rng);
  MailApp.sendEmail(email, asunto, '', {htmlBody : HTML}); //Envío.
}
function enviarEmail()
{
  //Capturo hoja y obtengo rango
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var dataRange = ss.getSheetByName('Instantanea del mes').getRange("TU:RANGO"); //Ej Rango: "A1:L22"

  //Seteo datos de correo
  var email = 'tuEmail';
  var asunto = 'tuAsunto';

  convSheetAndEmail(dataRange, email, asunto);
}
