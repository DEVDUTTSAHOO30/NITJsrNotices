import HeroLayout from "@/components/hero-layout";

export default function InstituteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <HeroLayout category="Students" >{children}</HeroLayout>;
}
