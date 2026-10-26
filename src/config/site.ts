// ============================================================
// CONFIGURAÇÕES DA PÁGINA — edite aqui
// ============================================================
import placaImg from "@/assets/placa.jpeg"; // troque o arquivo em src/assets para mudar a foto

export const siteConfig = {
  /** Nome comercial (deixe vazio para não exibir) */
  brandName: "",
  /** WhatsApp no formato 55 + DDD + número, sem espaços ou símbolos */
  whatsappNumber: "5571999320431",
  whatsappMessage:
    "Olá! Conheci a placa de avaliação do Google com QR Code e NFC pela sua página e gostaria de saber mais informações.",
  productImage: placaImg,
  /** Vídeo: caminho MP4 (ex.: "/videos/demo.mp4" em /public) */
  videoMp4: "",
  /** Ou URL de incorporação (ex.: "https://www.youtube.com/embed/ID") */
  videoEmbedUrl: "",
};

export const whatsappLink = () =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
