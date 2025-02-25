
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <Layout>
      <section id="hakkimda" className="py-16 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Merhaba!</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ben bir yazılım geliştiriciyim ve web teknolojileri konusunda tutkuluyum.
            Modern ve kullanıcı dostu arayüzler geliştirmeye odaklanıyorum.
          </p>
        </div>
        
        <Card className="glass hover-scale">
          <CardHeader>
            <CardTitle>Hakkımda</CardTitle>
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
          </CardContent>
        </Card>
      </section>

      <section id="tecrubeler" className="py-16 space-y-8">
        <h2 className="text-3xl font-bold text-center">Tecrübeler</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="glass hover-scale">
            <CardHeader>
              <CardTitle>Kıdemli Frontend Geliştirici</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">2020 - Günümüz</p>
              <p>
                Modern web uygulamaları geliştirme, performans optimizasyonu,
                kod kalitesi ve takım liderliği konularında aktif rol aldım.
              </p>
            </CardContent>
          </Card>

          <Card className="glass hover-scale">
            <CardHeader>
              <CardTitle>Frontend Geliştirici</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">2018 - 2020</p>
              <p>
                Kullanıcı arayüzleri geliştirme, responsive tasarım ve
                cross-browser uyumluluk konularında çalıştım.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
