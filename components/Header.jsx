import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import { Menu } from "lucide-react";

{
  /*components*/
}
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo */}
        <Link href="">
          <h1 className="text-4xl font-semibold">
            Dilmin <span className="text-accent">.</span>
          </h1>
        </Link>

        {/*desktop nav & hire me btn*/}

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="xl:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="h-full p-0 bg-background">
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
