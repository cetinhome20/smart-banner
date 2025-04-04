(function() {
  const isMobile = /iphone|ipod|android|ipad/i.test(navigator.userAgent);
  if (!isMobile) return;

  const script = document.currentScript;
  const appName = script.getAttribute("data-app-name") || "Uygulamayı İndir";
  const appDesc = script.getAttribute("data-app-desc") || "";
  const appImage = script.getAttribute("data-app-image") || "";
  const iosUrl = script.getAttribute("data-ios-url");
  const androidUrl = script.getAttribute("data-android-url");
  const position = script.getAttribute("data-position") || "top"; // top veya bottom
  const themeColor = script.getAttribute("data-theme") || "#000";

  const storeUrl = /android/i.test(navigator.userAgent) ? androidUrl : iosUrl;
  if (!storeUrl) return;

  const banner = document.createElement("div");
  banner.style.cssText = `
    position: fixed;
    ${position}: 0;
    left: 0;
    right: 0;
    background: ${themeColor};
    color: white;
    font-family: sans-serif;
    z-index: 9999;
    display: flex;
    align-items: center;
    padding: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  `;

  banner.innerHTML = `
    <img src="${appImage}" alt="${appName}" style="width:40px;height:40px;border-radius:10px;margin-right:10px;">
    <div style="flex:1;">
      <div style="font-size:16px;font-weight:bold;">${appName}</div>
      <div style="font-size:13px;">${appDesc}</div>
    </div>
    <a href="${storeUrl}" style="background:white;color:${themeColor};padding:6px 12px;border-radius:6px;text-decoration:none;font-weight:bold;">İndir</a>
    <span id="close-banner" style="margin-left:10px;font-size:18px;cursor:pointer;">×</span>
  `;

  document.body.appendChild(banner);

  document.getElementById("close-banner").onclick = () => {
    banner.style.display = "none";
  };
})();