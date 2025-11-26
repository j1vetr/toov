// Google reCAPTCHA v3 utility
const RECAPTCHA_SITE_KEY = "6LemyxgsAAAAAPCqx_w-4YlhEPcOKd2k15boHV1e";

declare global {
  interface Window {
    grecaptcha: any;
  }
}

export async function getRecaptchaToken(action: string): Promise<string> {
  try {
    // Wait for grecaptcha to be ready
    await new Promise<void>((resolve) => {
      if (window.grecaptcha && window.grecaptcha.ready) {
        window.grecaptcha.ready(() => resolve());
      } else {
        // Fallback: wait a bit for script to load
        setTimeout(() => resolve(), 1000);
      }
    });

    // Execute reCAPTCHA
    const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
    return token;
  } catch (error) {
    console.error("reCAPTCHA error:", error);
    // Return empty string to allow form submission even if reCAPTCHA fails
    return "";
  }
}
