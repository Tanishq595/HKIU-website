window.addEventListener('load', function () {
    const messages = [
        "Join Hong Kong Industrial University's College of Science for world-class education and research opportunities in science and technology! 20 QUOTAS LEFT!",
        "Join the future of engineering with Hong Kong Industrial University's College of Engineering, offering innovative programs and world-class faculty to prepare you for success in the field! 40 QUOTAS LEFT!",
        "Join the future of interdisciplinary studies with Hong Kong Industrial University's College of Interdisciplinary Studies, offering innovative programs and world-class faculty to prepare you for success in various fields! 30 QUOTAS LEFT!"
    ];
    let message = Math.floor(Math.random() * messages.length);
    function RandomMessage() {
        if (message < messages.length) {
            document.getElementById('promotionInfoBlock').innerHTML = messages[message];
        }
        else {
            message = 0;
            document.getElementById('promotionInfoBlock').innerHTML = messages[message];
        }
        message += 1;
    }
    setInterval(RandomMessage, 3000);

    var video_array = [
        "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video1.mp4",
        "https://personal.cs.cityu.edu.hk/~cs2204/2023/video/video2.mp4"
    ];
    let video_count = 0;
    var video = document.getElementById('videoplay');
    video.removeAttribute("loop");
    video.addEventListener('ended', function (e) {
        video_count = (video_count + 1) % video_array.length; // This will loop back to 0 when it reaches the end of the array
        video.src = video_array[video_count];
        video.play();
    }, false);
});