<?php
$host = "sql204.infinityfree.com";
$usuario = "if0_35360406";
$senha = "tCjUgyCfE1zDR";
$banco = "if0_35360406_credio";

$conexao = new mysqli($host, $usuario, $senha, $banco);

if ($conexao->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conexao->connect_error);
}

if (!$conexao->set_charset("utf8")) {
    echo "Erro ao definir o conjunto de caracteres para UTF-8: " . $conexao->error;
}

?>
