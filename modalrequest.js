const modalBtn = document.querySelector('[data-modal]'),
      modal = document.querySelector('.modal'),
      modald = document.querySelector('.modal_dialog'),
      modalCloseBtn = document.querySelector('[data-close]');

const TOKEN = "",
      CHAT_ID = "",
      URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

function closemodal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}
modalBtn.addEventListener('click', () =>{
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
});

document.getElementById('countpc').oninput = function () {
    document.getElementById('pc_outcount').innerHTML = this.value;
    pc_count = this.value;

};
document.getElementById('countser').oninput = function () {
    document.getElementById('ser_outcount').innerHTML = this.value;
    ser_count = this.value;
};

modalCloseBtn.addEventListener('click', closemodal);

modal.addEventListener('click',(e)=>{
    if(e.target === modald){
        closemodal();
    }
});

document.addEventListener('keydown',(e)=>{
    if(e.code === "Escape" && modal.classList.contains('show')){
        closemodal();
    }
});

document.getElementById('tg').addEventListener('submit', function(e){
    e.preventDefault();
    let message = `<b>Заявка с сайта</b>\n`;
        message += `<b>Имя/Компания: </b>${this.name.value}\n`;
         message += `<b>Номер: </b>${this.phone.value}\n`;
         message += `<b>Telegram: </b>${this.Telegram.value}\n`;
         message += `<b>Заявка на : </b>${pc_count}<b> комьютеров</b>\n`;
         message += `<b>Заявка на : </b>${ser_count}<b> серверов</b>\n`;
         axios.post(URI_API,{
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
         })
});
