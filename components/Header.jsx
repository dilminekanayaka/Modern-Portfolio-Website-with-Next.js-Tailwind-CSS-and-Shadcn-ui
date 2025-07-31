import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

// components
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Dilmin <span className="text-accent">.</span>
          </h1>
        </Link>

        {/*desktop nav & hire me btn*/}

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="bg-accent text-primary hover:bg-accent/90 px-6 py-2">
              Hire me
            </Button>
          </Link>
        </div>

        {/* mobile nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon-lg" className="xl:hidden">
              <Menu className="h-8 w-8" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="h-full p-0 bg-primary">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
