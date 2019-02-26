<?php
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Credentials: true");
  header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
  header('Access-Control-Max-Age: 1000');
  header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

  $email = $_POST['email'];
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $msg = $_POST['msg'];
  $gdpr = $_POST['gdpr'];

  if (!isset($email) OR $email == '' OR !isset($name) OR $name == '' OR !isset($phone) OR $phone == '') {
    echo json_encode(array(
      'status' => '400',
      'error' => 'Fields required'
    ));
    exit();
  }

  if(!preg_match("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^", $email)) {
    echo json_encode(array(
      'status' => '400',
      'error' => 'Email invalid'
    ));
    exit();
  }

  $to = 'cattleyaresidence.business@gmail.com';
  $subject = 'Cattleya form submission '.$email.' - '.$name;
  $message = '
  <html>
    <head>
        <title>Cattleya Form Submission</title>
    </head>
    <body>
      <p><b>Email:</b> '.$email.'</p>
      <p><b>FirstName:</b> '.$name.'</p>
      <p><b>Phone:</b> '.$phone.'</p>
      <p><b>GDPR Accepted:</b> '.$gdpr.'</p>
      <p><b>Message:</b> '.$msg.'</p>                        
    </body>
  </html>
  ';

  $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
  $headers .= "From: Cattleya <cattleyaresidence.com/>\r\n"; 
  mail($to, $subject, $message, $headers);
  echo json_encode(array(
    'status' => '200'
  ));

?>
