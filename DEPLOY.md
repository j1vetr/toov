# TOOV Frontend Dağıtım Talimatları (Ubuntu + Nginx)

## 1. Bilgisayarınızda (Build Alma)

Projeyi kendi bilgisayarınızda derleyin:

```bash
npm install
npm run build
```

Bu işlem `dist/public` klasörünü oluşturacaktır. Sunucuya atılacak olan bu klasörün **içindekilerdir**.

## 2. Sunucuya Dosya Transferi

`dist/public` klasörünün **içindeki** tüm dosyaları sunucudaki `/var/www/toov` klasörüne atacağız.

```bash
# Örnek SCP komutu (Kendi terminalinizden çalıştırın)
# dist/public/ ifadesinin sonundaki yıldıza dikkat edin.
scp -r dist/public/* root@sunucu_ip_adresiniz:/var/www/toov/
```

## 3. Sunucu İçinde Yapılacaklar (SSH ile bağlandıktan sonra)

### Klasör İzinlerini Ayarlama
```bash
# Klasör yoksa oluştur
sudo mkdir -p /var/www/toov

# İzinleri düzelt (Önemli: Nginx'in okuyabilmesi için)
sudo chown -R $USER:www-data /var/www/toov
sudo chmod -R 755 /var/www/toov
```

### Nginx Ayarları
```bash
# Konfigürasyon dosyasını oluştur/düzenle
sudo nano /etc/nginx/sites-available/toov
```

Aşağıdaki kodu yapıştırın (`server_name` kısmına kendi domaininizi yazın):

```nginx
server {
    listen 80;
    server_name toov.com.tr www.toov.com.tr; # Domainlerinizi buraya yazın

    root /var/www/toov;
    index index.html;

    # React Router için gerekli yönlendirme
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Statik dosyalar için cache ve performans
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|mp4|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, no-transform";
        access_log off;
    }

    # Gzip Sıkıştırma
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

### Aktifleştirme
```bash
# Sembolik link oluştur (Varsa önce siler)
sudo rm -f /etc/nginx/sites-enabled/toov
sudo ln -s /etc/nginx/sites-available/toov /etc/nginx/sites-enabled/

# Konfigürasyonu test et
sudo nginx -t

# Hata yoksa Nginx'i yeniden başlat
sudo systemctl restart nginx
```

### SSL Sertifikası (HTTPS)
```bash
sudo certbot --nginx -d toov.com.tr -d www.toov.com.tr
```
