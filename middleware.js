import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ["/", "/about", "/projects", "/trending-projects", "/community", "/api/auth"],
  // ignoredRoutes: ["/api/auth"],
  debug: true
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/'],
};
// matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
