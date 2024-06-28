export default layout;

function layout(body) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="styles.css">
  <script src="htmx.min.js" defer></script>
  <title>Where is my money!?</title>
</head>
<body>
   ${body} 
</body>
</html>`;
}
