import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/settings(.*)",
  "/",

]);

export default clerkMiddleware((auth, req) => {
  // console.log("Middleware invoked for route:", req.nextUrl.pathname);
  if (isProtectedRoute(req)) {
    // console.log("Protecting route:", req.nextUrl.pathname);
    auth().protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
