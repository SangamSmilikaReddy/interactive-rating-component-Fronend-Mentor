const btns= document.querySelectorAll('[role="button"]');
const selectedrating = document.getElementById('selected-rating');
const firstpage = document.getElementsById('main-box');
const secondpage = document.getElementsById('main-box-2');
const submitBtn = document.getElementsById('a');

btns.forEach((btn)=>{
    btn.addEventListener('click',function (e) {
            let selectedBtn = e.currentTarget;
            for (let i = 0; i < btns.length; i++) {
                if (btns[i].getAttribute('aria-selected') == 'true') {
                    btns[i].setAttribute('aria-selected', false);
                    selectedBtn.setAttribute('aria-selected', true);
                    selectedrating.textContent = selectedBtn.id;
                }
                else {
                    selectedBtn.setAttribute('aria-selected', true);
                    selectedrating.textContent = selectedBtn.id;
                }
            }
        })
})

submitBtn.addEventListener('click',function(){
    firstpage.setAttribute('hidden',true);
    secondpage.setAttribute('hidden');
})