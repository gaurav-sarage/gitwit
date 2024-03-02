import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ["/", "/about", "/projects", "/trending-projects", "/community", "/api/projects", "/api/trending-projects", "/api/skills", "/api/interests"],
});

export const config = {
  // matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
  matcher: ['/((?!.*\\..*|_next).*)']
};
// matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
