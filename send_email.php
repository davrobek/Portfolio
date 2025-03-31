<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Forma ma'lumotlarini olish
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // '<' yoki '>' belgilarini tekshirish
    if (strpos($name, '<') !== false || strpos($name, '>') !== false ||
        strpos($email, '<') !== false || strpos($email, '>') !== false ||
        strpos($message, '<') !== false || strpos($message, '>') !== false) {
        echo "<script>alert('Xabarda \"<\" yoki \">\" belgilarini ishlatish mumkin emas!'); window.location.href='index.html';</script>";
        exit;
    }

    // Sizning emailingiz
    $to = "davronbekibodov9557@gmail.com";
    $subject = "Yangi xabar: $name tomonidan";
    $body = "Ism: $name\nEmail: $email\nXabar: $message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Email yuborish
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Xabar muvaffaqiyatli yuborildi!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Xabar yuborishda xatolik yuz berdi.');</script>";
    }
} else {
    echo "<script>alert('Forma noto\'g\'ri yuborildi.');</script>";
}
?>