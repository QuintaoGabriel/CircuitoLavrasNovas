import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import patternBorder from "@/assets/pattern-border.webp";


function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Circuito Gastronômico & Cultural Lavras Novas" },
      {
        name: "description",
        content:
          "Circuito Gastronômico & Cultural Lavras Novas — sabores, música e cultura nas ruas de pedra de Lavras Novas, Minas Gerais.",
      },
      { name: "author", content: "Circuito Lavras Novas" },
      { property: "og:title", content: "Circuito Gastronômico & Cultural Lavras Novas" },
      {
        property: "og:description",
        content: "Sabores, música e cultura nas ruas de pedra de Lavras Novas, MG.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Fixed decorative vertical borders (left & right) */}
      <div
        aria-hidden
        className="hidden md:block fixed inset-y-0 left-0 z-[60] pointer-events-none overflow-hidden"
        style={{ width: "32px" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vh",
            height: "32px",
            transformOrigin: "top left",
            transform: "translateX(32px) rotate(90deg)",
            backgroundImage: `url(${patternBorder})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
          }}
        />
      </div>
      <div
        aria-hidden
        className="hidden md:block fixed inset-y-0 right-0 z-[60] pointer-events-none overflow-hidden"
        style={{ width: "32px" }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vh",
            height: "32px",
            transformOrigin: "top left",
            transform: "translateX(32px) rotate(90deg)",
            backgroundImage: `url(${patternBorder})`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
          }}
        />
      </div>
      <Outlet />
    </QueryClientProvider>
  );
}
