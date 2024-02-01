import { RouteLocationNormalized } from "vue-router";

export default async function loadLayoutMiddleware(
  route: RouteLocationNormalized,
) {
  const { layout } = route.meta;

  const layoutName = layout || "default";
  const component = await import(`../components/layouts/${layoutName}.vue`);
  route.meta.layoutComponent = component.default;
}
