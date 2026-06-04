import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container flex flex-col items-center justify-center gap-6 px-4 mx-auto max-w-6xl py-24 md:py-32 text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl font-semibold text-muted-foreground">Page Not Found</h2>
      <p className="text-muted-foreground max-w-md">
        Sorry, the page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Button asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </section>
  );
}
