import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    '/',
    '/category/:id',
    '/nasze-sklepy',
    '/o-nas',
    '/blog',
    '/faq',
    '/kontakt',
  ]
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
