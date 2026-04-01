import React from "react";

// This is a minimal layout required by Next.js App Router.
// Since Admin panel is removed, we don't need Payload's RootLayout or Admin UI imports.

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default Layout;
