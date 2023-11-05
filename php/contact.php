<?php
include 'conection.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $telefone = $_POST["telefone"];
    $email = $_POST["email"];

    $sql = "INSERT INTO cliente (nome, telefone, email) VALUES ('$nome', '$telefone', '$email')";
    
    if ($conexao->query($sql) === TRUE) {
        echo "Cliente cadastrado com sucesso.";
    } else {
        echo "Erro ao cadastrar o cliente: " . $conexao->error;
    }
}

$conexao->close();
?>
