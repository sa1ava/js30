function playSound(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.code}"]`);    
    const key = this.document.querySelector(`.key[data-key="${e.code}"]`);    
    if (!audio) return;
    
    // キーを連続で押したときに、すぐ再生されるように音声ファイルをスタートまで巻き戻す
    audio.currentTime = 0;
    // 音声ファイルの再生
    audio.play();
    // キーが押下されたことを視覚的に分かりやすくするために playing を追加
    key.classList.add("playing");
}

function removePlayingClass(e) {
    const key = document.querySelector(`.key[data-key=${e.code}]`);
    if (key) key.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
window.addEventListener("keyup", removePlayingClass);