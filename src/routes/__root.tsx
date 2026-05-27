import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute } from "@tanstack/react-router";

const queryClient = new QueryClient();

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl text-yellow">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">Página não encontrada.</p>
        <a href="/" className="mt-6 inline-flex rounded-md bg-yellow px-4 py-2 text-sm font-bold uppercase tracking-wider text-yellow-foreground">
          Voltar ao início
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error }: { error: Error }) {
  console.error(error);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Algo deu errado.</h1>
        <button
          onClick={() => window.location.reload()}
          className="mt-6 rounded-md bg-yellow px-4 py-2 text-sm font-bold text-yellow-foreground"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  ),
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});