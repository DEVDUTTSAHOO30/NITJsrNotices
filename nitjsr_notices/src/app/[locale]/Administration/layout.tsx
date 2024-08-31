import HeroLayout from "@/components/hero-layout";

export default function AdministrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeroLayout category="administration">{children}</HeroLayout>;
}
