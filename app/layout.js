import "./globals.css";

import FilmexProvider from "@/service/filmexContext";
import ControlProv from "@/context/controller";

export const metadata = {
  title: "FilmeX",
  description:
    "Este é um projeto que simula um aplicativo de filmes, aplicação voltada afins estudantil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <ControlProv>
          <FilmexProvider>
            {children}
          </FilmexProvider>
        </ControlProv>
      </body>
    </html>
  );
}
