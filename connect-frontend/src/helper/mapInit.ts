export function initMap(key: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.addEventListener("load", () => {
      // maps 로드 써줘야 된다.
      daum.maps.load(() => {
        resolve();
      });
    });
    script.addEventListener("error", () => {
      console.log("failed to load");
      reject();
    });
    // & 를 ? 로 써서 삽질..
    script["src"] = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false`;
    document["body"].appendChild(script);
  });
}
