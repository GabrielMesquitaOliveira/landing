<?php

try {
    include 'conection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];

    $phone = str_replace(['(', ')', ' ', '-', '+'], '', $_POST["phone"]);

    $email = $_POST["email"];

    $sql = "INSERT INTO cliente (nome, telefone, email) VALUES ('$nome', '$phone', '$email')";

    if ($conexao->query($sql) === TRUE) {
        echo "Cliente cadastrado com sucesso.";
    } else {
        echo "Erro ao cadastrar o cliente: " . $conexao->error;
    }
}

$conexao->close();
} catch (Exception $e) {
    echo "Erro no servidor: " . $e->getMessage();
}


?>
