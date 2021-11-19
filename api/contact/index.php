<?php
    include_once('classes/sendmail.php');
    include_once('config.php');

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    header('Content-Type: application/json; charset=utf-8');
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    $isMensualPlan = true ;
    $screenName = $_POST['screenSelected']['name'];
    $clientName = $_POST['clientData']['nameClient'];
    $clientEmail = $_POST['clientData']['email'];
    $clientTel = $_POST['clientData']['tel'];
    $clientCamp = $_POST['clientData']['camp'];
    $socialName = $_POST['purchaseInfo']['razonSocial'];
    $rfc = $_POST['purchaseInfo']['rfc'];
    $fiscalAdd = $_POST['purchaseInfo']['direccionFiscal'];
    $facType = $_POST['purchaseInfo']['tipoFactura'];
    $promoCode = $_POST['purchaseInfo']['codigoPomo'];
    $from = 'Servicio@impactovisual.info';

        if( $isMensualPlan ){
            $monthlyPlanName = $_POST['mensualPlan']['name'];
            $monthlyPlanPrice = $_POST['mensualPlan']['price'];
            $subject = 'Contact from: ' . $clientName;
            $message = "<html>
            <p>Se ha puesto en contacto <b>$clientName</b></p>
            <p>Paquete seleccionado: <b>$monthlyPlanName</b></p>
            <p> Costo: <b>$monthlyPlanPrice</b></p>
            <p> En la pantalla seleccionada: <b>$screenName</b></p>
            <hr>
            <p>Datos de contacto</p>
            <p> Correo: <b>$clientEmail</b></p>
            <p> Telefono: <b>$clientTel</b></p>
            <hr>
            <p> Nombre de campaña: <b>$clientCamp</b></p>
            <p> Razón Social: <b>$socialName</b></p>
            <p> RFC: <b>$rfc</b></p>
            <p> Dirección Fiscal: <b>$fiscalAdd</b></p>
            <p> Tipo Factura: <b>$facType</b></p>
            <p> Codigo de Promoción: <b>$promoCode</b></p>
            </html>";

            $sendEmail = new Sender($adminEmail, $from, $subject, $message);
            $sendEmail->send();
        } else {
            $dailyPlan = $_POST['dailyPlan']['selectedDays'];
            $subject = 'Contact from: ' . $clientName;
            $message = "<html>
            <p>Se ha puesto en contacto <b>$clientName</b></p>

            <p>Configuracion del paquete diario</p>";
            foreach ($dailyPlan as $day){
                $date = $day['stringDate'];
                $startHour = $day['startHour'];
                $endHour = $day['endHour'];
                $message .= "<p>El <b>$date</b> desde las <b>$startHour</b> hasta las <b>$endHour</b></p>";
            }
            $message .="<p><b>  </b></p>
            <p> Costo: <b>$monthlyPlanPrice</b></p>
            <p> En la pantalla seleccionada: <b>$screenName</b></p>
            <hr>
            <p>Datos de contacto</p>
                <p> Correo: <b>$clientEmail</b></p>
                <p> Telefono: <b>$clientTel</b></p>
            <hr>
            <p> Nombre de campaña: <b>$clientCamp</b></p>
            <p> Razón Social: <b>$socialName</b></p>
            <p> RFC: <b>$rfc</b></p>
            <p> Dirección Fiscal: <b>$fiscalAdd</b></p>
            <p> Tipo Factura: <b>$facType</b></p>
            <p> Codigo de Promoción: <b>$promoCode</b></p>
            </html>";

            $sendEmail = new Sender($adminEmail, $from, $subject, $message);
            $sendEmail->send();
        }
    ?>