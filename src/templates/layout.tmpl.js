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
  <header>
    <h1>Where is my money!?</h1>
  </header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/history">History</a></li>
      <li><a href="/transaction">Transaction</a></li>
      <li><a href="/config">Configuration</a></li>
    </ul>
  </nav>
  <main>
     ${body} 
  </main>
</body>
</html>`;
}
