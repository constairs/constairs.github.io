<?
if(isset($_POST)) {
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];
	$form_name = $_POST['form_name'];
	$send_email = 'constairs@gmail.com';
	$subject = 'Новое сообщение с формы';
	$massage_body = "<h2>Информация</h2>
		<p><b>Имя: </b>".$name."</p>
		<p><b>E-mail: </b>".$email."</p>
		<p><b>Сообщение: </b>".$message."</p>
		<p><b>Форма: </b>".$form_name."</p>";

	$headers  = "From: ".$name."<mail@mail.com> \r\n";
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers  = "Content-Type: text/html; charset=utf-8;\r\n";

	mail($send_email,$subject,$massage_body,$headers);
}
?>