
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
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Profile"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
          <h1 className="text-4xl font-bold animate-fade-in">Merhaba!</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Ben bir yazılım geliştiriciyim ve web teknolojileri konusunda tutkuluyum.
            Modern ve kullanıcı dostu arayüzler geliştirmeye odaklanıyorum.
          </p>
        </div>
        
        <Card className="glass hover:scale-105 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Hakkımda
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              5 yıllık deneyimim boyunca, çeşitli web teknolojileri ve frameworkler ile
              çalıştım. Özellikle React, TypeScript ve modern frontend teknolojileri
              konusunda uzmanlık sahibiyim.
            </p>
            <p>
              Sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum. Yeni
              teknolojileri takip ediyor ve projelerimde en iyi pratikleri
              uygulamaya çalışıyorum.
            </p>
            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">GraphQL</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="tecrubeler" className="py-16 space-y-8">
        <h2 className="text-3xl font-bold text-center flex items-center justify-center gap-2">
          <Briefcase className="w-6 h-6" />
          Tecrübeler
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="glass hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle>Kıdemli Frontend Geliştirici</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">2020 - Günümüz</p>
              <p>
                Modern web uygulamaları geliştirme, performans optimizasyonu,
                kod kalitesi ve takım liderliği konularında aktif rol aldım.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <Badge>React</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Next.js</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="glass hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle>Frontend Geliştirici</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">2018 - 2020</p>
              <p>
                Kullanıcı arayüzleri geliştirme, responsive tasarım ve
                cross-browser uyumluluk konularında çalıştım.
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                <Badge>JavaScript</Badge>
                <Badge>Vue.js</Badge>
                <Badge>CSS3</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
