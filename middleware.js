import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ["/", "/about", "/projects", "/trending-projects", "/community"],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
