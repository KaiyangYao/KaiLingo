import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/flags/china.svg" alt="China Flag" height={32} width={40} className="mr-4 rounded-md" />
          Chinese
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/flags/japan.svg" alt="Japan Flag" height={32} width={40} className="mr-4 rounded-md" />
          Japanese
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/flags/south-korea.svg"
            alt="South Korea Flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Korean
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/flags/us.svg"
            alt="United States Flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          English
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/flags/france.svg"
            alt="France Flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/flags/spain.svg" alt="Spain Flag" height={32} width={40} className="mr-4 rounded-md" />
          Spanish
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image src="/flags/italy.svg" alt="Italy Flag" height={32} width={40} className="mr-4 rounded-md" />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/flags/germany.svg"
            alt="Germany Flag"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          German
        </Button>
      </div>
    </footer>
  );
};
