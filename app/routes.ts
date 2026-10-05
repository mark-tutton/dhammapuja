import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("chanting", "routes/chant-index.tsx"),
  route("chanting/*", "routes/chant.tsx"),
  route("*", "routes/not-found.tsx"),
] satisfies RouteConfig;
