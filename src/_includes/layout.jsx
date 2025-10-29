export default (
  { title, children, comp, lang },
  helpers,
) => (
  <>
    {{ __html: "<!DOCTYPE html>" }}
    <html lang={lang}>
      <head>
        <title>{title}</title>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  </>
);
