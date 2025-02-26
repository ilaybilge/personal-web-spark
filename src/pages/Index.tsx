
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Briefcase } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <section id="hakkimda" className="py-16 space-y-8">
        <div className="text-center space-y-6">
          <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
            <img
              src="/logo-ilay-bilge.png"
              alt="IlayBilge"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h1 className="text-4xl font-bold animate-fade-in">Ilay Bilge</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            🐘 Ar.io Gateaways Operator, ⚙️ Node Runner, 💻 Tester, <br />
            ⛓️ Blockchain Enthusiast, 🖼️ NFT Collector.
          </p>
        </div>
        
        <Card className="glass hover:scale-105 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              About
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
            Hello, I’m Ilay Bilge. I have been following blockchain and Web3 projects since 2022, actively participating in their testnets. So far, I have operated various nodes and contributed to platform testing, and I continue to do so. Most recently, I had the opportunity to join the Ar.io Network as a grateful operator.

            </p>
            <p>
            I am passionate about contributing to the development of blockchain technology and experiencing its evolution firsthand. I look forward to continuing my journey in this space.

            </p>
          </CardContent>
        </Card>
      </section>

      <section id="tecrubeler" className="py-16 space-y-8">
        <h2 className="text-3xl font-bold text-center flex items-center justify-center gap-2">
          <Briefcase className="w-6 h-6" />
          Experiences
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="glass hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle>🐘 ARIO Gateaway Operator</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">2024 - Present</p>
              <p>
                After participating in its testnet, I became eligible to transition to the mainnet and now operate a node as an operator.
                <br /><br />
                If you want to delegate your Ar tokens to me, you can click the button below.

              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <a href="https://network-portal.app/#/gateways/vOrKy_8JvhhIxzWj7fe9E59AGKVi4Jb6YfgauAvCvxU" target="_blank"><Badge>Ilay Bilge Gateaway</Badge></a>
              </div>
            </CardContent>
          </Card>

          <Card className="glass hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle>Others</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">2022 - Present</p>
              <p>
                I have run many nodes  (Aptos Devnet, Bundlr, Crowd Control, Exorde, Empower Chain, Forta, GNO Land, Iron Fish, Humanode, Inery, Kujira, Massa, 
                Minima, Newrl, NuLink, Paloma, QuickSilver, Razor, Rebus, Sei, StaFi, Stratos (Trapos-4 & SDS), Subspace, Teritori, Wormholes) and participate 
                the platform testnets.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <Badge>Arweave</Badge>
                <Badge>Cosmos</Badge>
                <Badge>EVM</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
