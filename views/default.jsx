const React = require("react");

function Default(html) {
  return (
    <html>
      <head>
        <title>Title</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>{html.children}</body>
    </html>
  );
}

module.exports = Default;
