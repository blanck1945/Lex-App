const env = process.env.NODE_ENV;

export const rootURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://lex-app.vercel.app/";

export const prefix =
  env !== "development"
    ? "https://lex-app.vercel.app/api/"
    : "http://localhost:3000/api/";

//"https://lex-app.vercel.app/api/"

export const causaRoutes = {
  causasTodas: prefix + "causas",
};

export const juzgadoRoutes = {
  juzgadoTodos: prefix + "juzgado",
};

export const abogadosRoutes = {
  abogadosTodos: prefix + "abogados",
};

export const usuarioRoutes = {
  loginRoute: prefix + "login",
  registerRoute: prefix + "register",
  logOutRoute: prefix + "logout",
};

export const usuarioRoute = {
  validateUser: prefix + "usuario",
};
