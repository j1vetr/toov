# TOOV Frontend Dağıtım Talimatları (Ubuntu + Nginx)

Bu talimatlar, React projenizi Ubuntu sunucunuzda Nginx ile yayınlamanızı sağlar.

## 1. Projeyi Oluşturma (Build)

Öncelikle projenin "build" edilmiş (yayınlanmaya hazır) versiyonunu oluşturmalısınız. Bunu kendi bilgisayarınızda veya sunucuda yapabilirsiniz.

```bash
# Bağımlılıkları yükleyin
npm install

# Projeyi derleyin (dist klasörü oluşacak)
npm run build
```

*Not: Bu işlem sonucunda oluşan `dist` klasörü, sunucuya atacağımız dosyalardır.*

## 2. Sunucu Hazırlığı

Sunucunuzda gerekli klasörü oluşturun ve izinleri ayarlayın:

```bash
# Klasörü oluştur
sudo mkdir -p /var/www/toov

# Dosyaları sunucuya kopyalayın (dist içindeki her şeyi /var/www/toov içine)
# Örnek (kendi bilgisayarınızdan): scp -r dist/* user@sunucu_ip:/var/www/toov
# Veya sunucuda build aldıysanız:
sudo cp -r dist/* /var/www/toov/

# İzinleri ayarlayın
sudo chown -R $USER:$USER /var/www/toov
sudo chmod -R 755 /var/www/toov
```

## 3. Nginx Konfigürasyonu

Proje ana dizininde oluşturduğum `nginx.conf` dosyasını `/etc/nginx/sites-available/toov` olarak kaydedin.

```bash
# Konfigürasyon dosyasını oluşturun
sudo nano /etc/nginx/sites-available/toov
```

Açılan dosyaya, size verdiğim `nginx.conf` içeriğini yapıştırın. `server_name` kısmına kendi domaininizi yazmayı unutmayın.

Kaydettikten sonra (CTRL+X, Y, Enter):

```bash
# Siteyi aktif edin
sudo ln -s /etc/nginx/sites-available/toov /etc/nginx/sites-enabled/

# Nginx ayarlarını test edin
sudo nginx -t

# Hata yoksa Nginx'i yeniden başlatın
sudo systemctl restart nginx
```

## 4. SSL Sertifikası (Opsiyonel ama Önerilir)

Domaininiz varsa Certbot ile ücretsiz SSL kurabilirsiniz:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d domaininiz.com
```

Tebrikler! Siteniz yayında.
