export default function decolate( block ) {
    var title = block.querySelector(':scope > div > div > div ');
    console.log("title elem");
    console.log(title);
    title.classList.add('rellax');
    title.setAttribute("data-rellax-speed","1");
}

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


// class="rellax"とdata-rellax-speed="0.5"をテキストに付与する
