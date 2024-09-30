// 外部スクリプトを読み込む関数
function loadExternalScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = function() {
        console.log('外部スクリプトがロードされました。');
        var rellax = new Rellax('.rellax');
    };
    document.head.appendChild(script);
}

// 外部スクリプトのURLを指定して読み込む
loadExternalScript('https://cdn.jsdelivr.net/gh/dixonandmoe/rellax@master/rellax.min.js');
