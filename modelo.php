<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];

$para = 'aguja13@hotmail.com';
$titulo = 'Descarga de Modelo de estrategia';
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $nombre\n E-Mail: $email";
  
if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo "<script language='javascript'>

window.location.href = 'http://zapa.aguja2013.com/descarga-estrategia.html';
</script>";
} else {
echo 'Falló el envio';
}
}
?>