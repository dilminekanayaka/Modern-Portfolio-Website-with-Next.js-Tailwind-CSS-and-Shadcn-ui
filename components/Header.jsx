import Link from "next/link";
import { Button } from "./ui/button";

{/*components*/}
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto">
        {/*logo */}
        <Link href="">
          <h1 className="text-4xl font-semibold">
            Dilmin <span className="text-accent">.</span>
            </h1>
        </Link>



        {/*desktop nav*/}
        
        <div className="hidden xl:flex">
        <Nav />
            <Link href="/contact">
                <Button>Hire me</Button>
            </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">mobile nav</div>

      </div>
    </header>
  );
};

export default Header;
