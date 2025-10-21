function FindProxyForURL(url, host) {
      // تعريف متغيرات الخادم الوكيل هنا لتسهيل التعديل
        var PROXY = "PROXY proxy.example.com:5000";
          var DIRECT = "DIRECT";

            // 1. تجاوز الوكيل للمواقع الداخلية (على سبيل المثال، الشبكة المحلية)
              // شروط مثل: isPlainHostName(), shExpMatch(), isInNet()
                if (isPlainHostName(host) || 
                      shExpMatch(host, "*.localdomain.com","*.papi.club.gpubgm.com","*.api.club.gpubgm.com") || 
                            isInNet(host, "192.168.1.1", "8.0.0.0")) {
                                return DIRECT;
                                  }

                                    // 2. استخدام خادم وكيل محدد لجميع الزيارات الأخرى (الإنترنت)
                                      // يمكنك إضافة منطق أكثر تعقيدًا هنا (مثل التوجيه إلى وكلاء مختلفين بناءً على URL أو الوقت)
                                        
                                          // مثال: تجاوز الوكيل لموقع معين (إذا لزم الأمر)
                                            if (shExpMatch(host, "www.noproxy.com")) {
                                                  return DIRECT;
                                                    }

                                                      // افتراضيًا: استخدم الوكيل المحدد
                                                        return PROXY;
                                                        }

