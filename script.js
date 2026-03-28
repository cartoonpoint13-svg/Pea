function getThumbnail() {
    const url = document.getElementById('videoUrl').value;
    const videoId = extractVideoId(url);
    const resultArea = document.getElementById('resultArea');
    const loader = document.getElementById('loader');

    if (videoId) {
        loader.style.display = "block";
        resultArea.style.display = "none";

        const maxUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        const hqUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

        const img = document.getElementById('thumbPreview');
        img.src = maxUrl;

        document.getElementById('btnMax').href = maxUrl;
        document.getElementById('btnHigh').href = hqUrl;

        img.onload = function() {
            loader.style.display = "none";
            resultArea.style.display = "block";
        }
    } else {
        alert("সঠিক ইউটিউব ভিডিও লিঙ্ক দিন!");
    }
}

function extractVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}