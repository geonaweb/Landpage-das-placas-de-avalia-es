import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  Zap, QrCode, Nfc, Store, MapPin, Smartphone, Play, ChevronDown,
  UtensilsCrossed, Scissors, ShoppingBag, Stethoscope, Coffee, Users, Check, MessageCircle,
} from "lucide-react";
import { siteConfig, whatsappLink } from "@/config/site";

const TITLE = "Placa de Avaliação Google com QR Code e NFC";
const DESC =
  "Conheça uma forma prática de facilitar o acesso dos seus clientes à página de avaliações do Google usando QR Code e NFC.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function WhatsButton({ children, size = "md" }: { children: ReactNode; size?: "md" | "lg" }) {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp font-semibold text-whatsapp-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 ${size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3"}`}
    >
      <MessageCircle className="h-5 w-5" aria-hidden />
      {children}
    </a>
  );
}

function Section({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`scroll-mt-20 px-5 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Heading({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}

const faqs = [
  ["Como funciona o QR Code?", "O cliente utiliza a câmera do celular para escanear o código e acessar o link configurado."],
  ["Como funciona o NFC?", "Em celulares compatíveis, basta aproximar o aparelho da área NFC da placa para acessar o link, conforme a compatibilidade e as configurações do dispositivo."],
  ["Onde posso colocar a placa?", "Ela pode ser posicionada em locais visíveis, como balcões, caixas, recepções e áreas de atendimento."],
  ["A placa garante mais avaliações?", "A placa facilita o acesso à página de avaliações, mas a decisão de avaliar é do cliente. Os resultados dependem da experiência e da iniciativa de cada pessoa."],
  ["Como faço para comprar?", "Entre em contato pelo WhatsApp para consultar disponibilidade, condições de compra e entrega."],
];

function Video() {
  const { videoMp4, videoEmbedUrl } = siteConfig;
  return (
    <div className="relative aspect-video overflow-hidden rounded-3xl bg-ink shadow-soft">
      {videoEmbedUrl ? (
        <iframe className="h-full w-full" src={videoEmbedUrl} title="Vídeo demonstrativo da placa" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowFullScreen />
      ) : videoMp4 ? (
        <video className="h-full w-full object-cover" src={videoMp4} controls playsInline preload="metadata" />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-4 text-ink-foreground">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Play className="ml-1 h-8 w-8" aria-hidden />
          </span>
          <p className="text-lg font-semibold">Vídeo demonstrativo em breve</p>
        </div>
      )}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#topo" className="flex items-center gap-2 font-display font-bold">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"><QrCode className="h-4 w-4" aria-hidden /></span>
            {siteConfig.brandName || "Placa de Avaliação"}
          </a>
          <nav className="hidden gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a href="#como-funciona" className="hover:text-foreground">Como funciona</a>
            <a href="#demonstracao" className="hover:text-foreground">Demonstração</a>
            <a href="#faq" className="hover:text-foreground">Dúvidas</a>
          </nav>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground">
            <MessageCircle className="h-4 w-4" aria-hidden /> <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </header>

      <main id="topo">
        {/* Hero */}
        <section className="relative overflow-hidden px-5 pb-20 pt-12 md:pt-20">
                    <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20">
            <div className="fade-up">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-primary">
                <QrCode className="h-4 w-4" aria-hidden /> QR Code + <Nfc className="h-4 w-4" aria-hidden /> NFC
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl xl:text-[3.5rem]">
                Facilite as avaliações do seu negócio no <span className="text-primary">Google</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Uma solução prática para aproximar seus clientes da página de avaliações do seu estabelecimento, com QR Code e tecnologia NFC.
              </p>
              <ul className="mt-8 space-y-3">
                {["Acesso rápido às avaliações.", "Duas formas de conexão.", "Ideal para balcões, caixas e recepções."].map((b) => (
                  <li key={b} className="flex items-center gap-3 font-medium">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check className="h-4 w-4" aria-hidden /></span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#produto" className="inline-flex items-center justify-center rounded-full border-2 border-foreground px-6 py-3 font-semibold transition hover:bg-foreground hover:text-background">
                  Quero conhecer a placa
                </a>
                <WhatsButton>Falar pelo WhatsApp</WhatsButton>
              </div>
            </div>
            <div className="fade-up relative mx-auto w-full max-w-md">
              <div className="relative rounded-[2rem] bg-panel p-6 shadow-soft md:p-8">
                <span className="absolute left-8 top-0 h-1 w-16 rounded-full bg-primary" aria-hidden />
                <span className="absolute right-0 top-0 h-8 w-8 rounded-full bg-accent" aria-hidden />
                <img
                  src={siteConfig.productImage}
                  alt="Placa de avaliação Google com QR Code e NFC sobre um balcão"
                  className="mx-auto max-h-[70vh] w-auto rounded-2xl object-contain"
                  width={720}
                  height={1280}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Praticidade */}
        <Section id="produto" className="bg-panel">
          <Heading
            title="Pequenos detalhes que facilitam a experiência do cliente"
            sub="Nem sempre o cliente sabe onde encontrar o perfil do estabelecimento para deixar uma avaliação. Com a placa, você oferece um caminho mais simples e acessível para quem deseja compartilhar sua experiência."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              [Zap, "Mais facilidade", "Ajude o cliente a encontrar a página de avaliações sem precisar procurar manualmente pelo estabelecimento."],
              [Smartphone, "Duas formas de acesso", "Com QR Code, basta escanear com a câmera do celular. Com NFC, é possível aproximar um celular compatível da placa para acessar o link."],
              [MapPin, "Fácil de posicionar", "Deixe a placa em um local visível, como o balcão, caixa ou recepção, e convide seus clientes a conhecerem a página de avaliações."],
            ].map(([Icon, t, d]) => {
              const I = Icon as typeof Zap;
              return (
                <div key={t as string} className="rounded-3xl bg-card p-8 transition hover:-translate-y-1 hover:shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><I className="h-6 w-6" aria-hidden /></span>
                  <h3 className="mt-6 text-xl font-semibold">{t as string}</h3>
                  <p className="mt-3 text-muted-foreground">{d as string}</p>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Como funciona */}
        <Section id="como-funciona">
          <Heading title="Simples de usar. Fácil de demonstrar." />
          <ol className="grid gap-10 md:grid-cols-3">
            {[
              ["Posicione a placa", "Deixe a placa em um local visível para seus clientes."],
              ["O cliente escolhe como acessar", "Ele pode escanear o QR Code ou aproximar um celular compatível com NFC."],
              ["Acesse a página de avaliações", "O celular abre o link configurado para levar o cliente à página de avaliações do estabelecimento."],
            ].map(([t, d], i) => (
              <li key={t} className="text-center md:text-left">
                <span className="font-display text-6xl font-bold text-accent">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 text-center"><WhatsButton>Quero saber mais pelo WhatsApp</WhatsButton></div>
        </Section>

        {/* Vídeo */}
        <Section id="demonstracao" className="bg-panel">
          <Heading title="Veja a placa funcionando na prática" sub="Confira como o QR Code e o NFC facilitam o acesso à página de avaliações." />
          <div className="mx-auto max-w-4xl">
            <Video />
            <p className="mt-6 text-center font-medium text-muted-foreground">Veja como é simples oferecer mais praticidade aos seus clientes.</p>
          </div>
        </Section>

        {/* Negócios */}
        <Section>
          <Heading title="Uma solução para diferentes tipos de estabelecimento" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {[
              [UtensilsCrossed, "Restaurantes e lanchonetes"],
              [Scissors, "Salões de beleza e barbearias"],
              [ShoppingBag, "Lojas e comércios locais"],
              [Stethoscope, "Clínicas e consultórios"],
              [Coffee, "Cafeterias e confeitarias"],
              [Users, "Outros negócios com atendimento presencial"],
            ].map(([Icon, t]) => {
              const I = Icon as typeof Zap;
              return (
                <div key={t as string} className="flex flex-col items-center gap-3 rounded-2xl border p-6 text-center transition hover:border-primary">
                  <I className="h-8 w-8 text-primary" aria-hidden />
                  <span className="font-semibold">{t as string}</span>
                </div>
              );
            })}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-muted-foreground">
            Se o seu estabelecimento recebe clientes presencialmente, a placa pode ser uma maneira prática de facilitar o acesso à página de avaliações.
          </p>
        </Section>

        {/* Valor */}
        <Section className="bg-panel">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Facilite o caminho para quem quer avaliar</h2>
              <p className="mt-5 text-lg text-muted-foreground">
                As avaliações ajudam outras pessoas a conhecer as experiências de clientes anteriores. Ao deixar o acesso mais visível e conveniente, você cria mais uma oportunidade para que seus clientes compartilhem opiniões espontâneas sobre o atendimento.
              </p>
            </div>
            <blockquote className="rounded-3xl border-l-8 border-accent bg-card p-10 font-display text-2xl font-semibold leading-snug shadow-soft">
              Mais praticidade para avaliar. Mais facilidade para compartilhar experiências.
            </blockquote>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq">
          <Heading title="Perguntas frequentes" />
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map(([q, a]) => (
              <details key={q} className="group rounded-2xl border bg-card p-6 open:shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {q}
                  <ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" aria-hidden />
                </summary>
                <p className="mt-4 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-[#0077f3] px-5 py-24 text-white">
          <div
  className="absolute -left-20 -top-20 h-64 w-64 rounded-full border-[24px] border-[#FFD243]"
  aria-hidden
/>
<div
  className="absolute -bottom-16 right-10 h-32 w-32 rounded-full bg-[#FFD243]"
  aria-hidden
/>
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">Deixe mais fácil para seus clientes encontrarem suas avaliações</h2>
            <p className="mt-6 text-lg opacity-80">Conheça a placa com QR Code e NFC e descubra como ela pode se encaixar na rotina do seu estabelecimento.</p>
            <div className="mt-10"><WhatsButton size="lg">Solicitar informações pelo WhatsApp</WhatsButton></div>
          </div>
        </section>
      </main>

      <footer className="px-5 pb-14 pt-8 text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center gap-2"><Store className="h-3 w-3" aria-hidden/>
          <div className="space-y-2 text-center">
  <p>Produto independente, sem vínculo oficial com o Google.</p>
  <p>Desenvolvido por Brenda Santos © 2026 · Todos os direitos reservados.</p>
</div>
      </footer>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-soft transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" aria-hidden />
      </a>
    </div>
  );
}
