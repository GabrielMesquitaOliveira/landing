<?php
$host = "108.179.193.179";
$usuario = "hostin74_gabriel";
$senha = "Gabriel.0503";
$banco = "hostin74_credio";

$conexao = new mysqli($host, $usuario, $senha, $banco, 3306);

if ($conexao->connect_error) {
    echo 'erro';
} else{
    echo "sucesso";
}

if (!$conexao->set_charset("utf8")) {
    echo "Erro ao definir o conjunto de caracteres para UTF-8: " . $conexao->error;
}
?>
