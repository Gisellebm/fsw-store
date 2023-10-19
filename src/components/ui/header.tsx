import { MenuIcon, ShoppingCartIcon, LogInIcon, PercentIcon, ListOrderedIcon, HomeIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
    return <Card className="flex justify-between p-[1.875rem] items-center">
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                    <MenuIcon />
                </Button>
            </SheetTrigger>

            <SheetContent side="left">
                <SheetHeader className="font-semibold text-left text-lg">
                    Menu
                </SheetHeader>

                <div className="met-2 flex flex-col gap-2">
                    <Button variant="outline" className="w-full justify-start gap-2">
                        <LogInIcon size={16} />
                        Fazer login
                    </Button>

                    <Button variant="outline" className="w-full justify-start gap-2">
                        <HomeIcon size={16} />
                        Início
                    </Button>

                    <Button variant="outline" className="w-full justify-start gap-2">
                        <PercentIcon size={16} />
                        Ofertas
                    </Button>

                    <Button variant="outline" className="w-full justify-start gap-2">
                        <ListOrderedIcon size={16} />
                        Catálogo
                    </Button>
                </div>
            </SheetContent>

        </Sheet>

        <h1 className="font-semibold text-lg">
            <span className="text-primary">FSW</span> Store
        </h1>

        <Button size="icon" variant="outline">
            <ShoppingCartIcon />
        </Button>
    </Card>
}
 
export default Header;