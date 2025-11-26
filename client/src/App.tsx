import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Innovation from "@/pages/innovation";
import References from "@/pages/references";
import Contact from "@/pages/contact";
import PrivacyPolicy from "@/pages/privacy-policy";
import KVKK from "@/pages/kvkk";
import ProjectWizard from "@/pages/project-wizard";
import ScrollToTop from "@/components/ScrollToTop";
import WizardFab from "@/components/WizardFab";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/proje-baslat" component={ProjectWizard} />
      <Route path="/hizmetlerimiz" component={Services} />
      <Route path="/hakkimizda" component={About} />
      <Route path="/inovasyon" component={Innovation} />
      <Route path="/referanslar" component={References} />
      <Route path="/iletisim" component={Contact} />
      <Route path="/gizlilik-politikasi" component={PrivacyPolicy} />
      <Route path="/kvkk" component={KVKK} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary/30 selection:text-primary flex flex-col">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
          <WizardFab />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
