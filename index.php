<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section id="gallery" class="section">
        <div class="gallery">
            <?php
            // โฟลเดอร์ที่เก็บรูปภาพ
            $folder = 'poto';
            
            // ดึงไฟล์ที่มีนามสกุล .jpg, .png, .gif
            $files = glob($folder . '/*.{jpg,png,gif}', GLOB_BRACE);

            // แสดงผลไฟล์รูปภาพในแกลเลอรี
            foreach ($files as $file) {
                echo '<div class="gallery-item">';
                echo '<img src="' . $file . '" alt="ความทรงจำ">';
                echo '</div>';
            }
            ?>
        </div>
    </section>
</body>
</html>
