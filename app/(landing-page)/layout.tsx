import { Footer } from "@/components/footer";
import { LandingPageHeader } from "@/components/landing-page-header";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingPageHeader
        items={[
          { title: "Home", href: "/" },
          { title: "Features", href: "/#features" },
          { title: "Pricing", href: "/#pricing" },
          {
            title: "Github",
            href: "https://github.com/nomandhoni-cs",
            external: true,
          },
        ]}
      />
      <main className="flex-1">{props.children}</main>
      <Footer
        builtBy="Pollux LLC."
        builtByLink="https://github.com/nomandhoni-cs"
        githubLink="https://github.com/nomandhoni-cs"
        twitterLink="https://twitter.com/blinkeyeapp"
        linkedinLink="https://www.linkedin.com/company/blinkeyesoftware"
      />
    </div>
  );
}
