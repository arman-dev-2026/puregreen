import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Financing } from '@/components/Financing';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const queryClient = new QueryClient();

function LandingPage() {
  return (
    <div className="min-h-[100dvh] w-full flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Financing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
