// middleware/redirectHome.global.ts
export default defineNuxtRouteMiddleware(() => {
  return navigateTo('/');
});
