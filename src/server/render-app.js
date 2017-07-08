const renderApp = () => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Race Analyser </title>
  </head>
  <body>
    <div id="app">
    </div>
    <script src="http://localhost:${7000}/dist/bundle.js"></script>
  </body>
</html>
`

export default renderApp
