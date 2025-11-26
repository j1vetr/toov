import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";
import { z } from "zod";
import { readFileSync } from "fs";
import { join } from "path";

// TOOV Logo as Base64
const logoPath = join(process.cwd(), "attached_assets", "toov_logo.png");
const logoBase64 = readFileSync(logoPath).toString("base64");
const logoImg = `<img src="data:image/png;base64,${logoBase64}" alt="TOOV" style="height: 50px; display: block; margin: 0 auto;" />`;

// Email Configuration
const transporter = nodemailer.createTransport({
  host: "mail.toov.com.tr",
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: "no-reply@toov.com.tr",
    pass: "Toov1234@@NoRply",
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Validation Schemas
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

const projectWizardSchema = z.object({
  projectType: z.string(),
  features: z.array(z.string()).optional(),
  budget: z.string().optional(),
  projectDetails: z.string().optional(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().optional(),
  message: z.string().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact Form Endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactFormSchema.parse(req.body);

      // Email to Admin
      await transporter.sendMail({
        from: '"TOOV Website" <no-reply@toov.com.tr>',
        to: "hello@toov.com.tr",
        subject: `Yeni İletişim Formu: ${data.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00d9ff; border-bottom: 2px solid #00d9ff; padding-bottom: 10px;">
              Yeni İletişim Talebi
            </h2>
            
            <div style="background: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
              <h3 style="margin-top: 0; color: #333;">Kişi Bilgileri</h3>
              <p><strong>Ad Soyad:</strong> ${data.name}</p>
              <p><strong>E-posta:</strong> ${data.email}</p>
            </div>

            <div style="background: #fff; padding: 20px; border-left: 4px solid #00d9ff;">
              <h3 style="margin-top: 0; color: #333;">Mesaj</h3>
              <p style="line-height: 1.6; color: #555;">${data.message.replace(/\n/g, '<br>')}</p>
            </div>

            <p style="color: #999; font-size: 12px; margin-top: 30px; border-top: 1px solid #ddd; padding-top: 15px;">
              Bu mesaj TOOV web sitesi iletişim formundan gönderilmiştir.
            </p>
          </div>
        `,
      });

      // Confirmation Email to Customer
      await transporter.sendMail({
        from: '"TOOV" <no-reply@toov.com.tr>',
        to: data.email,
        subject: "Mesajınız Alındı - TOOV",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1A2332 0%, #2d3e50 100%); padding: 30px; text-align: center;">
              ${logoImg}
            </div>
            
            <div style="padding: 30px; background: #fff;">
              <h2 style="color: #333;">Merhaba ${data.name},</h2>
              <p style="color: #555; line-height: 1.6;">
                Mesajınız başarıyla tarafımıza ulaştı. Ekibimiz en kısa sürede size dönüş yapacaktır.
              </p>
              <p style="color: #555; line-height: 1.6;">
                Genellikle 24 saat içinde geri dönüş sağlamaktayız.
              </p>
              
              <div style="background: #f9f9f9; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #00d9ff;">
                <p style="margin: 0; color: #777; font-size: 14px;"><strong>Gönderdiğiniz Mesaj:</strong></p>
                <p style="color: #555; margin-top: 10px;">${data.message.replace(/\n/g, '<br>')}</p>
              </div>

              <p style="color: #555;">
                İyi günler dileriz,<br>
                <strong style="color: #00d9ff;">TOOV Ekibi</strong>
              </p>
            </div>

            <div style="background: #f5f5f5; padding: 20px; text-align: center; color: #999; font-size: 12px;">
              <p>TOOV - Dijital Dönüşüm Çözümleri</p>
              <p>hello@toov.com.tr | 0850 309 47 69</p>
            </div>
          </div>
        `,
      });

      res.json({ success: true, message: "E-posta başarıyla gönderildi" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ success: false, message: "Bir hata oluştu" });
    }
  });

  // Project Wizard Endpoint
  app.post("/api/project-wizard", async (req, res) => {
    try {
      const data = projectWizardSchema.parse(req.body);

      // Map project type labels
      const projectTypeLabels: Record<string, string> = {
        web: "Web Tasarım",
        mobile: "Mobil Uygulama",
        seo: "SEO & Pazarlama",
        custom: "Özel Yazılım",
      };

      const projectTypeLabel = projectTypeLabels[data.projectType] || data.projectType;

      // Map feature labels
      const featureLabels: Record<string, string> = {
        web_ecommerce: "E-Ticaret (Online Satış)",
        web_cms: "Yönetim Paneli (CMS)",
        web_multilang: "Çoklu Dil Desteği",
        web_other: "Diğer",
        mob_ios: "iOS Uygulaması",
        mob_android: "Android Uygulaması",
        mob_panel: "Yönetim Paneli",
        mob_other: "Diğer",
        seo_audit: "SEO Analizi (Audit)",
        seo_content: "İçerik Üretimi & Blog Yönetimi",
        seo_ads: "Google / Meta Reklam Yönetimi",
        seo_other: "Diğer",
        soft_crm: "CRM / Müşteri Yönetimi",
        soft_erp: "ERP / Stok & Muhasebe",
        soft_api: "3. Parti Entegrasyonlar (API)",
        soft_other: "Diğer",
      };

      const selectedFeatures = data.features
        ?.map((f) => featureLabels[f] || f)
        .join(", ") || "Belirtilmedi";

      // Email to Admin
      await transporter.sendMail({
        from: '"TOOV Website" <no-reply@toov.com.tr>',
        to: "hello@toov.com.tr",
        subject: `🚀 Yeni Proje Talebi: ${data.name} - ${projectTypeLabel}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1A2332 0%, #2d3e50 100%); padding: 30px; text-align: center;">
              <h1 style="color: #00d9ff; margin: 0; font-size: 32px;">Yeni Proje Talebi</h1>
              <p style="color: #fff; margin: 10px 0 0 0;">${projectTypeLabel}</p>
            </div>
            
            <div style="padding: 30px; background: #fff;">
              <div style="background: #f9f9f9; padding: 20px; margin-bottom: 20px; border-radius: 8px; border-left: 4px solid #00d9ff;">
                <h3 style="margin-top: 0; color: #333;">👤 Kişisel Bilgiler</h3>
                <p><strong>Ad Soyad:</strong> ${data.name}</p>
                <p><strong>Firma:</strong> ${data.company || "-"}</p>
                <p><strong>E-posta:</strong> <a href="mailto:${data.email}" style="color: #00d9ff;">${data.email}</a></p>
                <p><strong>Telefon:</strong> <a href="tel:${data.phone}" style="color: #00d9ff;">${data.phone}</a></p>
              </div>

              <div style="background: #f0f9ff; padding: 20px; margin-bottom: 20px; border-radius: 8px; border-left: 4px solid #00d9ff;">
                <h3 style="margin-top: 0; color: #333;">🚀 Proje Detayları</h3>
                <p><strong>Proje Türü:</strong> ${projectTypeLabel}</p>
                <p><strong>Seçilen Özellikler:</strong> ${selectedFeatures}</p>
                <p><strong>Bütçe:</strong> ${data.budget ? data.budget + " ₺" : "Belirtilmedi"}</p>
              </div>

              ${data.projectDetails ? `
              <div style="background: #fff; padding: 20px; margin-bottom: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h3 style="margin-top: 0; color: #333;">📝 Beklentiler & Detaylar</h3>
                <p style="line-height: 1.6; color: #555; white-space: pre-wrap;">${data.projectDetails}</p>
              </div>
              ` : ''}

              ${data.message ? `
              <div style="background: #fff; padding: 20px; margin-bottom: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h3 style="margin-top: 0; color: #333;">📌 Ek Notlar</h3>
                <p style="line-height: 1.6; color: #555; white-space: pre-wrap;">${data.message}</p>
              </div>
              ` : ''}
            </div>

            <div style="background: #f5f5f5; padding: 20px; text-align: center; color: #999; font-size: 12px;">
              <p>Bu talep TOOV web sitesi Proje Sihirbazı üzerinden oluşturulmuştur.</p>
            </div>
          </div>
        `,
      });

      // Confirmation Email to Customer
      await transporter.sendMail({
        from: '"TOOV" <no-reply@toov.com.tr>',
        to: data.email,
        subject: "Proje Talebiniz Alındı - TOOV",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1A2332 0%, #2d3e50 100%); padding: 30px; text-align: center;">
              ${logoImg}
              <p style="color: #fff; margin: 15px 0 0 0; font-size: 18px; font-weight: bold;">Proje Talebiniz Alındı</p>
            </div>
            
            <div style="padding: 30px; background: #fff;">
              <h2 style="color: #333;">Merhaba ${data.name},</h2>
              <p style="color: #555; line-height: 1.6;">
                <strong>${projectTypeLabel}</strong> için oluşturduğunuz proje talebiniz başarıyla tarafımıza ulaştı.
              </p>
              <p style="color: #555; line-height: 1.6;">
                Ekibimiz talebinizi detaylı olarak inceleyecek ve <strong>en geç 24 saat içinde</strong> size geri dönüş sağlayacaktır.
              </p>

              <div style="background: #f0f9ff; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #00d9ff;">
                <h3 style="margin-top: 0; color: #333;">📋 Talep Özeti</h3>
                <p style="margin: 5px 0;"><strong>Proje Türü:</strong> ${projectTypeLabel}</p>
                ${selectedFeatures !== "Belirtilmedi" ? `<p style="margin: 5px 0;"><strong>Özellikler:</strong> ${selectedFeatures}</p>` : ''}
                ${data.budget ? `<p style="margin: 5px 0;"><strong>Bütçe:</strong> ${data.budget} ₺</p>` : ''}
              </div>

              <p style="color: #555; line-height: 1.6;">
                Bu arada, acil bir sorunuz varsa bize aşağıdaki kanallardan ulaşabilirsiniz:
              </p>
              <p style="color: #555;">
                📧 <a href="mailto:hello@toov.com.tr" style="color: #00d9ff; text-decoration: none;">hello@toov.com.tr</a><br>
                📞 <a href="tel:08503094769" style="color: #00d9ff; text-decoration: none;">0850 309 47 69</a>
              </p>

              <p style="color: #555; margin-top: 30px;">
                İyi günler dileriz,<br>
                <strong style="color: #00d9ff;">TOOV Ekibi</strong>
              </p>
            </div>

            <div style="background: #f5f5f5; padding: 20px; text-align: center; color: #999; font-size: 12px;">
              <p>TOOV - Dijital Dönüşüm Çözümleri</p>
              <p>Kağıthane, İstanbul</p>
            </div>
          </div>
        `,
      });

      res.json({ success: true, message: "Proje talebiniz başarıyla gönderildi" });
    } catch (error) {
      console.error("Project wizard error:", error);
      res.status(400).json({ success: false, message: "Bir hata oluştu" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
