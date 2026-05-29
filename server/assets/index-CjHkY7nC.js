import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Leaf, Home, Palette, Ruler, MapPin, Sparkles, Check, Compass } from "lucide-react";
const heroImg = "/assets/hero-interior-CUzfgf-Q.jpg";
const ceciliaImg = "/assets/arch-cecilia-B0GcVOii.jpg";
const partner1Img = "/assets/arch-partner1-SQmnwl63.jpg";
const partner2Img = "/assets/arch-partner2-DqOcDJOP.jpg";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(TopBar, {}),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Stats, {}),
    /* @__PURE__ */ jsx(Problems, {}),
    /* @__PURE__ */ jsx(HowItWorks, {}),
    /* @__PURE__ */ jsx(Architects, {}),
    /* @__PURE__ */ jsx(Pricing, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function TopBar() {
  return /* @__PURE__ */ jsx("div", { className: "bg-primary text-primary-foreground text-sm", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 py-2 text-center", children: "Consulta inicial gratuita · agende em 24h" }) });
}
function Nav() {
  const links = [{
    href: "#como-funciona",
    label: "Como funciona"
  }, {
    href: "#arquitetas",
    label: "Quem somos"
  }, {
    href: "#precos",
    label: "Quanto custa"
  }, {
    href: "#contato",
    label: "Contato"
  }];
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-4 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(Leaf, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxs("span", { className: "font-serif text-lg tracking-tight", children: [
        "CMI",
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground font-sans text-xs uppercase tracking-widest ml-2", children: "Arquitetura" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-8 text-sm", children: links.map((l) => /* @__PURE__ */ jsx("a", { href: l.href, className: "text-foreground/80 hover:text-primary transition", children: l.label }, l.href)) }),
    /* @__PURE__ */ jsx(Button, { asChild: true, className: "rounded-full px-5", children: /* @__PURE__ */ jsx("a", { href: "#precos", children: "Agendar consulta" }) })
  ] }) });
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 pt-16 pb-20 grid md:grid-cols-2 gap-12 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-primary mb-5", children: "Arquitetura · Interiores · Consultoria" }),
      /* @__PURE__ */ jsx("h1", { className: "font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight", children: "Lares que acolhem, projetados por quem entende você." }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-base md:text-lg text-muted-foreground max-w-lg", children: "Três arquitetas, três cidades, uma mesma sensibilidade. Atendemos em Natal, Londrina e Madri com projetos sob medida, calmos e atemporais." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "rounded-full px-7", children: /* @__PURE__ */ jsx("a", { href: "#precos", children: "Quero meu projeto" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "rounded-full px-7", children: /* @__PURE__ */ jsx("a", { href: "#como-funciona", children: "Como funciona" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center gap-4 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex -space-x-3", children: [
          /* @__PURE__ */ jsx("img", { src: ceciliaImg, alt: "", className: "h-9 w-9 rounded-full object-cover border-2 border-background" }),
          /* @__PURE__ */ jsx("img", { src: partner1Img, alt: "", className: "h-9 w-9 rounded-full object-cover border-2 border-background" }),
          /* @__PURE__ */ jsx("img", { src: partner2Img, alt: "", className: "h-9 w-9 rounded-full object-cover border-2 border-background" })
        ] }),
        "+7 anos de experiência · mais de 200 lares transformados"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -inset-4 bg-accent/30 rounded-[2rem] -z-10 rotate-2" }),
      /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Ambiente projetado em tons calmos", width: 1280, height: 960, className: "rounded-[1.75rem] shadow-2xl shadow-primary/10 object-cover w-full aspect-[4/3]" })
    ] })
  ] });
}
function Stats() {
  const items = [{
    v: "+7",
    l: "anos de mercado"
  }, {
    v: "+200",
    l: "lares entregues"
  }, {
    v: "3",
    l: "cidades atendidas"
  }, {
    v: "100%",
    l: "projetos sob medida"
  }];
  return /* @__PURE__ */ jsx("section", { className: "border-y border-border bg-secondary/50", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6", children: items.map((i) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "font-serif text-3xl md:text-4xl text-primary", children: i.v }),
    /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-1", children: i.l })
  ] }, i.l)) }) });
}
function Problems() {
  const items = [{
    icon: Home,
    title: "Não sabe por onde começar",
    text: "A reforma parece grande demais e cada decisão trava a próxima."
  }, {
    icon: Palette,
    title: "Medo de errar nas escolhas",
    text: "Cores, materiais e móveis viram um quebra-cabeça caro."
  }, {
    icon: Ruler,
    title: "Espaços que não funcionam",
    text: "Plantas mal resolvidas, móveis fora de escala, luz no lugar errado."
  }];
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl text-center max-w-3xl mx-auto leading-tight", children: "Quando você reforma ou decora sozinho, esses obstáculos aparecem" }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-6", children: items.map(({
      icon: Icon,
      title,
      text
    }) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-7", children: [
      /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-full bg-accent/40 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-primary" }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-serif text-xl mb-2", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: text })
    ] }, title)) })
  ] });
}
function HowItWorks() {
  const steps = [{
    n: "01",
    title: "Conversa inicial",
    text: "Entendemos seu espaço, rotina e referências numa conversa leve, online ou presencial."
  }, {
    n: "02",
    title: "Projeto sob medida",
    text: "Plantas, paleta, materiais e mobiliário pensados para a sua vida — não para a foto."
  }, {
    n: "03",
    title: "Acompanhamento",
    text: "Estamos com você na execução, do orçamento à última peça instalada."
  }];
  return /* @__PURE__ */ jsx("section", { id: "como-funciona", className: "bg-secondary/40 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-primary mb-3", children: "Como funciona" }),
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl leading-tight", children: "Um processo calmo, do primeiro café à entrega." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-8", children: steps.map((s) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "font-serif text-6xl text-accent", children: s.n }),
      /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl mt-2", children: s.title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-3 leading-relaxed", children: s.text })
    ] }, s.n)) })
  ] }) });
}
function Architects() {
  const team = [{
    name: "Cecília Oliveira",
    city: "Natal",
    img: ceciliaImg,
    bio: "Fundadora. Apaixonada por luz natural e materialidade brasileira."
  }, {
    name: "Marina Castro",
    city: "Londrina",
    img: partner1Img,
    bio: "Especialista em residências familiares e projetos de longa duração."
  }, {
    name: "Inés Vasconcelos",
    city: "Madri",
    img: partner2Img,
    bio: "Olhar europeu, foco em interiores atemporais e detalhamento fino."
  }];
  return /* @__PURE__ */ jsxs("section", { id: "arquitetas", className: "mx-auto max-w-7xl px-6 py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-primary mb-3", children: "Quem somos" }),
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl leading-tight", children: "Três arquitetas, uma sensibilidade comum." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Mais de 7 anos somando experiência em residências, comercial e hospitalidade." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-8", children: team.map((p) => /* @__PURE__ */ jsxs("article", { className: "group", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl aspect-[4/5] bg-muted", children: /* @__PURE__ */ jsx("img", { src: p.img, alt: p.name, loading: "lazy", width: 640, height: 800, className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl mt-5", children: p.name }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-sm text-primary mt-1", children: [
        /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5" }),
        " ",
        p.city
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-3 text-sm leading-relaxed", children: p.bio })
    ] }, p.name)) })
  ] });
}
function Pricing() {
  const plans = [{
    name: "Consultoria",
    price: "R$ 890",
    tag: "por ambiente",
    features: ["Visita técnica online", "Paleta e materiais", "Lista de compras", "Entrega em 7 dias"],
    featured: false
  }, {
    name: "Projeto Completo",
    price: "R$ 4.900",
    tag: "projeto residencial",
    features: ["Plantas e layout", "3D realista de todos os ambientes", "Detalhamento de marcenaria", "Acompanhamento de obra"],
    featured: true
  }, {
    name: "Premium",
    price: "Sob consulta",
    tag: "alto padrão",
    features: ["Curadoria de obras de arte", "Importação de peças", "Gestão de obra completa", "Pós-entrega 12 meses"],
    featured: false
  }];
  return /* @__PURE__ */ jsx("section", { id: "precos", className: "bg-secondary/40 py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-primary mb-3", children: "Quanto custa" }),
      /* @__PURE__ */ jsx("h2", { className: "font-serif text-3xl md:text-5xl leading-tight", children: "Planos que cabem no seu projeto." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-6", children: plans.map((p) => /* @__PURE__ */ jsxs("div", { className: `rounded-2xl p-8 border ${p.featured ? "bg-primary text-primary-foreground border-primary shadow-xl md:scale-[1.03]" : "bg-card border-border"}`, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        p.featured && /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("h3", { className: "font-serif text-2xl", children: p.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsx("div", { className: "font-serif text-4xl", children: p.price }),
        /* @__PURE__ */ jsx("div", { className: `text-sm mt-1 ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`, children: p.tag })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3 text-sm", children: p.features.map((f) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx(Check, { className: `h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-accent" : "text-primary"}` }),
        /* @__PURE__ */ jsx("span", { children: f })
      ] }, f)) }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: p.featured ? "secondary" : "default", className: "w-full mt-8 rounded-full", children: /* @__PURE__ */ jsx("a", { href: "#contato", children: "Quero esse plano" }) })
    ] }, p.name)) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { id: "contato", className: "bg-primary text-primary-foreground", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Compass, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsx("span", { className: "font-serif text-xl", children: "CMI Arquitetura" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-primary-foreground/80 max-w-xs", children: "Arquitetura e interiores para quem busca lares calmos, funcionais e atemporais." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm uppercase tracking-widest text-primary-foreground/70 mb-3", children: "Onde estamos" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
            " Natal — Brasil"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
            " Londrina — Brasil"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
            " Madri — Espanha"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm uppercase tracking-widest text-primary-foreground/70 mb-3", children: "Fale com a gente" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "contato@cmi.arq.br" }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "secondary", className: "mt-5 rounded-full", children: /* @__PURE__ */ jsx("a", { href: "https://wa.me/", target: "_blank", rel: "noreferrer", children: "Conversar no WhatsApp" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-primary-foreground/15", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-5 text-xs text-primary-foreground/70 flex justify-between", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " CMI Arquitetura"
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Feito com carinho." })
    ] }) })
  ] });
}
export {
  Index as component
};
