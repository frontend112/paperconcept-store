import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    '/',
    '/:id',
    '/category/:id',
    '/nasze-sklepy',
    '/o-nas',
    '/blog',
    '/faq',
    '/kontakt',
    '/product-page/:id'
  ]
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
