const copyLinkBtn_const = document.getElementById('copyLinkBtn');
const sendLinkBtn_const = document.getElementById('sendLinkBtn');
const goToAppBtn_const = document.getElementById('goToAppBtn');
const app_url = "https://bogdanshkromiukwork.github.io/SolDec3/";
goToAppBtn_const.addEventListener('click', () => {
    window.open(app_url, '_blank');
});
copyLinkBtn_const.addEventListener('click', async () => {
    alert("hi");
    try {
        await navigator.clipboard.writeText(app_url);
        alert('Link copied to clipboard!');
    } catch (error) {
        console.error('Error copying link:', error);
    }
});
sendLinkBtn_const.addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'SolDec3',
                text: 'Check out this app!',
                url: app_url,
            });
            console.log('Link shared successfully');
        } catch (error) {
            console.error('Error sharing link:', error);
        }
    } else {
        alert('Web Share API is not supported in this browser, please copy the link manually.');
    }
});